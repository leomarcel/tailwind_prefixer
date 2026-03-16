import { InputTransform } from "@/components/InputTransform";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ApiSection } from "@/components/ApiSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient grid-pattern relative overflow-hidden border-b border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-500 mb-6">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Free &amp; Open Source
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                Add custom prefixes to{" "}
                <span className="gradient-text">Tailwind CSS</span>{" "}
                classes
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Instantly namespace your Tailwind CSS utility classes with a custom prefix.
                Perfect for avoiding conflicts in micro-frontends, design systems,
                WordPress plugins, and legacy codebases.
              </p>
            </div>

            {/* Main Tool */}
            <InputTransform />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Why use Tailwind Prefixer?
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                When Tailwind&apos;s built-in prefix config isn&apos;t enough, this tool transforms your existing markup instantly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-border bg-card p-6 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 sm:py-24 border-t border-border/40 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                How it works
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Three simple steps to prefix all your Tailwind classes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white text-lg font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Section */}
        <ApiSection />

        {/* Use Cases Section */}
        <section className="py-16 sm:py-24 border-t border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Common use cases
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border p-4"
                >
                  <svg
                    className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {useCase.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

const features = [
  {
    title: "HTML & JSX Support",
    description:
      'Handles both class="..." for HTML templates and className="..." for React/JSX. Switch modes with one click.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Modifier-Aware",
    description:
      "Intelligently preserves Tailwind modifiers like hover:, sm:, dark:, focus: while only prefixing the base utility class.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Preview",
    description:
      "See your prefixed output instantly as you type. No submit buttons, no waiting — just paste and get results.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Framework Agnostic",
    description:
      "Works with React, Vue, Angular, Svelte, Astro, PHP, Laravel Blade, WordPress — any framework that uses Tailwind CSS.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Negative Values Preserved",
    description:
      "Correctly handles negative utility classes like -mt-4, -translate-x-1/2 by preserving the negative sign before the prefix.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    title: "One-Click Copy",
    description:
      "Copy the transformed result to your clipboard with a single click. Paste it directly into your codebase.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Set your prefix",
    description:
      'Enter any custom prefix like "tw-", "app-", or "my-project-". The default is "tw-".',
  },
  {
    title: "Paste your code",
    description:
      "Paste your HTML or JSX markup containing Tailwind CSS classes into the input panel.",
  },
  {
    title: "Copy the result",
    description:
      "Your prefixed code appears instantly in the output panel. Copy it with one click.",
  },
];

const useCases = [
  {
    title: "Micro-frontends",
    description: "Avoid CSS conflicts between independently deployed apps.",
  },
  {
    title: "WordPress Plugins",
    description: "Prevent style collisions with other themes and plugins.",
  },
  {
    title: "Design Systems",
    description: "Namespace utilities for multi-brand design tokens.",
  },
  {
    title: "Legacy Integration",
    description: "Safely add Tailwind alongside existing CSS frameworks.",
  },
  {
    title: "Component Libraries",
    description: "Ship scoped styles that won't leak into consumer apps.",
  },
  {
    title: "Email Templates",
    description: "Prefix classes to avoid email client CSS overrides.",
  },
];
