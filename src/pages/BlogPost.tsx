
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Calendar } from 'lucide-react';
import SiteNav from '@/components/system/SiteNav';
import SiteFooter from '@/components/system/SiteFooter';

interface BlogPost {
  slug: string;
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

// Import the same blog posts data from Blog.tsx
const blogPosts: BlogPost[] = [
  {
    slug: "red-turtles-agentic-patterns",
    id: 1,
    title: "Red Turtles Paint Murals: 4 Agentic AI Design Patterns Every Builder Should Know",
    date: "July 21, 2025",
    excerpt: "When I started building agentic AI systems, I realized that relying on a single monolithic agent hit a ceiling. The real power emerged when I began architecting intelligent workflows using design patterns.",
    content: `
When I started building agentic AI systems, I realized that relying on a single monolithic agent, no matter how powerful, hit a ceiling. The real power emerged when I began zooming out and architecting intelligent workflows using design patterns that mirror how humans solve complex problems.

I call them: **Red Turtles Paint Murals**

A mnemonic for the 4 foundational agentic patterns:

**Reflection, Tool Use, Planning, and Multi-Agent Systems.**

Let's break down each pattern with a mini explanation and a code snippet to help you get started.

## 1. Reflection

**What it is:**
The agent doesn't just act—it critiques and improves its own output. Think of it as an inner critic loop. It writes code, reflects, and revises.

**When to use:**
When quality matters more than speed. Perfect for content generation, code synthesis, or any domain where refinement is key.

**Metaphor:**
A student writes an essay, then re-reads it to tighten clarity and structure.

\`\`\`python
from openai import OpenAI

client = OpenAI()

def generate_output(prompt):
    return client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    ).choices[0].message.content

def reflect_on_output(output):
    reflection_prompt = f"Review this output and suggest improvements:\\n\\n{output}"
    return generate_output(reflection_prompt)

response = generate_output("Explain quantum computing to a 12-year-old.")
refined = reflect_on_output(response)

print("Original Response:\\n", response)
print("\\nRefined Version:\\n", refined)
\`\`\`

**Industry Tip:**
Reflection loops show up in research workflows, legal drafting, and agent frameworks like LangGraph, AutoGen, and ReAct. You can even nest multiple reflection passes when stakes are high.

## 2. Tool Use

**What it is:**
Agents don't need to be self-contained. With access to tools—like web search, calculators, APIs—they can handle real-world tasks better.

**When to use:**
Whenever the task relies on real-time info, math, databases, or external logic.

**Metaphor:**
An intern who's great at research but knows when to pick up the phone, Google something, or pull data from a spreadsheet.

\`\`\`python
from langchain.agents import initialize_agent, load_tools
from langchain.llms import OpenAI

llm = OpenAI(temperature=0)
tools = load_tools(["serpapi", "llm-math"], llm=llm)

agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent="zero-shot-react-description",
    verbose=True
)

agent.run("What's the current price of gold divided by 3?")
\`\`\`

**Industry Tip:**
Tool-using agents are the backbone of AutoGPT, CrewAI, LangChain's AgentExecutor, and more. Tool routing and fallback logic help agents decide when to call what.

## 3. Planning and Reasoning

**What it is:**
Instead of answering right away, the agent takes a breath and creates a plan. It decomposes the task, then decides which steps to take and in what order.

**When to use:**
For tasks that involve multiple stages, interdependencies, or decision trees.

**Metapho:**
A chef designing a recipe before firing up the stove.

\`\`\`python
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI

llm = OpenAI()

plan_prompt = PromptTemplate.from_template(
    "Break the following task into clear steps: {task}"
)
plan_chain = LLMChain(llm=llm, prompt=plan_prompt)

task = "Write a blog, create a graphic, and schedule the post"
steps = plan_chain.run(task)

print("Planned Steps:\\n", steps)
\`\`\`

**Industry Tip:**
Planner–Executor architectures are growing. Some teams use Claude or Gemini to plan, GPT to execute, and a ReAct-like feedback loop to evaluate progress.

## 4. Multi-Agent Systems

**What it is:**
Instead of stretching one agent too far, split responsibilities across multiple agents. Each handles one job—just like human teams.

**When to use:**
When you need specialization, scale, modularity, or internal feedback.

**Metaphor:**
A newsroom with a writer, editor, fact-checker, and publisher.

### Sequential Agents

A fixed pipeline where agents pass tasks one by one. Great for structured workflows like research to writing to editing.

\`\`\`python
def researcher_agent(topic):
    return f"Research on {topic} done."

def writer_agent(research):
    return f"Drafted: {research}"

def editor_agent(draft):
    return f"Finalized: {draft}"

research = researcher_agent("AI in Pharma")
draft = writer_agent(research)
final = editor_agent(draft)

print(final)
\`\`\`

### Hierarchical Setup

A manager agent delegates tasks to specialized sub-agents and oversees their outputs.

\`\`\`python
def manager_agent():
    return {
        "Finance": finance_agent(),
        "Tech": tech_agent(),
        "Compliance": compliance_agent()
    }

def finance_agent():
    return "Budget looks good."

def tech_agent():
    return "Deployment in 2 weeks."

def compliance_agent():
    return "No issues found."

print(manager_agent())
\`\`\`

### Parallel Execution

Agents work on different sub-tasks simultaneously. Good for speed and independent subtasks.

\`\`\`python
import concurrent.futures

def analyze_sentiment():
    return "Sentiment: Positive"

def extract_keywords():
    return "Keywords: AI, LLM, Healthcare"

def summarize_text():
    return "Summary complete."

with concurrent.futures.ThreadPoolExecutor() as executor:
    results = list(executor.map(lambda f: f(), [analyze_sentiment, extract_keywords, summarize_text]))

print(results)
\`\`\`

### Asynchronous Agents

Agents run independently and respond to events or triggers. Great for monitoring and reactive systems.

\`\`\`python
import asyncio

async def monitor_cpu():
    await asyncio.sleep(1)
    return "CPU usage high"

async def monitor_network():
    await asyncio.sleep(2)
    return "Unusual traffic detected"

async def run_monitors():
    alerts = await asyncio.gather(monitor_cpu(), monitor_network())
    for alert in alerts:
        print(alert)

asyncio.run(run_monitors())
\`\`\`

**Industry Tip**
Use parallel agents for speed, sequential for structure, hierarchical for supervision, and asynchronous when agents respond to triggers or events.

## Final Thoughts

**Reflection** makes your agents smarter.

**Tool use** makes them capable.

**Planning** gives them foresight.

**Multi-agent systems** make them scalable.

If you're only working with single-agent copilots, it's time to zoom out.
Architectural patterns like these will 10x the quality, maintainability, and impact of what you build.

Want to explore the code or remix it for your own projects?
Check out the repository [here](https://github.com/adeen-atif/Red-Turtles-Paint-Murals)

The mnemonic inspiration came from this [cool and elaborate video](https://www.youtube.com/watch?v=qU3fmidNbJE)

Would love to hear which pattern you're most excited to build with.`
  },
  // {
  //   id: 2,
  //   title: "My Journey in Software Development",
  //   date: "December 15, 2024",
  //   excerpt: "Reflecting on the path that led me to become a software engineer and the lessons learned along the way.",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  // },
  // {
  //   id: 3,
  //   title: "Building Scalable React Applications",
  //   date: "December 10, 2024", 
  //   excerpt: "Best practices and patterns I've discovered for creating maintainable React applications at scale.",
  //   content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // },
  // {
  //   id: 4,
  //   title: "The Power of TypeScript",
  //   date: "December 5, 2024",
  //   excerpt: "How TypeScript has transformed my development workflow and improved code quality.",
  //   content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  // },
  // {
  //   id: 5,
  //   title: "Lessons from Leading Technical Teams",
  //   date: "November 28, 2024",
  //   excerpt: "Insights gained from my experience in technical leadership and team management.",
  //   content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  // }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-ink text-white font-mono flex items-center justify-center px-6">
        <div className="text-center">
          <span className="tag block mb-3">&lt;404&gt;</span>
          <h1 className="display text-3xl sm:text-4xl mb-6">Post not found</h1>
          <Link
            to="/blog"
            className="nav-link inline-flex items-center gap-2 font-mono text-xs tracking-widest text-white"
          >
            <ArrowLeft size={14} />
            &lt;Back to Blog/&gt;
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink text-white font-mono overflow-x-hidden">
      <SiteNav active="Blog" />

      <article className="px-5 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="nav-link inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/70 hover:text-white mb-10"
          >
            <ArrowLeft size={14} />
            &lt;Back to Blog/&gt;
          </Link>

          <header className="border-b border-steel/60 pb-8 mb-10">
            <span className="tag block mb-4">&lt;h1&gt;</span>
            <h1 className="display text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-neon">
                <Calendar size={14} />
                {post.date}
              </span>

              {post.tags && (
                <span className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="border border-steel px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              )}
            </div>
          </header>

          <div className="markdown-content">
            <ReactMarkdown
              components={{
                code({ className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  const isCodeBlock = className && className.includes('language-');
                  return isCodeBlock ? (
                    <div className="my-8 overflow-x-auto">
                      <SyntaxHighlighter
                        style={tomorrow}
                        language={match[1]}
                        customStyle={{
                          borderRadius: '0px',
                          border: '1px solid #4A4D57',
                          background: '#171B25',
                          fontSize: '13px',
                          fontFamily: '"Space Mono", monospace'
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code
                      className="bg-neon/15 text-neon-soft px-1.5 py-0.5 border border-steel/70 text-[13px] font-mono"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => (
                  <h2 className="display text-2xl sm:text-3xl mt-14 mb-5 text-white border-b border-steel/60 pb-3">
                    {children}
                  </h2>
                ),
                h2: ({ children }) => (
                  <h2 className="display text-xl sm:text-2xl mt-12 mb-4 text-white">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="display text-lg sm:text-xl mt-10 mb-3 text-white">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="font-mono text-sm sm:text-base leading-relaxed mb-6 text-white/75">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-6 space-y-2 font-mono text-sm sm:text-base text-white/75 list-none pl-0">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-6 space-y-2 font-mono text-sm sm:text-base text-white/75 list-decimal pl-6">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-neon pl-5 my-6 text-white/70 italic">
                    {children}
                  </blockquote>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-white">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon underline underline-offset-4 hover:bg-neon hover:text-black px-0.5"
                  >
                    {children}
                  </a>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <footer className="mt-14 border-t border-steel/60 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-mono text-xs text-white/50">
              <span className="text-neon">//</span> Hope you had fun reading!
            </p>
            <Link
              to="/blog"
              className="nav-link font-mono text-xs tracking-widest text-white"
            >
              &lt;More Posts/&gt;
            </Link>
          </footer>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
};

export default BlogPost;
