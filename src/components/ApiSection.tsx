"use client";

import { useState } from "react";

const requestExample = `curl -X POST https://tailwind-prefixer.web.app/api/prefix \\
  -H "Content-Type: application/json" \\
  -d '{
    "prefix": "tw-",
    "text": "<div class=\\"flex items-center p-4\\">Hello</div>",
    "mode": "html"
  }'`;

const responseExample = `{
  "success": true,
  "prefix": "tw-",
  "mode": "html",
  "original": "<div class=\\"flex items-center p-4\\">Hello</div>",
  "result": "<div class=\\"tw-flex tw-items-center tw-p-4\\">Hello</div>"
}`;

const jsExample = `const response = await fetch("/api/prefix", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    prefix: "tw-",
    text: '<div class="flex items-center p-4">Hello</div>',
    mode: "html"   // or "jsx" for className
  })
});

const data = await response.json();
console.log(data.result);`;

export function ApiSection() {
  const [copiedBlock, setCopiedBlock] = useState<string | null>(null);

  const copyCode = async (code: string, block: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedBlock(block);
      setTimeout(() => setCopiedBlock(null), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section
      id="api"
      className="py-16 sm:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-500 mb-4">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            REST API
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Prefixer API
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Integrate the prefixer directly into your build pipeline, CI/CD, or any automation tool.
            Send a POST request and get your prefixed code back as JSON.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Endpoint info */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="border-b border-border px-5 py-3 flex items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                POST
              </span>
              <code className="text-sm font-mono text-foreground">/api/prefix</code>
            </div>

            <div className="p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4">Request body</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Parameter</th>
                      <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Type</th>
                      <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Required</th>
                      <th className="text-left py-2 font-medium text-muted-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">
                        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">prefix</code>
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">string</td>
                      <td className="py-3 pr-4">
                        <span className="text-emerald-500 text-xs font-medium">Yes</span>
                      </td>
                      <td className="py-3 text-muted-foreground">
                        The prefix to add before each Tailwind class (e.g. <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">&quot;tw-&quot;</code>)
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">
                        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">text</code>
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">string</td>
                      <td className="py-3 pr-4">
                        <span className="text-emerald-500 text-xs font-medium">Yes</span>
                      </td>
                      <td className="py-3 text-muted-foreground">
                        The HTML or JSX code containing Tailwind classes to prefix
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">
                        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">mode</code>
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">string</td>
                      <td className="py-3 pr-4">
                        <span className="text-muted-foreground text-xs">No</span>
                      </td>
                      <td className="py-3 text-muted-foreground">
                        <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">&quot;html&quot;</code> (default) for <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">class=&quot;...&quot;</code> or <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">&quot;jsx&quot;</code> for <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">className=&quot;...&quot;</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* cURL example */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="border-b border-border px-5 py-2.5 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">cURL Example</span>
              <button
                onClick={() => copyCode(requestExample, "curl")}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {copiedBlock === "curl" ? (
                  <>
                    <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Copied
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
            </div>
            <pre className="p-5 overflow-x-auto custom-scrollbar">
              <code className="text-sm font-mono text-foreground leading-relaxed whitespace-pre">{requestExample}</code>
            </pre>
          </div>

          {/* Response example */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="border-b border-border px-5 py-2.5 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Response</span>
              <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500">200 OK</span>
            </div>
            <pre className="p-5 overflow-x-auto custom-scrollbar">
              <code className="text-sm font-mono text-foreground leading-relaxed whitespace-pre">{responseExample}</code>
            </pre>
          </div>

          {/* JavaScript example */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="border-b border-border px-5 py-2.5 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">JavaScript / Node.js</span>
              <button
                onClick={() => copyCode(jsExample, "js")}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {copiedBlock === "js" ? (
                  <>
                    <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Copied
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
            </div>
            <pre className="p-5 overflow-x-auto custom-scrollbar">
              <code className="text-sm font-mono text-foreground leading-relaxed whitespace-pre">{jsExample}</code>
            </pre>
          </div>

          {/* Error responses */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="border-b border-border px-5 py-3">
              <h3 className="text-sm font-semibold text-foreground">Error responses</h3>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center rounded-md bg-red-500/10 px-2 py-0.5 text-xs font-bold text-red-500 ring-1 ring-inset ring-red-500/20 flex-shrink-0">
                  400
                </span>
                <p className="text-sm text-muted-foreground">
                  Missing or invalid <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">prefix</code> or <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">text</code> parameter, or malformed JSON body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
