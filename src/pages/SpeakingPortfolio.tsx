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
    title: "MCIT — CODE @ KSU (Riyadh, 2025)",
    meta: ["Riyadh", "2025", "Keynote/Panel/Workshop"],
    images: [
      "/images/speaking/ksu/slide-1.webp",
      "/images/speaking/ksu/slide-2.webp",
      "/images/speaking/ksu/slide-3.webp"
    ],
    alt: [
      "Adeen at MCIT CODE KSU — stage wide",
      "Audience view at KSU Riyadh",
      "Close-up Q&A at CODE KSU"
    ]
  },
  {
    title: "MCIT — CODE (Jeddah, 2025)",
    meta: ["Jeddah", "2025", "Workshop/Panel"],
    images: [
      "/images/speaking/jeddah-code/slide-1.webp",
      "/images/speaking/jeddah-code/slide-2.webp",
      "/images/speaking/jeddah-code/slide-3.webp"
    ],
    alt: [
      "MCIT CODE Jeddah main stage",
      "Hands-on segment — Jeddah cohort",
      "Panel with founders — Jeddah"
    ]
  },
  {
    title: "US Consulate Pakistan",
    meta: ["Pakistan", "Talk/Panel"],
    images: [
      "/images/speaking/us-consulate/slide-1.webp",
      "/images/speaking/us-consulate/slide-2.webp",
      "/images/speaking/us-consulate/slide-3.webp"
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
      "/images/speaking/tedx/slide-1.webp",
      "/images/speaking/tedx/slide-2.webp",
      "/images/speaking/tedx/slide-3.webp"
    ],
    alt: [
      "TEDx Clifton red dot stage",
      "TEDx Clifton audience",
      "Post-talk discussion — TEDx"
    ]
  },
  {
    title: "Google DSC Hackfest (Pakistan, 2024)",
    meta: ["Pakistan", "2024", "Keynote/Workshop"],
    images: [
      "/images/speaking/dsc-hackfest/slide-1.webp",
      "/images/speaking/dsc-hackfest/slide-2.webp"
    ],
    alt: [
      "DSC Hackfest keynote",
      "Team mentoring breakout"
    ]
  },
  {
    title: "Google DSC Hackathon (Pakistan, 2022)",
    meta: ["Pakistan", "2022", "Keynote/Panel"],
    images: [
      "/images/speaking/dsc-hackathon/slide-1.webp",
      "/images/speaking/dsc-hackathon/slide-2.webp"
    ],
    alt: [
      "DSC Hackathon opening",
      "Judges and speakers line-up"
    ]
  }
];

const mentorshipData = [
  {
    title: "Tech Champions 5 — Riyadh Cohort (2025)",
    meta: ["Riyadh", "2025", "Mentor/Jury"],
    images: [
      "/images/mentorship/tech-champions/riyadh-1.webp",
      "/images/mentorship/tech-champions/riyadh-2.webp"
    ],
    alt: [
      "Riyadh cohort workshop",
      "Team review — Riyadh"
    ]
  },
  {
    title: "Tech Champions 5 — Jeddah Cohort (2025)",
    meta: ["Jeddah", "2025", "Mentor/Jury"],
    images: [
      "/images/mentorship/tech-champions/jeddah-1.webp",
      "/images/mentorship/tech-champions/jeddah-2.webp"
    ],
    alt: [
      "Jeddah cohort mentoring",
      "Pitch feedback — Jeddah"
    ]
  },
  {
    title: "NASA Space Apps Challenge — Pakistan",
    meta: ["Pakistan", "Mentor/Jury"],
    images: [
      "/images/mentorship/nasa/slide-1.webp",
      "/images/mentorship/nasa/slide-2.webp"
    ],
    alt: [
      "NASA Space Apps jury room",
      "Team standups — NASA SAC"
    ]
  },
  {
    title: "World Robot Olympiad — Pakistan (2023)",
    meta: ["Pakistan", "2023", "Jury"],
    images: [
      "/images/mentorship/wro/slide-1.webp",
      "/images/mentorship/wro/slide-2.webp"
    ],
    alt: [
      "WRO arena — Pakistan",
      "Judging rubric review — WRO"
    ]
  },
  {
    title: "WWF Plastiography — Pakistan (2021)",
    meta: ["Pakistan", "2021", "Jury/Mentor"],
    images: [
      "/images/mentorship/wwf/slide-1.webp",
      "/images/mentorship/wwf/slide-2.webp"
    ],
    alt: [
      "WWF Plastiography exhibition",
      "Student showcase — WWF"
    ]
  }
];

const mediaData = [
  {
    title: "ARY News — Google Build with AI (Pakistan, 2025)",
    meta: ["Pakistan", "2025", "TV Interview"],
    images: [
      "/images/media/ary/slide-1.webp",
      "/images/media/ary/slide-2.webp"
    ],
    video: "/videos/ary-interview.mp4",
    alt: [
      "ARY studio interview — Build with AI",
      "On-air lower third — Adeen Atif"
    ]
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
                {...item}
                onRequest={() => handleRequestClick("Mentorship", item.title)}
              />
            ))}
          </HorizontalSection>

          <HorizontalSection
            title="In the Media"
            subtitle="Interviews & features that carried the story."
          >
            {mediaData.map((item, idx) => (
              <ExperienceCard
                key={idx}
                {...item}
                onRequest={() => handleRequestClick("Media", item.title)}
              />
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
