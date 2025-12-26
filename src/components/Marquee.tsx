const Marquee = () => {
  const keywords = [
    "Mobile Home Leveling",
    "Manufactured Home Anchoring",
    "Tie-Down Systems",
    "Foundation Repair",
    "Skirting Installation",
    "Crawl Space Stabilization",
    "Hurricane Protection",
    "Ground Anchors",
    "Floor Leveling",
    "Licensed & Insured",
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...keywords, ...keywords].map((keyword, index) => (
          <span key={index} className="mx-8 text-sm font-medium">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
