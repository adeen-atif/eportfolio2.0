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
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground">
              Adeen Atif
            </h1>
            
            {/* Default tagline - Option A */}
            <p className="text-base sm:text-lg lg:text-2xl text-muted-foreground leading-relaxed">
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
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Riyadh & Karachi
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                AI / Product / Data
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Workshops, Keynotes, Panels
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button 
                size="lg"
                onClick={handleScrollToContact}
                className="text-sm sm:text-base w-full sm:w-auto"
              >
                Invite Me to Speak
              </Button>
              <Button 
                size="lg"
                variant="ghost"
                asChild
                className="text-sm sm:text-base w-full sm:w-auto"
              >
                <a href="/assets/speaker-onepager.pdf" download>
                  <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate">Download Speaker One-Pager</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl" />
              <img 
                src="/images/Me.jpg" 
                alt="Adeen Atif speaking at TEDx Clifton"
                className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
                style={{ animation: "fade-in 0.7s ease-out" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingHero;
