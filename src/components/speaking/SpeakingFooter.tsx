import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SpeakingFooter = () => {
  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText("adeen@adeenatif.com");
    toast({
      description: "Email copied to clipboard",
    });
  };

  return (
    <footer className="border-t border-border/40 mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Speaking Portfolio of Adeen Atif
          </p>
          
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              <Mail className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              aria-label="LinkedIn profile"
            >
              <a
                href="https://linkedin.com/in/adeenatif"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              aria-label="X (Twitter) profile"
            >
              <a
                href="https://x.com/adeenatif"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SpeakingFooter;
