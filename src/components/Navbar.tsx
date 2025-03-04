
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Github, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-background/80 border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center animate-fade-in">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold text-lg">D</div>
              <span className="font-semibold text-xl">DevDocs</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 animate-fade-in">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/documentation" className="nav-link">Documentation</Link>
            <Link to="#" className="nav-link">API</Link>
            <Link to="#" className="nav-link">Examples</Link>
            <Link to="#" className="nav-link">Community</Link>
          </nav>

          {/* Desktop Right Items */}
          <div className="hidden md:flex items-center space-x-4 animate-fade-in">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-slide-in-right">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-secondary">Home</Link>
            <Link to="/documentation" className="block px-3 py-2 rounded-md hover:bg-secondary">Documentation</Link>
            <Link to="#" className="block px-3 py-2 rounded-md hover:bg-secondary">API</Link>
            <Link to="#" className="block px-3 py-2 rounded-md hover:bg-secondary">Examples</Link>
            <Link to="#" className="block px-3 py-2 rounded-md hover:bg-secondary">Community</Link>
            <div className="pt-2 flex items-center justify-between">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Search Bar Overlay */}
      {isSearchOpen && (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-background border-b border-border animate-fade-in">
          <SearchBar onClose={() => setIsSearchOpen(false)} />
        </div>
      )}
    </header>
  );
}
