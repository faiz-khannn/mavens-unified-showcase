import { useEffect } from 'react';

interface SubCompany {
  name: string;
  url: string;
  description: string;
}

const subCompanies: SubCompany[] = [
  {
    name: "Maven AI Tech",
    url: "https://mavenaitech.com/",
    description: "AI Technology Solutions"
  },
  {
    name: "Maven Investments",
    url: "#",
    description: "Investment Management"
  },
  {
    name: "Maven Contractors",
    url: "#",
    description: "Construction & Development"
  },
  {
    name: "Maven eCommerce",
    url: "#",
    description: "E-Commerce Solutions"
  }
];

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleTileClick = (url: string) => {
    if (url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <section className="text-center mb-20">
          <h1 className="hero-title fade-in mb-6">
            The Mavens Group
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in fade-in-delay-1">
            A leading business conglomerate delivering excellence across multiple industries 
            through our specialized subsidiary companies.
          </p>
        </section>

        {/* Sub-Companies Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {subCompanies.map((company, index) => (
              <div
                key={company.name}
                className={`company-tile fade-in fade-in-delay-${index + 1}`}
                onClick={() => handleTileClick(company.url)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleTileClick(company.url);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Visit ${company.name} website`}
              >
                <div className="text-center">
                  <h3 className="company-tile-name mb-3">
                    {company.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {company.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-primary font-medium">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="text-center mb-16 fade-in fade-in-delay-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8">
              Trusted Excellence Across Industries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Leading-edge solutions across all our business verticals
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Reliability</h3>
                <p className="text-muted-foreground text-sm">
                  Consistent delivery and long-term partnership commitment
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Uncompromising quality standards in everything we do
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 The Mavens Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;