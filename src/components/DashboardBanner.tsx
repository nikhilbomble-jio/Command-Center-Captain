import bannerImage from "@/assets/jpsl-banner.jpg";

export const DashboardBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 border border-border">
        <div className="absolute inset-0">
  <img
    src={bannerImage}
    alt="JPSL Dashboard"
    className="w-full h-full object-cover opacity-30"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
</div>
      
      <div className="relative px-8 py-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
          Welcome to{" "}
          <span
            className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            JPSL Dashboard
          </span>
        </h1>
      </div>
    </div>
  );
};