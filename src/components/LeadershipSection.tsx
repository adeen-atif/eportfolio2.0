
import React from 'react';
import { Badge } from '@/components/ui/badge';

const LeadershipSection = () => {
  const leadership = [
    // { 
    //   title: "MCIT CODE Speaker & Mentor", 
    //   desc: "In Riyadh and Jeddag cohorts, led workshops and mentored emerging startups on AI Optimization",
    //   year: "2025",
    //   logo: "/lovable-uploads/mcit-logo.png",
    //   photo: "/lovable-uploads/mcit-photo.png"
    // },
    { 
      title: "NASA Space Apps Challenge Judge", 
      desc: "Mentored and judged teams on various Astronomy + AI use cases ",
      year: "2023",
      logo: "/lovable-uploads/nasa-logo.png",
      photo: "/lovable-uploads/nasa-photo.png"
    },
    { 
      title: "GOOGLE DSC LEAD", 
      desc: "Led 10+ tech events, mentorship circles, and bootcamps.",
      year: "2023",
      logo: "/lovable-uploads/2479db06-db0d-46ab-abd3-9e427161536e.png",
      photo: "/lovable-uploads/c7416d44-ad02-47e6-9511-ebdf1a70445b.png"
    },
    { 
      title: "CO-FOUNDER ARCANUM", 
      desc: "Started a booming ed-tech company aiming to aid students and working professionals.",
      year: "2025",
      logo: "/lovable-uploads/Final Final Logo.png",
      photo: "/lovable-uploads/AA.png"
    },
    { 
      title: "TEDX CLIFTON", 
      desc: "Curated and led speaker storytelling for TEDx talks.",
      year: "2023",
      logo: "/lovable-uploads/9de938c3-30fc-4c53-b837-1bcdc296cd68.png",
      photo: "/lovable-uploads/489757877_1072519284895790_2402514148411438511_n.jpg"
    },
    { 
      title: "WWF PAKISTAN", 
      desc: "Designed youth-focused sustainability workshops.",
      year: "2022",
      logo: "/lovable-uploads/e4ecd225-bc4c-406c-926c-03deb13ed764.png",
      photo: "/lovable-uploads/f47bd6e2-3b8e-427f-a96f-97aefbdac72b.png"
    },
    { 
      title: "WRO ROBOTICS JUDGE", 
      desc: "Mentored and judged national-level robotics talent.",
      year: "2023",
      logo: "/lovable-uploads/81bcdf6c-9127-4176-9c62-a8c6a6328f22.png",
      photo: "/lovable-uploads/1692709757999.jpeg"
    },
    { 
      title: "BADMINTON TEAM CAPTAIN", 
      desc: "Led IBA's badminton team to multiple victories and championships.",
      year: "2022-24",
      logo: "/lovable-uploads/images (4).png",
      photo: "/lovable-uploads/3ea90759-19d7-4ee3-9bc6-7cea80503e4e.png"
    }
  ];

  return (
    <section id="leadership" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-12">Where I've Led, Learned, and Left a Mark</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {leadership.map((item, index) => (
            <div 
              key={index} 
              className="relative bg-white border-2 border-black rounded-lg p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              {/* Photo Overlay - Hidden by default, shown on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <img 
                  src={item.photo} 
                  alt={`${item.title} in action`}
                  className="w-full h-full object-cover rounded-lg transform scale-110 group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content - Always visible but dims on hover */}
              <div className="relative z-20 group-hover:text-white transition-colors duration-300">
                {/* Logo and Year Header */}
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-50 group-hover:bg-white group-hover:bg-opacity-20 rounded-lg border border-gray-200 flex-shrink-0 transition-colors duration-300">
                      <img 
                        src={item.logo} 
                        alt={`${item.title} logo`}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-black leading-tight group-hover:drop-shadow-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <Badge className="bg-black text-white group-hover:bg-white group-hover:text-black font-mono text-xs md:text-sm px-2 md:px-3 py-1 flex-shrink-0 transition-colors duration-300">
                    {item.year}
                  </Badge>
                </div>
                
                {/* Description */}
                <p className="text-sm md:text-base text-gray-700 group-hover:text-gray-100 leading-relaxed pl-0 md:pl-20 group-hover:drop-shadow-lg transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Mobile tap indicator */}
              <div className="absolute bottom-2 right-2 md:hidden text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                Tap to view
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
