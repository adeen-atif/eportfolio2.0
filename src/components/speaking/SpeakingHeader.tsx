const SpeakingHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <span className="text-lg font-semibold text-foreground">
          Speaking Portfolio
        </span>
      </div>
    </header>
  );
};

export default SpeakingHeader;
