
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold text-lg">D</div>
              <span className="font-semibold text-xl">DevDocs</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              A modern documentation platform built with elegance and simplicity in mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Documentation */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">Getting Started</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Examples</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Tutorials</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Best Practices</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">License</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} DevDocs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
