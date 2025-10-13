import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const SpeakingHero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              Adeen Atif
            </h1>
            
            {/* Default tagline - Option A */}
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              I speak where tech meets product — AI, data, and impact. Talks that feel like a playbook, not a pitch.
            </p>
            
            {/* Alternative taglines (commented) */}
            {/* 
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Engineer turned product lead. I translate AI and analytics into stories, systems, and outcomes.
            </p>
            */}
            
            {/* 
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              From Karachi to Riyadh — building, teaching, shipping. I talk about what actually works.
            </p>
            */}

            {/* Pills row */}
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Riyadh & Karachi
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                AI / Product / Data
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Workshops, Keynotes, Panels
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                onClick={handleScrollToContact}
                className="text-base"
              >
                Invite Me to Speak
              </Button>
              <Button 
                size="lg"
                variant="ghost"
                asChild
                className="text-base"
              >
                <a href="/assets/speaker-onepager.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Speaker One-Pager (PDF)
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - abstract shape with parallax */}
          <div 
            className="hidden lg:block relative h-[400px] animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-[2rem] transform rotate-3 hover:rotate-6 transition-transform duration-700" />
            <div className="absolute inset-8 bg-gradient-to-tl from-accent/20 via-accent/10 to-transparent rounded-[2rem] transform -rotate-3 hover:-rotate-6 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingHero;
