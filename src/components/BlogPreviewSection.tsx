import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SectionHeading from '@/components/retro/SectionHeading';
import Window from '@/components/retro/Window';

/**
 * Preview of the latest writing. Metadata only: the posts themselves live in
 * the blog route.
 */
const posts = [
  {
    slug: 'red-turtles-agentic-patterns',
    title: 'Red Turtles Paint Murals: 4 Agentic AI Design Patterns Every Builder Should Know',
    date: 'July 21, 2025',
    excerpt:
      'The 4 agentic design patterns, Reflection, Tool Use, Planning, and Multi-Agent Systems, can take your AI systems from capable to truly intelligent.',
    tags: ['AI', 'Agentic Systems']
  }
];

const BlogPreviewSection = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="halftone-dense border-b-2 border-black">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
        <SectionHeading
          size="lg"
          action={
            <Link to="/blog" className="link-ul px-1">
              View all blog posts
            </Link>
          }
        >
          From the blog
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <Window
              key={post.slug}
              as="article"
              filename={`2025-07-${String(21 + i)}-blog.pdf`}
              shadow="lg"
              interactive
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="cursor-pointer"
            >
              <h3 className="display text-xl sm:text-2xl leading-tight">
                {post.title}
              </h3>

              <p className="chrome mt-2">{post.date}</p>

              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {post.excerpt}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="chrome border-2 border-black px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="btn-retro mt-5 text-sm">Read more</span>
            </Window>
          ))}

          {/* Placeholder window so the row reads as a stack in progress */}
          <Window
            filename="untitled-draft.pdf"
            shadow="md"
            className="hidden md:block"
          >
            <h3 className="display text-xl text-neutral-400">More soon</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              I write when something is worth writing down. More interesting
              stuff is on the way.
            </p>
          </Window>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
