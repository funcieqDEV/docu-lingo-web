
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import DocCard from '@/components/DocCard';
import CodeBlock from '@/components/CodeBlock';
import { Book, Code, Terminal, FileText, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Code snippet example
  const installCode = `# Using npm
npm install devdocs-js

# Using yarn
yarn add devdocs-js

# Using pnpm
pnpm add devdocs-js`;

  // Simple usage example
  const usageCode = `import { DocViewer } from 'devdocs-js';

// Initialize the documentation viewer
const viewer = new DocViewer({
  theme: 'light',
  language: 'javascript',
  version: '1.0.0'
});

// Render documentation
viewer.render('#documentation');`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Documentation Made Simple</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create beautiful, responsive, and interactive documentation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <DocCard
                title="Getting Started"
                description="Learn the basics and get up and running in minutes with our quick-start guide."
                icon={<Book className="h-6 w-6" />}
                to="/documentation"
              />
              <DocCard
                title="API Reference"
                description="Comprehensive API documentation with examples and detailed explanations."
                icon={<Code className="h-6 w-6" />}
                to="#"
              />
              <DocCard
                title="CLI Tools"
                description="Powerful command-line tools to help you automate your documentation workflow."
                icon={<Terminal className="h-6 w-6" />}
                to="#"
              />
              <DocCard
                title="Guides & Tutorials"
                description="Step-by-step tutorials and guides to help you master advanced concepts."
                icon={<FileText className="h-6 w-6" />}
                to="#"
              />
              <DocCard
                title="Best Practices"
                description="Learn the best practices for writing and maintaining excellent documentation."
                icon={<Lightbulb className="h-6 w-6" />}
                to="#"
              />
              <DocCard
                title="Community"
                description="Join our vibrant community of developers and documentation enthusiasts."
                icon={<Users className="h-6 w-6" />}
                to="#"
              />
            </div>
          </div>
        </section>
        
        {/* Installation Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center py-1 px-3 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Installation
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Quick and Easy Setup</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Getting started with our documentation platform is straightforward. Install the package using your favorite package manager and you're ready to go.
                </p>
                <Button>View Installation Guide</Button>
              </div>
              
              <div>
                <CodeBlock 
                  code={installCode} 
                  language="bash" 
                  filename="terminal"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Usage Example Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <CodeBlock 
                  code={usageCode} 
                  language="javascript" 
                  filename="example.js"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center py-1 px-3 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  Usage Example
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple API, Powerful Results</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our intuitive API makes it easy to integrate documentation into your projects. With just a few lines of code, you can create beautiful documentation pages.
                </p>
                <Button>Explore Examples</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials/Stats Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Developers Worldwide</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of developers who use our platform to create exceptional documentation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-card rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                <p className="text-muted-foreground">Developers</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">5M+</div>
                <p className="text-muted-foreground">Documentation Pages</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="container max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Start building beautiful documentation today. Our platform makes it easy to create, manage, and share your documentation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
