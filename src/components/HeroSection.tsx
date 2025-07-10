import React, { useState, useEffect } from 'react';
import { X, Minimize, Maximize, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentWindow, setCurrentWindow] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = ["AI Engineer", "Ed Tech Founder", "Badmintonist", "Cyclist"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const windowStates = [
    { 
      filename: "Adeen.png", 
      image: "/lovable-uploads/56516795-45b4-42d5-bd70-cd85a5054fd6.png", 
      url: "https://adeen-portfolio.com"
    },
    { 
      filename: "AIEngineer.png", 
      image: "/lovable-uploads/9cab72cb-c1cb-46c8-a2c8-922335e42fdd.png", 
      url: "https://ai-projects.com"
    },
    { 
      filename: "StartupFounder.png", 
      image: "/lovable-uploads/185e2400-c697-410a-99ad-5e76b5c71965.png", 
      url: "https://startup-journey.com"
    },
    { 
      filename: "GoogleDSCLead.png", 
      image: "/lovable-uploads/a647577a-89cd-4b0b-b540-deb8be57fefb.png", 
      url: "https://google-dsc.com"
    },
    { 
      filename: "BadmintonCaptain.png", 
      image: "/lovable-uploads/fe57845d-d390-4dff-b90f-63e7caeeb6d8.png", 
      url: "https://badminton-achievements.com"
    },
    { 
      filename: "MarathonRunner.png", 
      image: "/lovable-uploads/14dcadd0-e1ec-4ae0-98ea-3a0eb600efcb.png", 
      url: "https://marathon-runs.com"
    },
    { 
      filename: "CatLover.png", 
      image: "/lovable-uploads/b32baa7e-3c31-4134-8765-90101b850a75.png", 
      url: "https://cat-stories.com"
    },
    { 
      filename: "Cyclist.png", 
      image: "/lovable-uploads/Cyclist.png", 
      url: "https://cycling-adventures.com"
    }
  ];

  const handleClose = () => {
    setCurrentWindow((prev) => (prev + 1) % windowStates.length);
    setShowGuide(false);
  };

  const handleMinimize = () => {
    setIsZooming(true);
    setShowGuide(false);
    setTimeout(() => {
      setIsZooming(false);
    }, 600);
  };

  const handleFullscreen = () => {
    window.open(windowStates[currentWindow].url, '_blank');
    setShowGuide(false);
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('quick-links');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTAClick = () => {
    const nextSection = document.getElementById('quick-links');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen py-8 md:py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between relative z-10 min-h-[70vh] md:min-h-[80vh]">
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
            Hello.<br />
            I'm Adeen.
          </h1>
          
          {/* Rotating Role Text */}
          <div className="mb-6 md:mb-8 h-8 md:h-10">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700 transition-all duration-500 ease-in-out">
              <span className="inline-block animate-fade-in" key={currentRoleIndex}>
                {roles[currentRoleIndex]}
              </span>
            </p>
          </div>

          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-md text-gray-600">
            {/* I'm a free retro portfolio template made by <span className="underline">Adeen Atif</span>. */}
          </p>
          <Button 
            onClick={handleCTAClick}
            className="bg-white border-2 border-black text-black hover:bg-black hover:text-white font-bold px-6 md:px-8 py-2 md:py-3 text-base md:text-lg shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-200"
          >
            Tap into My World
          </Button>
        </div>
        
        {/* macOS-style Window */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          {/* Minimized Dock Icon */}
          {isMinimized && (
            <div 
              className="fixed bottom-4 right-4 w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-black rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center z-50"
              onClick={() => setIsMinimized(false)}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-200 rounded border border-gray-400"></div>
            </div>
          )}

          {/* Main Window */}
          <div 
            className={`
              w-64 sm:w-72 md:w-80 lg:w-96 bg-white border-2 border-black rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] relative overflow-hidden
              transition-all duration-300 ease-in-out
              ${isMinimized ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
              ${isFullscreen ? 'scale-110 md:scale-125' : ''}
              ${isZooming ? 'scale-110 md:scale-125' : ''}
            `}
          >
            {/* Window Header */}
            <div className="bg-gray-200 border-b-2 border-black p-2 md:p-3 flex items-center justify-between relative">
              {/* Traffic Light Buttons */}
              <div className="flex space-x-1 md:space-x-2 relative">
                {/* Subtle pulse glow around red button */}
                {showGuide && (
                  <div className="absolute -top-1 -left-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-300 opacity-30 animate-pulse"></div>
                )}
                
                <button
                  onClick={handleClose}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200 flex items-center justify-center group relative"
                >
                  <X className="w-1.5 h-1.5 md:w-2 md:h-2 text-red-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Hover tooltip */}
                  {showTooltip && showGuide && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 animate-fade-in">
                      Click to reveal more
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                    </div>
                  )}
                </button>
                
                <button
                  onClick={handleMinimize}
                  className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center group"
                  title="Zoom for fun"
                >
                  <Minimize className="w-1.5 h-1.5 md:w-2 md:h-2 text-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                
                <button
                  onClick={handleFullscreen}
                  className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200 flex items-center justify-center group"
                  title="Curious? Try this one"
                >
                  <Maximize className="w-1.5 h-1.5 md:w-2 md:h-2 text-green-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              {/* Window Title */}
              <div className="flex-1 text-center text-xs font-mono">
                {windowStates[currentWindow].filename}
              </div>

              <div className="w-8 md:w-12"></div> {/* Spacer for centering */}
            </div>

            {/* Window Content */}
            <div className="h-48 sm:h-56 md:h-64 lg:h-72 relative overflow-hidden">
              <img 
                src={windowStates[currentWindow].image} 
                alt={windowStates[currentWindow].filename}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToNextSection}
          className="flex flex-col items-center text-gray-600 hover:text-black transition-colors duration-300 group"
        >
{/*           <span className="text-xs md:text-sm font-mono mb-1 md:mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Scroll down</span>
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 animate-bounce" /> */}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
