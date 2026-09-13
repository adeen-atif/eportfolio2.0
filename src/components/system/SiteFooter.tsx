import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter = () => (
  <footer className="relative border-t border-steel/60 grid-backdrop">
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link to="/" className="display text-xl text-white tracking-widest">
        {'.\\A'}
      </Link>
      <p className="font-mono text-xs tracking-widest text-white/50 text-center">
        © 2024 Adeen Atif. All rights reserved.
      </p>
      <span className="tag">&lt;/&gt;</span>
    </div>
  </footer>
);

export default SiteFooter;
