import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';

const ComingSoon = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="hero-section fade-in"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`
        }}
      >
        <div className="container-spacing text-center">
          <h1 className="hero-title mb-8 fade-in">
            Coming Soon
          </h1>
          <p className="hero-subtitle fade-in fade-in-delay-1 mb-12">
            We're working hard to bring you something amazing. Stay tuned for updates.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
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

export default ComingSoon;