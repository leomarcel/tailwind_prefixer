import { NextRequest, NextResponse } from "next/server";

function transformClasses(
  text: string,
  prefix: string,
  mode: "html" | "jsx" = "html"
): string {
  if (!prefix || !text) return text;

  const pattern =
    mode === "jsx"
      ? /className=["']([^"']*)["']/g
      : /class=["']([^"']*)["']/g;

  return text.replace(pattern, (match, classes: string) => {
    const attr = mode === "jsx" ? "className" : "class";
    const quote = match.includes('"') ? '"' : "'";

    const prefixed = classes
      .split(/\s+/)
      .filter(Boolean)
      .map((cls: string) => {
        const parts = cls.split(":");
        const utility = parts.pop()!;
        const modifiers = parts;

        const isNegative = utility.startsWith("-");
        const base = isNegative ? utility.slice(1) : utility;
        const prefixedUtility = isNegative
          ? `-${prefix}${base}`
          : `${prefix}${base}`;

        if (modifiers.length > 0) {
          return `${modifiers.join(":")}:${prefixedUtility}`;
        }
        return prefixedUtility;
      })
      .join(" ");

    return `${attr}=${quote}${prefixed}${quote}`;
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prefix, text, mode } = body;

    if (!prefix || typeof prefix !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'prefix' parameter. Must be a non-empty string." },
        { status: 400 }
      );
    }

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'text' parameter. Must be a non-empty string." },
        { status: 400 }
      );
    }

    const attrMode: "html" | "jsx" =
      mode === "jsx" ? "jsx" : "html";

    const result = transformClasses(text, prefix, attrMode);

    return NextResponse.json({
      success: true,
      prefix,
      mode: attrMode,
      original: text,
      result,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body. Expected { prefix: string, text: string, mode?: 'html' | 'jsx' }" },
      { status: 400 }
    );
  }
}
