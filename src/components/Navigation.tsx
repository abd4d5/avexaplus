
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">ModernSaaS</div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button className="px-6 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden animate-slideIn">
              <div className="flex flex-col p-4 space-y-4">
                <NavLink href="#features" mobile>Features</NavLink>
                <NavLink href="#pricing" mobile>Pricing</NavLink>
                <NavLink href="#contact" mobile>Contact</NavLink>
                <button className="px-6 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
  <a 
    href={href}
    className={`${
      mobile ? 'block' : 'inline-block'
    } text-neutral-600 hover:text-neutral-900 transition-colors`}
  >
    {children}
  </a>
);

export default Navigation;
