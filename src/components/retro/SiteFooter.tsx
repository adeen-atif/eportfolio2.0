import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter = () => (
  <footer className="border-t-2 border-black bg-chrome text-black">
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link
        to="/"
        aria-label="Home"
        className="w-9 h-9 border-2 border-black bg-black text-white grid place-items-center font-display text-sm leading-none"
      >
        AA
      </Link>

      <p className="chrome">
        © 2024 Adeen Atif. All rights reserved.
      </p>

      <a
        href="mailto:adynatif@gmail.com"
        className="text-sm font-semibold link-ul px-1"
      >
        adynatif@gmail.com
      </a>
    </div>
  </footer>
);

export default SiteFooter;
