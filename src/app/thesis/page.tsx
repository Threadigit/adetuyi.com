import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Powering Nigeria: Infrastructure Fund 1 | Tolu Adetuyi",
  description: "A manifesto for solving Nigeria's power infrastructure deficit.",
};

export default function ThesisPage() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24">
      <Link
        href="/"
        className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
      >
        <span className="mr-2">←</span> Back
      </Link>

      <article className="animate-fade-up">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-accent"></div>
            <span className="text-[13px] font-medium uppercase tracking-widest text-accent">
              Active Thesis
            </span>
          </div>
          <h1 className="text-[36px] md:text-[44px] font-medium tracking-tight leading-tight mb-6 text-foreground">
            Powering Nigeria: <br />
            Infrastructure Fund 1
          </h1>
          <p className="text-[18px] md:text-[20px] leading-relaxed text-muted italic">
            "Financing the Root Crisis: A Case for Private Capital in Nigeria's Energy Infrastructure."
          </p>
        </header>

        <div className="prose prose-slate prose-p:leading-relaxed prose-p:text-[15px] prose-p:text-muted prose-strong:text-foreground prose-strong:font-medium prose-a:text-accent prose-a:no-underline hover:prose-a:underline max-w-none">
          <p className="first-letter:text-[48px] first-letter:font-bold first-letter:text-foreground first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
            Over the past decade, I have dedicated my career to building Africa's digital infrastructure. From scaling financial agency networks at Moniepoint to establishing identity trust layers at Prembly, we have proven that complex, continental scale problems can be solved with the right combination of technology, capital, and relentless execution.
          </p>
          <p>
            However, we have reached an inflection point. The digital economy we have painstakingly built rests atop a fragile physical foundation. The energy deficit in Nigeria is not merely an inconvenience; it is the single largest bottleneck to continental GDP growth, technological advancement, and human flourishing. It represents a 100 billion dollar unmet infrastructure need.
          </p>
          <h3 className="text-[18px] font-medium text-foreground mt-10 mb-4 tracking-tight">
            The Inflection Point
          </h3>
          <p>
            The fundamental software problems have been solved. We know how to move money, we know how to verify identities, and we know how to distribute information. The next frontier of value creation in Africa is not exclusively in bits, but in atoms. We must now invest heavily in the underlying physical infrastructure that will power it, with electricity being the most critical asset.
          </p>
          <p>
            Today, the national grid delivers fewer than 4 gigawatts against a documented demand of at least 30 gigawatts. Over 80 million Nigerians remain unconnected, forcing the private sector to burn over 12 billion dollars annually on diesel generators. That expenditure produces no productive asset and generates no return.
          </p>
          
          <h3 className="text-[20px] md:text-[24px] font-medium text-foreground tracking-tight mt-12 mb-6">
            This bottleneck forged my next thesis: Powering Nigeria.
          </h3>
          
          <p>
            We are structuring <strong>Infrastructure Fund 1</strong> to execute on a simple truth: the most lucrative opportunity in Africa is replacing a 35 cent diesel kilowatt with a 15 cent solar kilowatt.
          </p>
          <p>
            By treating power not as a government utility problem but as a solvable private infrastructure challenge driven by the same ruthless efficiency we apply to fintech, we completely bypass the legacy grid. We are deploying private capital into highly efficient commercial assets with proven demand to generate resilient, asset backed yield.
          </p>

          <p>
            The technology exists. The policy frameworks are improving. The demand is unambiguous and backed by a demonstrated willingness to pay. What is absent is the structured deployment of private capital at scale.
          </p>
          
          <div className="my-12 p-8 bg-accent/5 ring-1 ring-border rounded-xl">
            <h4 className="text-[15px] font-semibold text-foreground mb-3">Join the Mission</h4>
            <p className="text-[14px] mb-6">
              This is a generational challenge requiring operators, policymakers, and capital to align perfectly. If this thesis resonates with the future you want to build, the fund is currently in its capital formation phase.
            </p>
            <a
              href="mailto:tolu@adetuyi.com?subject=Powering Nigeria IF1"
              className="inline-flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors font-medium text-[14px]"
            >
              Reach out to discuss <span className="text-accent">↗</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
