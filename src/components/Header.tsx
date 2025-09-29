import jpslLogo from "@/assets/jpsl-logo.png";

export const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <img
              src={jpslLogo}
              alt="JPSL Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};