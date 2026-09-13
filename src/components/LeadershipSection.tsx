import React from 'react';
import SectionHeading from '@/components/retro/SectionHeading';
import Window from '@/components/retro/Window';

const LeadershipSection = () => {
  const leadership = [
    {
      title: 'NASA Space Apps Challenge Judge',
      desc: 'Mentored and judged teams on various Astronomy + AI use cases',
      year: '2023',
      logo: '/lovable-uploads/nasa-logo.png',
      photo: '/lovable-uploads/nasa-photo.png'
    },
    {
      title: 'Google DSC Lead',
      desc: 'Led 10+ tech events, mentorship circles, and bootcamps.',
      year: '2023',
      logo: '/lovable-uploads/2479db06-db0d-46ab-abd3-9e427161536e.png',
      photo: '/lovable-uploads/c7416d44-ad02-47e6-9511-ebdf1a70445b.png'
    },
    {
      title: 'Co-Founder Arcanum',
      desc: 'Started a booming ed-tech company aiming to aid students and working professionals.',
      year: '2025',
      logo: '/lovable-uploads/Final Final Logo.png',
      photo: '/lovable-uploads/AA.png'
    },
    {
      title: 'TEDx Clifton',
      desc: 'Curated and led speaker storytelling for TEDx talks.',
      year: '2023',
      logo: '/lovable-uploads/9de938c3-30fc-4c53-b837-1bcdc296cd68.png',
      photo:
        '/lovable-uploads/489757877_1072519284895790_2402514148411438511_n.jpg'
    },
    {
      title: 'WWF Pakistan',
      desc: 'Designed youth-focused sustainability workshops.',
      year: '2022',
      logo: '/lovable-uploads/e4ecd225-bc4c-406c-926c-03deb13ed764.png',
      photo: '/lovable-uploads/f47bd6e2-3b8e-427f-a96f-97aefbdac72b.png'
    },
    {
      title: 'WRO Robotics Judge',
      desc: 'Mentored and judged national-level robotics talent.',
      year: '2023',
      logo: '/lovable-uploads/81bcdf6c-9127-4176-9c62-a8c6a6328f22.png',
      photo: '/lovable-uploads/1692709757999.jpeg'
    },
    {
      title: 'Badminton Team Captain',
      desc: "Led IBA's badminton team to multiple victories and championships.",
      year: '2022-24',
      logo: '/lovable-uploads/images (4).png',
      photo: '/lovable-uploads/3ea90759-19d7-4ee3-9bc6-7cea80503e4e.png'
    }
  ];

  return (
    <section id="leadership" className="bg-white border-b-2 border-black">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
        <SectionHeading size="lg">
          Where I&apos;ve led,
          <br className="hidden sm:block" /> learned, and left a mark
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item) => (
            <Window
              key={item.title}
              as="article"
              filename={`${item.year}.jpg`}
              padded={false}
              shadow="md"
              interactive
              className="flex flex-col"
            >
              <div className="border-b-2 border-black bg-band-dark">
                <img
                  src={item.photo}
                  alt={`${item.title} in action`}
                  loading="lazy"
                  className="mono-img w-full h-44 object-cover"
                />
              </div>

              <div className="p-5 flex gap-3 flex-1">
                <span className="shrink-0 w-10 h-10 border-2 border-black bg-white grid place-items-center overflow-hidden">
                  <img
                    src={item.logo}
                    alt=""
                    loading="lazy"
                    className="mono-img w-6 h-6 object-contain"
                  />
                </span>

                <div className="min-w-0">
                  <h3 className="display text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Window>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
