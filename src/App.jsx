import { Github } from "lucide-react";
import Logo from "./Logo";

const caesPortfolioUrl = "https://computing.caes.ucdavis.edu/";
const githubUrl = "https://github.com/cydoval";

function App() {
  return (
    <main className="blueprint-page min-h-svh overflow-hidden bg-base-100 text-base-content">
      <section className="blueprint-frame" aria-labelledby="intro-title">
        <span
          className="blueprint-node blueprint-node--top-left"
          aria-hidden="true"
        />
        <span
          className="blueprint-node blueprint-node--top-right"
          aria-hidden="true"
        />
        <span
          className="blueprint-node blueprint-node--bottom-left"
          aria-hidden="true"
        />
        <span
          className="blueprint-node blueprint-node--bottom-right"
          aria-hidden="true"
        />

        <div className="relative mt-60 z-[1] flex flex-col items-start gap-3 border-t border-dashed border-main-border bg-base-100 p-[var(--blueprint-gutter)]">
          <Logo
            className="h-[var(--blueprint-logo-size)] w-[var(--blueprint-logo-size)] text-primary"
            aria-hidden="true"
          />

          <div>
            <h1 id="intro-title" className="sr-only">
              Cal Doval
            </h1>
            <div className="max-w-2xl text-lg">
              <p className="mb-2">My name is Cal Doval.</p>
              <p>
                I create websites for{" "}
                <a
                  className="text-primary no-underline hover:underline focus-visible:underline"
                  href={caesPortfolioUrl}
                >
                  UC Davis College of Agricultural and Environmental Sciences
                </a>{" "}
                , and occasionally other companies.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-[1] flex min-h-2 items-center overflow-hidden border-y border-dashed border-main-border bg-base-100 px-[var(--blueprint-gutter)]">
          <span className="blueprint-hatch" aria-hidden="true" />
          <a
            className="btn btn-primary relative z-[1] my-2"
            href={githubUrl}
            aria-label="Cal Doval on GitHub"
          >
            <Github
              className="size-5 shrink-0"
              strokeWidth={2}
              aria-hidden="true"
            />
            Github
          </a>
        </div>

        <div
          className="pointer-events-none relative z-0 min-h-full overflow-hidden before:absolute before:inset-[0_0_var(--blueprint-bottom-guide)_0] before:bg-[repeating-linear-gradient(135deg,transparent_0,transparent_1.15rem,var(--main-border)_1.15rem,var(--main-border)_1.25rem,transparent_1.25rem,transparent_1.95rem)] before:content-['']"
          aria-hidden="true"
        />
      </section>
    </main>
  );
}

export default App;
