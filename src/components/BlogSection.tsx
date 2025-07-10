
import React from 'react';
import { Badge } from '@/components/ui/badge';

const BlogSection = () => {
  const blogPosts = [
    { title: "The Messy Middle", desc: "A reflection on chaos, clarity, and control.", type: "INSTAGRAM" },
    { title: "On Ambition & Recovery", desc: "Thoughts on burning out and bouncing better.", type: "INSTAGRAM" },
    { title: "DashFit: The No-Sensor AR Journey", desc: "Building an AR fit simulator with just your phone.", type: "MEDIUM" },
    { title: "Understanding MPI", desc: "Demystifying parallelism, one cluster at a time.", type: "MEDIUM" }
  ];

  return (
    <section id="blog" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black">From the blog</h2>
          <button className="underline font-bold text-sm md:text-base">View all blog posts</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white border-2 border-black relative group">
              {/* Browser Header */}
              <div className="bg-gray-200 border-b-2 border-black p-2 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-xs font-mono">
                  2024-01-{(index + 1).toString().padStart(2, '0')}-blog.pdf
                </div>
              </div>
              
              {/* Blog Image */}
              <div className="h-24 md:h-32 bg-gray-300 flex items-center justify-center border-b-2 border-black">
                <div className="text-3xl md:text-4xl">{post.type === 'INSTAGRAM' ? '📱' : '📝'}</div>
              </div>
              
              {/* Blog Content */}
              <div className="p-3 md:p-4">
                <Badge className="bg-black text-white font-mono text-xs mb-2">
                  {post.type}
                </Badge>
                <h3 className="font-black text-base md:text-lg mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
