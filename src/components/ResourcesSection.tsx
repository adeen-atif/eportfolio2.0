import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResourcesSection = () => {
  const navigate = useNavigate();

  const resources = [
    {
      title: "Real-Time AI Toolkit",
      description: "Practical patterns for FinTech founders to ship faster decisions with smaller bills",
      tags: ["AI", "FinTech", "Performance"],
      link: "/rt-ai"
    }
  ];

  return (
    <section id="resources" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Resources</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Tools, guides, and practical materials I've created for the community
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 bg-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  onClick={() => navigate(resource.link)}
                  className="w-full gap-2"
                >
                  View Resource
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
