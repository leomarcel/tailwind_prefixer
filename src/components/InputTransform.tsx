"use client";

import { useState, useCallback } from "react";

export function InputTransform() {
  const [prefix, setPrefix] = useState("tw-");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<"html" | "jsx">("html");

  const transform = useCallback((text: string, pfx: string, attrMode: "html" | "jsx") => {
    if (!pfx || !text) return text;

    // Match class="..." or className="..." or class='...' or className='...'
    const patterns =
      attrMode === "jsx"
        ? /className=["']([^"']*)["']/g
        : /class=["']([^"']*)["']/g;

    return text.replace(patterns, (match, classes: string) => {
      const attr = attrMode === "jsx" ? "className" : "class";
      const quote = match.includes('"') ? '"' : "'";
      const prefixed = classes
        .split(/\s+/)
        .filter(Boolean)
        .map((cls: string) => {
          // Don't prefix modifiers like hover:, sm:, dark:, etc.
          // But DO prefix the base utility after the modifier chain
          const parts = cls.split(":");
          const utility = parts.pop()!;
          const modifiers = parts;

          // Handle negative values like -mt-4
          const isNegative = utility.startsWith("-");
          const base = isNegative ? utility.slice(1) : utility;
          const prefixedUtility = isNegative ? `-${pfx}${base}` : `${pfx}${base}`;

          if (modifiers.length > 0) {
            return `${modifiers.join(":")}:${prefixedUtility}`;
          }
          return prefixedUtility;
        })
        .join(" ");

      return `${attr}=${quote}${prefixed}${quote}`;
    });
  }, []);

  const handleInputChange = (value: string) => {
    setInput(value);
    setOutput(transform(value, prefix, mode));
    setCopied(false);
  };

  const handlePrefixChange = (value: string) => {
    setPrefix(value);
    setOutput(transform(input, value, mode));
    setCopied(false);
  };

  const handleModeChange = (newMode: "html" | "jsx") => {
    setMode(newMode);
    setOutput(transform(input, prefix, newMode));
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = output;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setCopied(false);
  };

  const hasContent = input.length > 0;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Controls bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        {/* Prefix input */}
        <div className="flex items-center gap-3">
          <label
            htmlFor="prefix-input"
            className="text-sm font-medium text-muted-foreground whitespace-nowrap"
          >
            Prefix
          </label>
          <input
            id="prefix-input"
            type="text"
            value={prefix}
            onChange={(e) => handlePrefixChange(e.target.value)}
            className="h-9 w-28 rounded-lg border border-border bg-background px-3 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 transition-colors"
            placeholder="tw-"
          />
        </div>

        {/* Mode selector */}
        <div className="flex items-center rounded-lg border border-border bg-muted/50 p-0.5">
          <button
            onClick={() => handleModeChange("html")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              mode === "html"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            HTML
          </button>
          <button
            onClick={() => handleModeChange("jsx")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              mode === "jsx"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            JSX / TSX
          </button>
        </div>

        {/* Action buttons */}
        {hasContent && (
          <div className="flex items-center gap-2 sm:ml-auto">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-600 transition-colors"
            >
              {copied ? (
                <>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                  Copy
                </>
              )}
            </button>
            <button
              onClick={handleClear}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Editor panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input panel */}
        <div className="relative rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Input
            </span>
            <span className="text-xs text-muted-foreground/60">
              {mode === "html" ? 'class="..."' : 'className="..."'}
            </span>
          </div>
          <textarea
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            className="code-editor custom-scrollbar w-full resize-none bg-transparent p-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none min-h-[280px] sm:min-h-[360px]"
            placeholder={
              mode === "html"
                ? '<div class="flex items-center gap-4 p-6">\n  <h1 class="text-2xl font-bold text-gray-900">\n    Hello World\n  </h1>\n  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">\n    Click me\n  </button>\n</div>'
                : '<div className="flex items-center gap-4 p-6">\n  <h1 className="text-2xl font-bold text-gray-900">\n    Hello World\n  </h1>\n  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">\n    Click me\n  </button>\n</div>'
            }
            spellCheck={false}
          />
        </div>

        {/* Output panel */}
        <div className="relative rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Output
            </span>
            {hasContent && (
              <span className="text-xs text-sky-400 font-medium">
                prefix: {prefix || "—"}
              </span>
            )}
          </div>
          <textarea
            value={output}
            readOnly
            className="code-editor custom-scrollbar w-full resize-none bg-transparent p-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none min-h-[280px] sm:min-h-[360px]"
            placeholder="Prefixed output will appear here..."
            spellCheck={false}
          />
        </div>
      </div>

      {/* Validation error */}
      {!prefix && hasContent && (
        <div className="mt-3 flex items-center gap-2 text-sm text-amber-500">
          <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          Please enter a prefix to transform classes.
        </div>
      )}
    </div>
  );
}
