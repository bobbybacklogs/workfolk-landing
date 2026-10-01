import { Reveal } from "@/components/reveal";
import { AccessForm } from "@/components/access-form";

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-400 font-mono text-sm font-bold text-ink">
        W
      </span>
      {!compact && (
        <span className="text-lg font-semibold tracking-tight text-cream">
          Workfolk
        </span>
      )}
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-amber-400">
      {children}
    </p>
  );
}

function Nav() {
  const links = [
    ["How it works", "#how"],
    ["The team", "#team"],
    ["Integrations", "#integrations"],
    ["Handoffs", "#handoffs"],
    ["FAQ", "#faq"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-cream"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#access"
          className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}

function TeamChatMock() {
  const msgs: [string, string, string, boolean][] = [
    ["C", "Coordinator · team lead", "On it. Researcher, map what we need. Developer, take the implementation. I'll bring it together.", false],
    ["R", "Researcher", "Checked the provider docs and the calendar. Two endpoints need updating — no conflicts with Thursday's deploy.", false],
    ["D", "Developer", "Updated the integration and verified the tests. Gmail draft is ready for your review.", false],
    ["C", "Coordinator · team lead", "Patch + migration notes ready. Flagged the one decision that needs you.", true],
  ];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-soft/90 shadow-2xl shadow-black/60">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="ml-2 font-mono text-xs text-faint">workfolk · mission-control</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-xs text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
          3 online
        </span>
      </div>
      <div className="space-y-4 px-5 py-5">
        {msgs.map(([initial, role, text, highlight], i) => (
          <div
            key={i}
            className={`flex gap-3 rounded-xl border p-3.5 ${
              highlight ? "border-amber-400/40 bg-amber-400/[0.06]" : "border-line/70 bg-ink-card/60"
            }`}
          >
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-xs font-bold ${
                highlight ? "bg-amber-400 text-ink" : "bg-zinc-700 text-cream"
              }`}
            >
              {initial}
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-faint">{role}</p>
              <p className="mt-1 text-sm leading-relaxed text-cream/90">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-line px-5 py-3.5">
        <p className="font-mono text-xs text-faint">
          <span className="text-amber-400">✓</span> verified · handed back complete
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-noise relative overflow-hidden pt-16">
      <div className="bg-blueprint absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Eyebrow>Workfolk · Early access</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              An autonomous team built to move complex work forward.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Give Workfolk an objective — not a sequence of prompts — and it
              assembles the right specialists to get the job done. They plan,
              research, build, test, review, and deliver as one coordinated team.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#access"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
              >
                Get early access
              </a>
              <a
                href="#how"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-amber-400/60 hover:text-amber-400"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 font-mono text-xs text-faint">
              For solo founders and small teams with big backlogs.
            </p>
          </Reveal>
          <Reveal delay={150} className="animate-float-slow">
            <TeamChatMock />
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-line/60 pt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-faint">
              Powered by
            </span>
            {["ModelHitch · provider-agnostic inference", "Open handoff protocol", "Your Gmail + Calendar"].map(
              (t) => (
                <span key={t} className="text-sm text-muted">
                  {t}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Give the objective",
      body: "Describe the result you want — not the prompts, not the step-by-step. Workfolk takes it from there.",
    },
    {
      n: "02",
      title: "The team assembles",
      body: "A coordinator breaks the work down and routes it to the right specialists. They share context, hand off tasks, and review each other's work — without making you the messenger.",
    },
    {
      n: "03",
      title: "Finished work comes back",
      body: "The team verifies what it produces and returns work that's complete, considered, and ready to use. You guide without becoming the project manager for a team of AI agents.",
    },
  ];
  return (
    <section id="how" className="relative scroll-mt-20 border-t border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Assign the outcome. The team handles the rest.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="h-full rounded-2xl border border-line bg-ink-card/60 p-7">
                <p className="font-mono text-sm text-amber-400">{s.n}</p>
                <h3 className="mt-3 text-xl font-semibold text-cream">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-faint">
            One work order · A coordinated team · A tangible result
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function TheTeam() {
  const features = [
    {
      title: "Named specialists",
      body: "Coordinator, Researcher, Developer, Reviewer — each with a defined role and a plain-English mandate. You always know who's doing what.",
    },
    {
      title: "Shared context",
      body: "Decisions, conventions, and project knowledge carry across sessions and teammates. Tomorrow's work starts where today's left off.",
    },
    {
      title: "Dedicated workrooms",
      body: "Complex projects get their own workrooms — focused spaces where the team collaborates without losing the thread.",
    },
    {
      title: "Verification built in",
      body: "The team checks its own work before handing it back. Nothing ships unreviewed.",
    },
    {
      title: "Custom teammates",
      body: "Define your own teammates, responsibilities, and workflows for the kinds of work you do most. Shape the team around yours.",
    },
    {
      title: "You stay in the loop",
      body: "Review gates and approvals keep you close enough to guide the work — never the bottleneck, never out of the picture.",
    },
  ];
  return (
    <section id="team" className="scroll-mt-20 border-t border-line/60 bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>The team</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            A team, not a chatbot.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Each teammate has a clear role, but no one works in isolation. They
            share context, hand off tasks, review one another's work, and keep
            the project moving.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 120}>
              <div className="h-full rounded-2xl border border-line bg-ink-card/60 p-7 transition-colors hover:border-amber-400/40">
                <h3 className="text-lg font-semibold text-cream">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  const cards = [
    {
      title: "Gmail",
      tag: "New",
      body: "Follow up on threads, draft responses for your approval, and triage the inbox. The team handles the email — you keep the decisions.",
    },
    {
      title: "Google Calendar",
      tag: "New",
      body: "Meetings, deadlines, focus time. The team sees your day and schedules work around it — never through it.",
    },
    {
      title: "ModelHitch",
      tag: "Under the hood",
      body: "Provider-agnostic inference across 19 providers with automatic failover. The team always runs on whatever model fits the job.",
    },
  ];
  return (
    <section id="integrations" className="scroll-mt-20 border-t border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Connected</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Workfolk lives where your work lives.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Your team shouldn't need you to copy-paste between tabs. Workfolk
            plugs into the tools your work already runs on.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-line bg-ink-card/60 p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-cream">{c.title}</h3>
                  <span
                    className={`rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${
                      c.tag === "New"
                        ? "bg-amber-400/15 text-amber-400"
                        : "bg-zinc-800 text-muted"
                    }`}
                  >
                    {c.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HandoffDiagram() {
  // Three nodes; a job token travels Coordinator -> Developer -> Reviewer on a loop.
  const node = (x: number, label: string, sub: string) => (
    <g>
      <rect x={x - 78} y={52} width={156} height={64} rx={14} fill="#17171b" stroke="#26262c" />
      <circle cx={x - 50} cy={84} r={13} fill="#fbbf24" />
      <text x={x - 50} y={89} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0a0a0b" fontFamily="monospace">
        {label[0]}
      </text>
      <text x={x + 12} y={80} textAnchor="middle" fontSize={13} fontWeight={600} fill="#f5f2ea">
        {label}
      </text>
      <text x={x + 12} y={98} textAnchor="middle" fontSize={10} fill="#71717a" fontFamily="monospace">
        {sub}
      </text>
    </g>
  );
  return (
    <svg viewBox="0 0 680 170" className="w-full" role="img" aria-label="A job envelope traveling between teammates">
      <defs>
        <path id="wire-a" d="M 184 84 L 256 84" fill="none" />
        <path id="wire-b" d="M 424 84 L 496 84" fill="none" />
      </defs>
      <line x1={184} y1={84} x2={256} y2={84} stroke="#26262c" strokeWidth={2} strokeDasharray="6 6" />
      <line x1={424} y1={84} x2={496} y2={84} stroke="#26262c" strokeWidth={2} strokeDasharray="6 6" />
      {node(106, "Coordinator", "routes")}
      {node(340, "Developer", "builds")}
      {node(574, "Reviewer", "verifies")}
      <g>
        <rect x={-26} y={-13} width={52} height={26} rx={13} fill="#fbbf24" />
        <text textAnchor="middle" dy={4} fontSize={10} fontWeight={700} fill="#0a0a0b" fontFamily="monospace">
          JOB
        </text>
        <animateMotion dur="3.2s" repeatCount="indefinite" rotate={0}>
          <mpath href="#wire-a" />
        </animateMotion>
      </g>
      <g>
        <rect x={-26} y={-13} width={52} height={26} rx={13} fill="#fbbf24" />
        <text textAnchor="middle" dy={4} fontSize={10} fontWeight={700} fill="#0a0a0b" fontFamily="monospace">
          JOB
        </text>
        <animateMotion dur="3.2s" begin="1.6s" repeatCount="indefinite" rotate={0}>
          <mpath href="#wire-b" />
        </animateMotion>
      </g>
    </svg>
  );
}

function Handoffs() {
  const points = [
    {
      title: "Structured envelopes",
      body: "Every handoff carries the task, its context, and its chain of custody. Nothing arrives unexplained.",
    },
    {
      title: "Provider-independent",
      body: "Agent-to-agent handoffs and ModelHitch peer requests ride the same open protocol — work moves across models, providers, and runtimes.",
    },
    {
      title: "No central bottleneck",
      body: "Handoffs route peer-to-peer between whoever's capable and free. The wire finds capacity; you don't play dispatcher.",
    },
  ];
  return (
    <section id="handoffs" className="scroll-mt-20 border-t border-line/60 bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>The wire</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Open handoffs. No black boxes.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Behind the scenes, teammates pass work over an open handoff
            protocol — so a job can move from one specialist to another, or
            from one model to another, without losing the thread.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl border border-line bg-ink-card/60 p-6 sm:p-10">
            <HandoffDiagram />
            <p className="mt-4 text-center font-mono text-xs text-faint">
              live: a job envelope traveling the wire
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-line bg-ink-card/60 p-7">
                <h3 className="text-lg font-semibold text-cream">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const cards = [
    {
      title: "The solo founder",
      body: "Move research, implementation, tests, and recurring work off your plate. Keep your attention on the product.",
    },
    {
      title: "The small software team",
      body: "Give your engineers a shared team of specialists without adding another coordination layer.",
    },
    {
      title: "The independent builder",
      body: "Define the teammates your projects need. Work in the dashboard or build with the TypeScript SDK.",
    },
  ];
  return (
    <section className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            More to build. More hands to help.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            For capable people carrying more work than they have people to
            delegate it to.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-line bg-ink-card/60 p-7">
                <p className="font-mono text-sm text-amber-400">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-cream">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items: [string, string][] = [
    [
      "Is Workfolk available yet?",
      "Not publicly yet — Workfolk is in development. Join the early-access list and you'll be first in when it opens.",
    ],
    [
      "How is this different from a chatbot?",
      "Chatbots respond; Workfolk delivers. Named teammates share context, use real tools, run checks, and hand back finished work — patches, briefs, plans — not another chat transcript.",
    ],
    [
      "Can I create my own teammates?",
      "Yes. Name a teammate, give them a role and a plain-English mandate, and they join the team alongside the built-in specialists.",
    ],
    [
      "What does it connect to?",
      "Gmail and Google Calendar today, with more on the way. Under the hood it runs on ModelHitch, so inference stays provider-agnostic with automatic failover.",
    ],
    [
      "What will it cost?",
      "Pricing hasn't been announced. Joining the early-access list is free and doesn't commit you to anything.",
    ],
  ];
  return (
    <section id="faq" className="scroll-mt-20 border-t border-line/60 bg-ink-soft/40">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            A few things to know.
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {items.map(([q, a], i) => (
            <Reveal key={q} delay={i * 60}>
              <details className="faq rounded-2xl border border-line bg-ink-card/60 px-6">
                <summary className="flex items-center justify-between py-5 text-left">
                  <span className="font-semibold text-cream">{q}</span>
                  <span className="faq-icon ml-4 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line font-mono text-lg text-amber-400">
                    +
                  </span>
                </summary>
                <div className="faq-body">
                  <div>
                    <p className="pb-6 text-sm leading-relaxed text-muted">{a}</p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Access() {
  return (
    <section id="access" className="relative scroll-mt-20 overflow-hidden border-t border-line/60">
      <div className="bg-blueprint absolute inset-0 rotate-180" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8">
        <Reveal>
          <Eyebrow>Early access</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-cream sm:text-5xl">
            Keep the ambition.
            <br />
            Share the workload.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Be first in when Workfolk opens. Tell us what you'd hand off
            first — then get back to the work only you can do.
          </p>
          <AccessForm />
          <p className="mt-4 font-mono text-xs text-faint">
            Free to join · No commitment
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <Wordmark compact />
        <p className="font-mono text-xs text-faint">
          © 2026 Oddworks · Workfolk is in development
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <TheTeam />
        <Integrations />
        <Handoffs />
        <Audience />
        <Faq />
        <Access />
      </main>
      <Footer />
    </div>
  );
}
