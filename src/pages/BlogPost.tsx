
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Calendar } from 'lucide-react';

interface BlogPost {
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
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-100 text-black font-mono flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-black text-white px-4 py-2 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 font-bold"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black font-mono">
      {/* Navigation */}
      <nav className="bg-white border-b-2 border-black p-3 md:p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/blog"
            className="inline-flex items-center text-black hover:underline font-bold text-xs md:text-sm px-1 py-1"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Blog
          </Link>
          <div className="flex space-x-4 md:space-x-6">
            <Link
              to="/"
              className="text-black hover:underline font-bold text-xs md:text-sm px-1 py-1"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-black hover:underline font-bold text-xs md:text-sm px-1 py-1"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-4xl">
        {/* Content */}
        <div className="bg-white border-2 border-black p-6 md:p-8 lg:p-12">
          {/* Header inside content block */}
          <header className="mb-8 pb-8 border-b-2 border-gray-200">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              
              {post.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-200 text-gray-700 px-3 py-1 border border-gray-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div className="prose prose-lg max-w-none markdown-content">
            <ReactMarkdown
              components={{
                code({ className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  const isCodeBlock = className && className.includes('language-');
                  return isCodeBlock ? (
                    <div className="my-6">
                      <SyntaxHighlighter
                        style={tomorrow}
                        language={match[1]}
                        customStyle={{
                          borderRadius: '0px',
                          border: '2px solid black',
                          fontSize: '14px',
                          fontFamily: 'monospace'
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code
                      className="bg-gray-200 px-1 py-0.5 border border-black text-sm font-mono"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => (
                  <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-8 border-b-2 border-black pb-2">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl md:text-2xl font-bold mb-4 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-800">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-black">
                    {children}
                  </strong>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold underline hover:bg-black hover:text-white transition-colors duration-200 px-1"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-2 border-black border-t-0 p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Hope you had fun reading!
              </p>
            </div>
            
            <Link
              to="/blog"
              className="inline-flex items-center bg-black text-white px-4 py-2 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 font-bold text-sm"
            >
              More Posts →
            </Link>
          </div>
        </footer>
      </article>

      {/* Footer */}
      <footer className="bg-black text-white py-6 md:py-8 px-4 md:px-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">© 2024 Adeen Atif. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
