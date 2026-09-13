import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SiteNav from "@/components/retro/SiteNav";
import SiteFooter from "@/components/retro/SiteFooter";
import Window from "@/components/retro/Window";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <SiteNav />

      <div className="halftone flex-1 grid place-items-center px-5 py-16">
        <Window filename="error-404.txt" shadow="lg" className="w-full max-w-md">
          <h1 className="display text-6xl sm:text-7xl">404</h1>
          <p className="mt-4 text-base text-neutral-700">
            Oops! That page does not exist.
          </p>
          <Link to="/" className="btn-retro mt-6 text-sm">
            Return to home
          </Link>
        </Window>
      </div>

      <SiteFooter />
    </div>
  );
};

export default NotFound;
