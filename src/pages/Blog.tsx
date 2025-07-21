
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Red Turtles Paint Murals: 4 Agentic AI Design Patterns Every Builder Should Know",
    date: "July 21, 2025",
    excerpt: "The 4 agentic design patterns, Reflection, Tool Use, Planning, and Multi-Agent Systems, can take your AI systems from capable to truly intelligent.",
    content: `# Red Turtles Paint Murals: 4 Agentic AI Design Patterns Every Builder Should Know

When I started building agentic AI systems, I realized that relying on a single monolithic agent, no matter how powerful, hit a ceiling. The real power emerged when I began zooming out and architecting intelligent workflows using design patterns that mirror how humans solve complex problems.

I call them: **Red Turtles Paint Murals**
A mnemonic for the 4 foundational agentic patterns:

**Reflection, Tool Use, Planning, and Multi-Agent Systems.**

Let's break down each pattern with a mini explanation and a code snippet to help you get started.

## 1. Reflection

<strong>What it is</strong><br>
The agent doesn't just act—it critiques and improves its own output. Think of it as an inner critic loop. It writes code, reflects, and revises.

<strong>When to use</strong><br>
When quality matters more than speed. Perfect for content generation, code synthesis, or any domain where refinement is key.

<strong>Metaphor</strong><br>
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

**Industry Tip**
Reflection loops show up in research workflows, legal drafting, and agent frameworks like LangGraph, AutoGen, and ReAct. You can even nest multiple reflection passes when stakes are high.

## 2. Tool Use

<strong>What it is: </strong><br>
Agents don't need to be self-contained. With access to tools—like web search, calculators, APIs—they can handle real-world tasks better.

<strong>When to use: </strong><br>
Whenever the task relies on real-time info, math, databases, or external logic.

<strong>Metaphor: </strong><br>
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

**Industry Tip**
Tool-using agents are the backbone of AutoGPT, CrewAI, LangChain's AgentExecutor, and more. Tool routing and fallback logic help agents decide when to call what.

## 3. Planning and Reasoning

<strong>What it is: </strong><br>
Instead of answering right away, the agent takes a breath and creates a plan. It decomposes the task, then decides which steps to take and in what order.

<strong>When to use: </strong><br>
For tasks that involve multiple stages, interdependencies, or decision trees.

<strong>Metaphor: </strong><br>
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

**Industry Tip**
Planner–Executor architectures are growing. Some teams use Claude or Gemini to plan, GPT to execute, and a ReAct-like feedback loop to evaluate progress.

## 4. Multi-Agent Systems

<strong>What it is</strong: ><br>
Instead of stretching one agent too far, split responsibilities across multiple agents. Each handles one job—just like human teams.

<strong>When to use: </strong><br>
When you need specialization, scale, modularity, or internal feedback.

<strong>Metaphor: </strong><br>
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
Check out the repository here: [adeenatif.com/red-turtles-agentic-patterns](https://adeenatif.com/red-turtles-agentic-patterns)

The mnemonic inspiration came from this [cool and elaborate video](https://www.youtube.com/watch?v=qU3fmidNbJE)

Would love to hear which pattern you're most excited to build with.`,
    tags: ["AI", "Agentic Systems", "Design Patterns", "Machine Learning"]
  },
  // {
  //   id: 3,
  //   title: "Building Scalable React Applications",
  //   date: "December 10, 2024", 
  //   excerpt: "Best practices and patterns I've discovered for creating maintainable React applications at scale.",
  //   content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   tags: ["React", "Frontend", "Architecture", "Best Practices"]
  // },
  // {
  //   id: 4,
  //   title: "The Power of TypeScript",
  //   date: "December 5, 2024",
  //   excerpt: "How TypeScript has transformed my development workflow and improved code quality.",
  //   content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  //   tags: ["TypeScript", "JavaScript", "Development Tools"]
  // },
  // {
  //   id: 5,
  //   title: "Lessons from Leading Technical Teams",
  //   date: "November 28, 2024",
  //   excerpt: "Insights gained from my experience in technical leadership and team management.",
  //   content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  //   tags: ["Leadership", "Management", "Team Building"]
  // }
];

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 text-black font-mono">
      {/* Navigation */}
      <nav className="bg-white border-b-2 border-black p-3 md:p-4">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-8 gap-y-2">
            <Link
              to="/"
              className="text-black hover:underline font-bold text-xs md:text-sm px-1 py-1"
            >
              Home
            </Link>
            <span className="text-black font-bold text-xs md:text-sm px-1 py-1 underline">
              Blog
            </span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white border-b-2 border-black py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog</h1>
          <p className="text-sm md:text-base text-gray-600">
            Thoughts, insights, and experiences from my journey
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border-2 border-black p-6 md:p-8 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] cursor-pointer group"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <header className="mb-4">
                <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:underline transition-all duration-200">
                  {post.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <time className="text-sm text-gray-600 font-mono">
                    {post.date}
                  </time>
                  {post.tags && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-200 text-gray-700 px-2 py-1 border border-gray-300 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </header>
              
              <div className="prose prose-sm md:prose-base max-w-none">
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  {post.excerpt}
                </p>
              </div>
              
              <footer className="mt-6 pt-4 border-t border-gray-200">
                <div className="inline-flex items-center bg-black text-white px-4 py-2 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 font-bold text-xs md:text-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
                  Read more →
                </div>
              </footer>
            </article>
          ))}
          
          {/* Coming Soon Message */}
          <div className="text-center py-8">
            <p className="text-gray-600">More Interesting Stuff Coming Soon!</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 md:py-8 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">© 2024 Adeen Atif. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
