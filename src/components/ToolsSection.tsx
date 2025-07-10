
import React from 'react';
import { Button } from '@/components/ui/button';

const ToolsSection = () => {
  const tools = [
    { 
      title: "TECH STACK MINDMAP", 
      desc: "Interactive visual + auto-generator for your next project's stack.",
      filename: "tech-stack-generator.html"
    },
    { 
      title: "SECOND BRAIN TEMPLATE", 
      desc: "A Notion-based personal system to track everything your brain touches.",
      filename: "notion-template.pdf"
    }
  ];

  return (
    <section id="clone-me" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-12">Here, I Made You Something</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white border-2 border-black">
              {/* Browser Header */}
              <div className="bg-gray-200 border-b-2 border-black p-2 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-xs font-mono">
                  {tool.filename}
                </div>
              </div>
              
              {/* Tool Content */}
              <div className="p-6 md:p-8 text-center">
                <div className="text-4xl md:text-6xl mb-4">🛠️</div>
                <h3 className="text-xl md:text-2xl font-black mb-4">{tool.title}</h3>
                <p className="text-sm mb-6 text-gray-600">{tool.desc}</p>
                <Button className="bg-black text-white hover:bg-gray-800 font-bold">
                  Coming Soon
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
