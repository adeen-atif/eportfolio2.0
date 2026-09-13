import React from 'react';

/**
 * One-pixel neon bar pinned to the top edge, scaled by --prog.
 * Pure CSS off the custom property, so it costs nothing per frame.
 */
const ProgressBar = () => (
  <div
    className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none"
    aria-hidden="true"
  >
    <span className="progress-bar block h-full w-full bg-neon" />
  </div>
);

export default ProgressBar;
