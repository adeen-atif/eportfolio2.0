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
                  Download Speaker Biography (PDF)
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:flex items-center justify-center hidden">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-3xl blur-3xl" />
              <img 
                src="/images/Me.jpg" 
                alt="Adeen Atif speaking at TEDx Clifton"
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
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
