import { useState } from "react";
import SpeakingHeader from "@/components/speaking/SpeakingHeader";
import SpeakingHero from "@/components/speaking/SpeakingHero";
import HorizontalSection from "@/components/speaking/HorizontalSection";
import ExperienceCard from "@/components/speaking/ExperienceCard";
import ContactForm from "@/components/speaking/ContactForm";
import SpeakingFooter from "@/components/speaking/SpeakingFooter";
import { Helmet } from "react-helmet";

const speakingData = [

  {
    title: "ByBit First Crypto Conference Pakistan Host 2025",
    meta: ["Pakistan", "2025", "Host/Moderator"],
    images: [
      // "/images/ByBit1.JPG",
      "/images/ByBit2.JPG",
      "/images/ByBit3.JPG"
    ],
    alt: [
      "ByBit Crypto Conference - Opening",
      "ByBit Conference - Panel",
      "ByBit Conference - Stage",
      "ByBit Conference - Audience Interaction"
    ]
  },
    {
    title: "US Consulate Pakistan",
    meta: ["Pakistan", "Talk/Panel"],
    images: [
      "/images/USConsulate1.jpg",
      "/images/USConsulate2.jpg",
      "/images/USConsulate3.jpg"
    ],
    alt: [
      "US Consulate session",
      "Audience interaction — US Consulate",
      "Fireside format — US Consulate"
    ]
  },
  {
    title: "TEDx Clifton (Pakistan, 2025)",
    meta: ["Karachi", "2025", "TEDx Talk"],
    images: [
      "/images/TedXClifton.jpg"
    ],
    alt: [
      "TEDx Clifton red dot stage"
    ]
  },
  {
    title: "Google DSC Hackfest (Pakistan, 2024)",
    meta: ["Pakistan", "2024", "Keynote/Workshop"],
    images: [
      "/images/Hackfest2.jpg",
      "/images/Hackfest1.jpg"
    ],
    alt: [
      "DSC Hackfest keynote",
      "Team mentoring breakout"
    ]
  },
    {
    title: "Arcanum Launch Event 2025",
    meta: ["Pakistan", "2025", "Host/Speaker"],
    images: [
      "/images/ArcanumLaunch1.JPG",
      "/images/ArcanumLaunch2.JPG",
      "/images/ArcanumLaunch3.JPG"
    ],
    alt: [
      "Arcanum Launch Event - Main Stage",
      "Arcanum Launch Event - Audience",
      "Arcanum Launch Event - Panel Discussion"
    ]
  },
  {
    title: "MCIT — CODE @ KSU (Riyadh, 2025)",
    meta: ["Riyadh", "2025", "Keynote/Panel/Workshop"],
    images: [
      "/images/CODE_MCIT_Riyadh1.jpg",
      "/images/CODE_MCIT_Riyadh2.jpg"
    ],
    alt: [
      "Adeen at MCIT CODE KSU — stage wide",
      "Audience view at KSU Riyadh"
    ]
  },
  {
    title: "MCIT — CODE (Jeddah, 2025)",
    meta: ["Jeddah", "2025", "Workshop/Panel"],
    images: [
      "/images/CODE_MCIT_Jeddah1.jpeg",
      "/images/CODE_MCIT_Jeddah2.jpeg"
    ],
    alt: [
      "MCIT CODE Jeddah main stage",
      "Hands-on segment — Jeddah cohort"
    ]
  }

];

const mentorshipData = [
  {
    title: "Tech Champions 5 — Riyadh Cohort (2025)",
    meta: ["Riyadh", "2025", "Mentor/Jury"]
  },
  {
    title: "Tech Champions 5 — Jeddah Cohort (2025)",
    meta: ["Jeddah", "2025", "Mentor/Jury"]
  },
  {
    title: "NASA Space Apps Challenge — Pakistan",
    meta: ["Pakistan", "Mentor/Jury"]
  },
  {
    title: "World Robot Olympiad — Pakistan (2023)",
    meta: ["Pakistan", "2023", "Jury"]
  },
  {
    title: "WWF Plastiography — Pakistan (2021)",
    meta: ["Pakistan", "2021", "Jury/Mentor"]
  }
];

const shortsData = [
  {
    title: "Google Build with AI, News Interview",
    meta: ["ARY News", "2025"],
    video: "/images/ARYIntervieww.mp4",
    thumbnail: "/images/ARYthumbnail.png",
    alt: "ARY News Interview - Google Build with AI"
  },
  {
    title: "How NOT to Approach someone when Networking",
    meta: ["Arcanum Launch", "2025"],
    video: "/images/ArcanumLaunchVideo.MP4",
    thumbnail: "/images/ArcanumLaunch1.JPG",
    alt: "Networking tips from Arcanum Launch"
  }
];

const SpeakingPortfolio = () => {
  const [prefilledTopic, setPrefilledTopic] = useState("");

  const handleRequestClick = (section: string, cardTitle: string) => {
    setPrefilledTopic(`${section} — ${cardTitle}`);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Adeen Atif — Speaking Portfolio</title>
        <meta 
          name="description" 
          content="Talks, panels, mentorship, and media — where AI, product, and data meet outcomes. Invite Adeen to speak." 
        />
        <link rel="canonical" href="https://adeenatif.com/speakingportfolio" />
        <meta property="og:title" content="Adeen Atif — Speaking Portfolio" />
        <meta 
          property="og:description" 
          content="Talks, panels, mentorship, and media — where AI, product, and data meet outcomes. Invite Adeen to speak." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adeenatif.com/speakingportfolio" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <SpeakingHeader />
        <SpeakingHero />
        
        <main className="container mx-auto px-4 py-16 space-y-24">
          <HorizontalSection
            title="Speaking Experience"
            subtitle="Keynotes, panels, and workshops where I turned practice into playbooks."
          >
            {speakingData.map((item, idx) => (
              <ExperienceCard
                key={idx}
                {...item}
                onRequest={() => handleRequestClick("Speaking", item.title)}
              />
            ))}
          </HorizontalSection>

          <HorizontalSection
            title="Mentorship & Judging Experience"
            subtitle="Where I coach, evaluate, and pressure-test ideas."
          >
            {mentorshipData.map((item, idx) => (
              <ExperienceCard
                key={idx}
                title={item.title}
                meta={item.meta}
                images={[]}
                alt={[]}
                onRequest={() => handleRequestClick("Mentorship", item.title)}
                disableCarousel
              />
            ))}
          </HorizontalSection>

          <HorizontalSection
            title="Shorts"
            subtitle="Quick takes, real moments."
          >
            {shortsData.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[280px] snap-center group overflow-hidden rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.01]"
              >
                <video
                  src={item.video}
                  poster={item.thumbnail}
                  controls
                  className="w-full aspect-[9/16] object-cover bg-muted"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 bg-card">
                  <h3 className="font-bold text-sm text-foreground line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.meta.map((chip, chipIdx) => (
                      <span
                        key={chipIdx}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </HorizontalSection>

          <ContactForm 
            prefilledTopic={prefilledTopic}
            destinationEmail="adeen@adeenatif.com"
          />
        </main>

        <SpeakingFooter />
      </div>
    </>
  );
};

export default SpeakingPortfolio;
