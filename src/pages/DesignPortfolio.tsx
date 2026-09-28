import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Window from '@/components/retro/Window';
import SectionHeading from '@/components/retro/SectionHeading';
import SiteFooter from '@/components/retro/SiteFooter';

/**
 * Web3Forms access key. Get one free at web3forms.com by entering the
 * inbox you want enquiries in. Until this is filled the form refuses to
 * pretend it sent anything and points at the email address instead.
 */
const ACCESS_KEY = '';

const EMAIL = 'adynatif@gmail.com';

const services = [
  {
    file: 'marketing-site.html',
    title: 'Marketing sites & landing pages',
    body: 'Company sites, product pages, launch pages. I take it from the structure of what you are saying through to a deployed URL, rather than handing you a design and leaving the build to someone else.'
  },
  {
    file: 'portfolio-site.html',
    title: 'Personal & portfolio sites',
    body: 'The kind of site you are reading. Built so you can add a project or swap a photo yourself, instead of paying someone every time something changes.'
  },
  {
    file: 'app-frontend.tsx',
    title: 'Web app UI & front-end',
    body: 'Dashboards, internal tools and product front-ends in React and TypeScript, wired to whatever backend you already have. This is the half of the job that usually decides whether people keep using the thing.'
  }
];

const work = [
  {
    file: 'adeenatif-com.html',
    title: 'adeenatif.com',
    kind: 'Personal site',
    body: 'This site. Designed and built from nothing: a retro desktop language, a world map generated at build time so the page ships no map library, and a leadership section that rearranges itself as you scroll.',
    href: '/',
    internal: true
  },
  {
    file: 'probrai-com.html',
    title: 'Probr AI',
    kind: 'Marketing site',
    body: 'Site for a company that finds where production AI models fail and retrains them. Dense, technical subject matter turned into pages a non-technical buyer can follow.',
    href: 'https://probrai.com'
  },
  {
    file: 'tabricai-com.html',
    title: 'Tabric',
    kind: 'Product & front-end',
    body: 'An AI data analyst that turns PDFs and CSVs into dashboards and written summaries. I work on both the product decisions and the interface people actually touch.',
    href: 'https://tabricai.com'
  },
  {
    file: 'ticketwala-pk.html',
    title: 'Ticketwala',
    kind: 'Product & AI',
    body: 'A live ticketing platform with real users and real money moving through it. Product strategy and AI features, built under the constraints that only show up once something is in production.',
    href: 'https://ticketwala.pk'
  }
];

const process = [
  {
    n: '01',
    title: 'Call',
    body: 'Twenty minutes. What the site is for, who it is for, and what already exists.'
  },
  {
    n: '02',
    title: 'Scope',
    body: 'A fixed list of pages, what each one has to do, and a price and a date against the lot. No hourly surprises.'
  },
  {
    n: '03',
    title: 'Build',
    body: 'You get a live URL from the second day and watch it fill in, rather than seeing it once at the end.'
  },
  {
    n: '04',
    title: 'Handover',
    body: 'Deployed on your hosting, repo in your account, and a walkthrough of how to change things without me.'
  }
];

const stack = [
  'React',
  'TypeScript',
  'Tailwind',
  'Vite',
  'Next.js',
  'Vercel',
  'Figma'
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

const DesignPortfolio = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    budget: ''
  });
  const [status, setStatus] = useState<Status>('idle');

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ACCESS_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Web enquiry from ${form.name}`,
          from_name: 'adeenatif.com /design',
          name: form.name,
          email: form.email,
          budget: form.budget || 'not given',
          message: form.project
        })
      });
      const data = await res.json();
      setStatus(data.success ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const field =
    'w-full bg-white border-2 border-black px-3 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:shadow-hard';

  return (
    <div className="min-h-screen bg-white text-black">
      <Helmet>
        <title>Adeen Atif — Design & web build</title>
        <meta
          name="description"
          content="Marketing sites, portfolio sites and web app front-ends, designed and built by Adeen Atif."
        />
        <meta property="og:title" content="Adeen Atif — Design & web build" />
        <meta
          property="og:description"
          content="Marketing sites, portfolio sites and web app front-ends, designed and built end to end."
        />
      </Helmet>

      {/* Deliberately not the site nav: this page is shared by link and has
          nothing to do with the sections on the home page. */}
      <header className="sticky top-0 z-50 bg-chrome border-b-2 border-black">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 min-w-0"
            aria-label="Back to adeenatif.com"
          >
            <span className="w-9 h-9 shrink-0 border-2 border-black bg-black text-white grid place-items-center font-display text-sm leading-none">
              AA
            </span>
            <span className="chrome truncate">design-and-build</span>
          </Link>

          <a href="#enquire" className="btn-retro text-sm py-2">
            Start a project
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white border-b-2 border-black">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
          <h1 className="display text-4xl sm:text-6xl lg:text-7xl max-w-4xl">
            Sites that hold up
            <br className="hidden sm:block" /> after launch.
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] sm:text-base leading-relaxed">
            I build AI systems for a living and I build the sites that sit in
            front of them. Design and front-end come from the same pair of
            hands, so nothing gets lost in a handoff and nobody has to guess
            what the mockup meant.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-retro text-sm">
              See the work
            </a>
            <a href="#enquire" className="btn-retro text-sm">
              Start a project
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="halftone border-b-2 border-black">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
          <SectionHeading>What I build</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <Window key={s.title} as="article" filename={s.file} shadow="md">
                <h3 className="display text-xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  {s.body}
                </p>
              </Window>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-white border-b-2 border-black">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
          <SectionHeading size="lg">Selected work</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {work.map((w) => {
              const body = (
                <>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="display text-2xl">{w.title}</h3>
                    <span className="chrome shrink-0">{w.kind}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {w.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold link-ul px-1">
                    Open
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                </>
              );

              return w.internal ? (
                <Link key={w.title} to={w.href} className="block">
                  <Window as="article" filename={w.file} shadow="md" interactive>
                    {body}
                  </Window>
                </Link>
              ) : (
                <a
                  key={w.title}
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Window as="article" filename={w.file} shadow="md" interactive>
                    {body}
                  </Window>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="halftone border-b-2 border-black">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
          <SectionHeading>How it goes</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-l-2 border-black hard-lg bg-white">
            {process.map((p) => (
              <div
                key={p.n}
                className="border-r-2 border-b-2 border-black p-5 sm:p-6"
              >
                <div className="chrome">{p.n}</div>
                <h3 className="display text-xl mt-2">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="chrome mr-1">BUILT WITH</span>
            {stack.map((t) => (
              <span
                key={t}
                className="chrome border-2 border-black bg-white px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="bg-white border-b-2 border-black">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
          <SectionHeading size="lg">Start a project</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-8">
            <Window filename="new-project.txt" shadow="lg">
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  required
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your name"
                  aria-label="Your name"
                  className={field}
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="Email"
                  aria-label="Email"
                  className={field}
                />
                <input
                  value={form.budget}
                  onChange={set('budget')}
                  placeholder="Budget, roughly (optional)"
                  aria-label="Budget, roughly"
                  className={field}
                />
                <textarea
                  required
                  rows={5}
                  value={form.project}
                  onChange={set('project')}
                  placeholder="What are you building, and when does it need to be live?"
                  aria-label="What are you building"
                  className={`${field} resize-none`}
                />

                <button
                  type="submit"
                  disabled={
                    !ACCESS_KEY || status === 'sending' || status === 'sent'
                  }
                  className="btn-retro w-full justify-center text-sm disabled:opacity-60"
                >
                  {status === 'sending'
                    ? 'Sending...'
                    : status === 'sent'
                    ? 'Sent'
                    : 'Send enquiry'}
                </button>

                <p
                  aria-live="polite"
                  className={`chrome ${
                    status === 'idle' ? 'text-neutral-600' : ''
                  }`}
                >
                  {status === 'sent' &&
                    'Landed. You will hear back within a day or two.'}
                  {status === 'error' && (
                    <>
                      That did not send. Email{' '}
                      <a href={`mailto:${EMAIL}`} className="link-ul px-0.5">
                        {EMAIL}
                      </a>{' '}
                      instead and it will reach me.
                    </>
                  )}
                  {(status === 'idle' || status === 'sending') &&
                    (ACCESS_KEY ? (
                      'Goes straight to my inbox. No list, no newsletter.'
                    ) : (
                      <>
                        Form not connected yet. Email{' '}
                        <a href={`mailto:${EMAIL}`} className="link-ul px-0.5">
                          {EMAIL}
                        </a>{' '}
                        and it will reach me.
                      </>
                    ))}
                </p>
              </form>
            </Window>

            <Window filename="terms.txt" shadow="lg">
              <dl className="space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="chrome">WHERE I AM</dt>
                  <dd className="mt-1">
                    Karachi and Riyadh, working with clients anywhere. Most
                    projects run entirely over email and calls.
                  </dd>
                </div>
                <div>
                  <dt className="chrome">HOW I PRICE</dt>
                  <dd className="mt-1">
                    Fixed price per project, agreed before anything starts.
                    Tell me the budget you have and I will tell you honestly
                    whether it covers what you are asking for.
                  </dd>
                </div>
                <div>
                  <dt className="chrome">WHAT YOU KEEP</dt>
                  <dd className="mt-1">
                    The repo, the hosting account and the domain are yours from
                    the start. Nothing is locked to me.
                  </dd>
                </div>
                <div>
                  <dt className="chrome">DIRECT</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${EMAIL}`} className="link-ul px-0.5">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
              </dl>
            </Window>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default DesignPortfolio;
