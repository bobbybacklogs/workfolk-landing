"use client";

// TODO: point this at the real Workfolk early-access inbox before launch.
const EARLY_ACCESS_EMAIL = "intake@genoventures.com";

export function AccessForm() {
  return (
    <form
      className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.currentTarget.querySelector("input");
        const email = input?.value.trim() ?? "";
        window.location.href = `mailto:${EARLY_ACCESS_EMAIL}?subject=${encodeURIComponent(
          "Workfolk early access"
        )}&body=${encodeURIComponent(
          `Hi — I'd like early access to Workfolk.\n\nEmail: ${email}\nWhat I'd hand off first: `
        )}`;
      }}
    >
      <input
        type="email"
        required
        placeholder="you@company.com"
        className="h-12 flex-1 rounded-full border border-line bg-ink-card px-5 text-sm text-cream placeholder:text-faint focus:border-amber-400/60 focus:outline-none"
      />
      <button
        type="submit"
        className="h-12 shrink-0 rounded-full bg-amber-400 px-6 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
      >
        Request access
      </button>
    </form>
  );
}
