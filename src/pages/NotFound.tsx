import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ink text-white font-mono flex items-center justify-center px-6 grid-backdrop">
      <div className="text-center">
        <span className="tag block mb-4">&lt;h1&gt;</span>
        <h1 className="display text-6xl sm:text-8xl text-white">404</h1>
        <span className="tag block mt-4">&lt;/h1&gt;</span>

        <p className="mt-8 font-mono text-sm text-white/60">
          <span className="text-neon">&lt;p&gt;</span>Oops! Page not found
          <span className="text-neon">&lt;/p&gt;</span>
        </p>

        <Link
          to="/"
          className="nav-link mt-8 inline-block font-mono text-xs tracking-widest text-white"
        >
          &lt;Return to Home/&gt;
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
