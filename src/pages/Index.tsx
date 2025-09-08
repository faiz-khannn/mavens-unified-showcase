import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';
import aiTechBg from '@/assets/ai-tech-bg.jpg';
import investmentsBg from '@/assets/investments-bg.jpg';
import contractorsBg from '@/assets/contractors-bg.jpg';
import ecommerceBg from '@/assets/ecommerce-bg.jpg';

interface SubCompany {
  name: string;
  url: string;
  description: string;
  backgroundImage: string;
}

const subCompanies: SubCompany[] = [
  {
    name: "Maven AI Tech",
    url: "https://mavenaitech.com/",
    description: "AI Technology Solutions",
    backgroundImage: aiTechBg
  },
  {
    name: "Maven Financial Services",
    url: "coming-soon",
    description: "Financial Services & Investment Management",
    backgroundImage: investmentsBg
  },
  {
    name: "Maven Contractors",
    url: "coming-soon",
    description: "Construction & Development",
    backgroundImage: contractorsBg
  },
  {
    name: "Maven eCommerce and Affiliates",
    url: "coming-soon",
    description: "E-Commerce Solutions & Affiliate Networks",
    backgroundImage: ecommerceBg
  }
];

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleTileClick = (url: string) => {
    if (url === "coming-soon") {
      navigate('/coming-soon');
    } else if (url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Solterra-Inspired Hero Section */}
      <section 
        className="hero-section fade-in"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`
        }}
      >
        <div className="container-spacing text-center">
          <h1 className="hero-title mb-8 fade-in">
            The Mavens Group
          </h1>
          <p className="hero-subtitle fade-in fade-in-delay-1">
            A leading business conglomerate delivering excellence across multiple industries 
            through our specialized subsidiary companies.
          </p>
        </div>
      </section>

      {/* Sub-Companies Grid with Spacious Layout */}
      <section className="section-spacing bg-background">
        <div className="container-spacing">
          <div className="text-center mb-20 fade-in fade-in-delay-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our specialized subsidiaries, each excelling in their respective industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {subCompanies.map((company, index) => (
              <div
                key={company.name}
                className={`company-tile group fade-in fade-in-delay-${index + 3}`}
                style={{ backgroundImage: `url(${company.backgroundImage})` }}
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
                <div className="company-tile-content">
                  <h3 className="company-tile-name">
                    {company.name}
                  </h3>
                  <p className="company-tile-description">
                    {company.description}
                  </p>
                  <span className="company-tile-link">
                    Learn More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-spacing bg-muted/30">
        <div className="container-spacing">
          <div className="text-center mb-20 fade-in fade-in-delay-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The Maven Group is a collective of dynamic, purpose-driven companies unified by a common mission — to generate sustainable income and channel it toward the establishment and support of high-quality educational institutions. With diversified ventures across technology consultancy, contracting, organics, stock markets, and other sectors. The Maven Group operates not just with commercial intent, but with a higher goal: to reinvest profits into education, community empowerment, and long-term development.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Rooted in strong ethical values and a forward-thinking approach, The Maven Group is committed to creating impactful businesses that not only thrive in their respective industries but also serve as financial pillars for educational transformation. We believe that true success lies in uplifting others — and education is our most powerful tool to achieve that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with More Space */}
      <section className="section-spacing bg-background">
        <div className="container-spacing">
          <div className="text-center mb-20 fade-in fade-in-delay-5">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to innovation, reliability, and excellence drives everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center fade-in fade-in-delay-6">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-muted-foreground text-lg">
                Leading-edge solutions across all our business verticals
              </p>
            </div>
            <div className="text-center fade-in fade-in-delay-6">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Reliability</h3>
              <p className="text-muted-foreground text-lg">
                Consistent delivery and long-term partnership commitment
              </p>
            </div>
            <div className="text-center fade-in fade-in-delay-6">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground text-lg">
                Uncompromising quality standards in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with More Space */}
      <footer className="border-t border-border bg-background">
        <div className="container-spacing py-16 text-center">
          <p className="text-muted-foreground text-lg">
            © 2025 The Mavens Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;