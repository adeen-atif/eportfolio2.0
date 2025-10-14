import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  meta: string[];
  images: string[];
  alt: string[];
  video?: string;
  onRequest: () => void;
  disableCarousel?: boolean;
}

const ExperienceCard = ({ title, meta, images, alt, video, onRequest, disableCarousel = false }: ExperienceCardProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovered) return;
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHovered, currentSlide]);

  return (
    <Card
      className="flex-shrink-0 w-[360px] lg:w-[400px] snap-center group overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.01] hover:border-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: "fade-in 0.5s ease-out",
      }}
    >
      {/* Image Carousel - only render if images exist */}
      {images && images.length > 0 && (
        <div className="relative aspect-video bg-muted overflow-hidden">
        {video && currentSlide === 0 ? (
          <video
            src={video}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={images[currentSlide]}
            alt={alt[currentSlide]}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
        )}

        {/* Navigation arrows - only show if carousel enabled and multiple images */}
        {!disableCarousel && images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    idx === currentSlide
                      ? "bg-primary w-6"
                      : "bg-background/60 hover:bg-background"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-bold text-lg text-foreground line-clamp-2">
          {title}
        </h3>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-2">
          {meta.map((chip, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;
