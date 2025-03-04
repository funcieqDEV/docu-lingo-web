
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CodeBlock from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  ChevronDown, 
  Book, 
  Code, 
  Terminal, 
  FileText, 
  Lightbulb, 
  Users,
  Copy,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    'getting-started': true,
    'core-concepts': false,
    'api-reference': false,
    'advanced': false,
  });
  
  const [copied, setCopied] = useState(false);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // Installation code example
  const installCode = `# Using npm
npm install devdocs-js

# Using yarn
yarn add devdocs-js

# Using pnpm
pnpm add devdocs-js`;

  // Basic usage example
  const basicUsageCode = `import { Documentation } from 'devdocs-js';

// Initialize with configuration
const docs = new Documentation({
  title: "My Project Documentation",
  version: "1.0.0",
  theme: "light"
});

// Add content to documentation
docs.addSection({
  id: "getting-started",
  title: "Getting Started",
  content: "Learn how to use our library..."
});

// Render the documentation
docs.render("#documentation-container");`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="doc-container flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 border-r border-border py-8 pr-4 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:overflow-y-auto">
            <nav className="space-y-1">
              {/* Getting Started Section */}
              <div className="mb-4">
                <button 
                  onClick={() => toggleSection('getting-started')}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-muted transition-colors text-left"
                >
                  <div className="flex items-center">
                    <Book className="mr-2 h-4 w-4" />
                    <span className="font-medium">Getting Started</span>
                  </div>
                  {openSections['getting-started'] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                
                {openSections['getting-started'] && (
                  <div className="mt-1 ml-7 space-y-1">
                    <a 
                      href="#introduction"
                      onClick={(e) => { e.preventDefault(); setActiveSection('introduction'); }}
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm transition-colors", 
                        activeSection === 'introduction' 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "hover:bg-muted text-muted-foreground"
                      )}
                    >
                      Introduction
                    </a>
                    <a 
                      href="#installation"
                      onClick={(e) => { e.preventDefault(); setActiveSection('installation'); }}
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm transition-colors", 
                        activeSection === 'installation' 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "hover:bg-muted text-muted-foreground"
                      )}
                    >
                      Installation
                    </a>
                    <a 
                      href="#quick-start"
                      onClick={(e) => { e.preventDefault(); setActiveSection('quick-start'); }}
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm transition-colors", 
                        activeSection === 'quick-start' 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "hover:bg-muted text-muted-foreground"
                      )}
                    >
                      Quick Start
                    </a>
                  </div>
                )}
              </div>
              
              {/* Core Concepts Section */}
              <div className="mb-4">
                <button 
                  onClick={() => toggleSection('core-concepts')}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-muted transition-colors text-left"
                >
                  <div className="flex items-center">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    <span className="font-medium">Core Concepts</span>
                  </div>
                  {openSections['core-concepts'] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                
                {openSections['core-concepts'] && (
                  <div className="mt-1 ml-7 space-y-1">
                    <a href="#" className="block px-3 py-2 rounded-md text-sm hover:bg-muted text-muted-foreground">
                      Documentation Structure
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-sm hover:bg-muted text-muted-foreground">
                      Theming
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-sm hover:bg-muted text-muted-foreground">
                      Configuration
                    </a>
                  </div>
                )}
              </div>
              
              {/* API Reference Section */}
              <div className="mb-4">
                <button 
                  onClick={() => toggleSection('api-reference')}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-muted transition-colors text-left"
                >
                  <div className="flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    <span className="font-medium">API Reference</span>
                  </div>
                  {openSections['api-reference'] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                
                {openSections['api-reference'] && (
                  <div className="mt-1 ml-7 space-y-1">
                    <a href="#" className="block px-3 py-2 rounded-md text-sm hover:bg-muted text-muted-foreground">
                      Documentation Class
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-sm hover:bg-muted text-muted-foreground">
                      Section Class
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-sm hover:bg-muted text-muted-foreground">
                      Theme Configuration
                    </a>
                  </div>
                )}
              </div>
              
              {/* Advanced Section */}
              <div className="mb-4">
                <button 
                  onClick={() => toggleSection('advanced')}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-muted transition-colors text-left"
                >
                  <div className="flex items-center">
                    <Terminal className="mr-2 h-4 w-4" />
                    <span className="font-medium">Advanced</span>
                  </div>
                  {openSections['advanced'] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                
                {openSections['advanced'] && (
                  <div className="mt-1 ml-7 space-y-1">
                    <a href="#" className="block px-3 py-2 rounded-md text-sm hover:bg-muted text-muted-foreground">
                      Custom Extensions
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-sm hover:bg-muted text-muted-foreground">
                      Plugins
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-sm hover:bg-muted text-muted-foreground">
                      i18n Support
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </aside>
          
          {/* Main content */}
          <div className="flex-1 py-8 lg:py-12 lg:px-8">
            {/* Introduction Section */}
            {activeSection === 'introduction' && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">Introduction</h1>
                  <p className="text-muted-foreground">
                    Welcome to the DevDocs documentation. This guide will help you get started with our platform
                    and provide everything you need to know to create beautiful documentation for your projects.
                  </p>
                </div>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <h2 className="text-2xl font-semibold mt-8 mb-4">What is DevDocs?</h2>
                  <p>
                    DevDocs is a modern documentation platform designed specifically for developers. It provides
                    an elegant, intuitive, and powerful environment for creating, managing, and sharing documentation.
                    Whether you're documenting an API, creating a user guide, or writing technical documentation,
                    DevDocs has everything you need.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong>Modern UI:</strong> Clean, responsive design that looks great on all devices.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong>Rich Content:</strong> Support for markdown, code snippets with syntax highlighting, images, and more.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong>Customizable:</strong> Easily customize the look and feel to match your brand.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong>Search:</strong> Powerful search functionality to help users find what they need.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong>Versioning:</strong> Support for multiple versions of your documentation.
                      </div>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">Why Use DevDocs?</h2>
                  <p>
                    Good documentation is essential for any project. It helps users understand how to use your
                    software, reduces support requests, and improves overall user experience. DevDocs makes it
                    easy to create and maintain high-quality documentation, allowing you to focus on building
                    great software.
                  </p>
                  
                  <div className="mt-8 p-4 bg-accent rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Ready to get started?</h3>
                    <p className="mb-3">
                      Continue to the Installation guide to start using DevDocs in your project.
                    </p>
                    <Button 
                      onClick={() => setActiveSection('installation')}
                    >
                      Go to Installation
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Installation Section */}
            {activeSection === 'installation' && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">Installation</h1>
                  <p className="text-muted-foreground">
                    Setting up DevDocs in your project is straightforward. Follow these steps to get started.
                  </p>
                </div>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Prerequisites</h2>
                  <p>
                    Before installing DevDocs, make sure you have the following:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        Node.js (version 14 or higher)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        npm, yarn, or pnpm package manager
                      </div>
                    </li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Install the Package</h2>
                  <p>
                    You can install DevDocs using your preferred package manager:
                  </p>
                  
                  <div className="mt-4">
                    <CodeBlock 
                      code={installCode} 
                      language="bash" 
                      filename="terminal"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Verify Installation</h2>
                  <p>
                    After installation, you can verify that DevDocs is properly installed by creating a simple
                    test file:
                  </p>
                  
                  <div className="relative mt-4 mb-4">
                    <pre className="p-4 rounded-lg bg-code-background border border-border overflow-x-auto">
                      <code className="text-sm font-mono">
                        <span className="text-code-keyword">import</span> <span className="text-code-foreground">&#123; version &#125;</span> <span className="text-code-keyword">from</span> <span className="text-code-string">'devdocs-js'</span><span className="text-code-foreground">;</span><br/>
                        <span className="text-code-function">console</span><span className="text-code-foreground">.log(</span><span className="text-code-string">'DevDocs version:'</span><span className="text-code-foreground">, version);</span>
                      </code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(`import { version } from 'devdocs-js';
console.log('DevDocs version:', version);`)}
                      className="absolute top-2 right-2 p-1 rounded-md hover:bg-muted"
                      aria-label="Copy code"
                    >
                      {copied ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                  
                  <p>
                    This should output the current version of DevDocs, confirming that the package is installed correctly.
                  </p>
                  
                  <div className="mt-8 p-4 bg-accent rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
                    <p className="mb-3">
                      Now that you have DevDocs installed, let's see how to create your first documentation.
                    </p>
                    <Button 
                      onClick={() => setActiveSection('quick-start')}
                    >
                      Go to Quick Start
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Quick Start Section */}
            {activeSection === 'quick-start' && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">Quick Start</h1>
                  <p className="text-muted-foreground">
                    Get up and running with DevDocs in minutes by following this quick start guide.
                  </p>
                </div>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Usage</h2>
                  <p>
                    Here's a simple example to create and render documentation:
                  </p>
                  
                  <div className="mt-4">
                    <CodeBlock 
                      code={basicUsageCode} 
                      language="javascript" 
                      filename="docs.js"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">HTML Setup</h2>
                  <p>
                    Create an HTML file with a container element where the documentation will be rendered:
                  </p>
                  
                  <div className="relative mt-4 mb-4">
                    <pre className="p-4 rounded-lg bg-code-background border border-border overflow-x-auto">
                      <code className="text-sm font-mono">
                        <span className="text-code-foreground">&lt;!</span><span className="text-code-keyword">DOCTYPE</span> <span className="text-code-function">html</span><span className="text-code-foreground">&gt;</span><br/>
                        <span className="text-code-foreground">&lt;</span><span className="text-code-keyword">html</span><span className="text-code-foreground">&gt;</span><br/>
                        <span className="text-code-foreground">&lt;</span><span className="text-code-keyword">head</span><span className="text-code-foreground">&gt;</span><br/>
                        {'  '}<span className="text-code-foreground">&lt;</span><span className="text-code-keyword">title</span><span className="text-code-foreground">&gt;</span><span className="text-code-foreground">My Documentation</span><span className="text-code-foreground">&lt;/</span><span className="text-code-keyword">title</span><span className="text-code-foreground">&gt;</span><br/>
                        {'  '}<span className="text-code-foreground">&lt;</span><span className="text-code-keyword">meta</span> <span className="text-code-function">charset</span><span className="text-code-foreground">=</span><span className="text-code-string">"UTF-8"</span><span className="text-code-foreground">&gt;</span><br/>
                        {'  '}<span className="text-code-foreground">&lt;</span><span className="text-code-keyword">meta</span> <span className="text-code-function">name</span><span className="text-code-foreground">=</span><span className="text-code-string">"viewport"</span> <span className="text-code-function">content</span><span className="text-code-foreground">=</span><span className="text-code-string">"width=device-width, initial-scale=1.0"</span><span className="text-code-foreground">&gt;</span><br/>
                        <span className="text-code-foreground">&lt;/</span><span className="text-code-keyword">head</span><span className="text-code-foreground">&gt;</span><br/>
                        <span className="text-code-foreground">&lt;</span><span className="text-code-keyword">body</span><span className="text-code-foreground">&gt;</span><br/>
                        {'  '}<span className="text-code-foreground">&lt;</span><span className="text-code-keyword">div</span> <span className="text-code-function">id</span><span className="text-code-foreground">=</span><span className="text-code-string">"documentation-container"</span><span className="text-code-foreground">&gt;&lt;/</span><span className="text-code-keyword">div</span><span className="text-code-foreground">&gt;</span><br/>
                        {'  '}<span className="text-code-foreground">&lt;</span><span className="text-code-keyword">script</span> <span className="text-code-function">src</span><span className="text-code-foreground">=</span><span className="text-code-string">"docs.js"</span> <span className="text-code-function">type</span><span className="text-code-foreground">=</span><span className="text-code-string">"module"</span><span className="text-code-foreground">&gt;&lt;/</span><span className="text-code-keyword">script</span><span className="text-code-foreground">&gt;</span><br/>
                        <span className="text-code-foreground">&lt;/</span><span className="text-code-keyword">body</span><span className="text-code-foreground">&gt;</span><br/>
                        <span className="text-code-foreground">&lt;/</span><span className="text-code-keyword">html</span><span className="text-code-foreground">&gt;</span>
                      </code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(`<!DOCTYPE html>
<html>
<head>
  <title>My Documentation</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <div id="documentation-container"></div>
  <script src="docs.js" type="module"></script>
</body>
</html>`)}
                      className="absolute top-2 right-2 p-1 rounded-md hover:bg-muted"
                      aria-label="Copy code"
                    >
                      {copied ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Adding Content</h2>
                  <p>
                    With DevDocs, you can add various types of content to your documentation:
                  </p>
                  
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong>Text:</strong> Regular text content formatted with Markdown.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong>Code Snippets:</strong> Syntax-highlighted code examples.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong>Images:</strong> Visual aids to complement your documentation.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong>Interactive Examples:</strong> Demo components that users can interact with.
                      </div>
                    </li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Configuration Options</h2>
                  <p>
                    DevDocs provides various configuration options to customize your documentation:
                  </p>
                  
                  <div className="relative mt-4 mb-4">
                    <pre className="p-4 rounded-lg bg-code-background border border-border overflow-x-auto">
                      <code className="text-sm font-mono">
                        <span className="text-code-keyword">const</span> <span className="text-code-foreground">config = &#123;</span><br/>
                        {'  '}title: <span className="text-code-string">"My Project Documentation"</span>,<br/>
                        {'  '}version: <span className="text-code-string">"1.0.0"</span>,<br/>
                        {'  '}theme: <span className="text-code-string">"light"</span>,  <span className="text-code-comment">// 'light', 'dark', or custom theme</span><br/>
                        {'  '}logo: <span className="text-code-string">"/path/to/logo.png"</span>,<br/>
                        {'  '}navigation: <span className="text-code-foreground">&#123;</span><br/>
                        {'    '}position: <span className="text-code-string">"left"</span>,  <span className="text-code-comment">// 'left', 'right', 'top'</span><br/>
                        {'    '}autoCollapse: <span className="text-code-keyword">true</span><br/>
                        {'  '}&#125;,<br/>
                        {'  '}search: <span className="text-code-foreground">&#123;</span><br/>
                        {'    '}enabled: <span className="text-code-keyword">true</span>,<br/>
                        {'    '}placeholder: <span className="text-code-string">"Search documentation..."</span><br/>
                        {'  '}&#125;,<br/>
                        {'  '}footer: <span className="text-code-foreground">&#123;</span><br/>
                        {'    '}text: <span className="text-code-string">"© 2023 My Company"</span>,<br/>
                        {'    '}links: [<br/>
                        {'      '}<span className="text-code-foreground">&#123;</span> text: <span className="text-code-string">"GitHub"</span>, url: <span className="text-code-string">"https://github.com/mycompany"</span> <span className="text-code-foreground">&#125;</span>,<br/>
                        {'      '}<span className="text-code-foreground">&#123;</span> text: <span className="text-code-string">"Twitter"</span>, url: <span className="text-code-string">"https://twitter.com/mycompany"</span> <span className="text-code-foreground">&#125;</span><br/>
                        {'    '}]<br/>
                        {'  '}&#125;<br/>
                        <span className="text-code-foreground">&#125;;</span><br/><br/>
                        <span className="text-code-keyword">const</span> <span className="text-code-foreground">docs = </span><span className="text-code-keyword">new</span> <span className="text-code-function">Documentation</span><span className="text-code-foreground">(config);</span>
                      </code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(`const config = {
  title: "My Project Documentation",
  version: "1.0.0",
  theme: "light",  // 'light', 'dark', or custom theme
  logo: "/path/to/logo.png",
  navigation: {
    position: "left",  // 'left', 'right', 'top'
    autoCollapse: true
  },
  search: {
    enabled: true,
    placeholder: "Search documentation..."
  },
  footer: {
    text: "© 2023 My Company",
    links: [
      { text: "GitHub", url: "https://github.com/mycompany" },
      { text: "Twitter", url: "https://twitter.com/mycompany" }
    ]
  }
};

const docs = new Documentation(config);`)}
                      className="absolute top-2 right-2 p-1 rounded-md hover:bg-muted"
                      aria-label="Copy code"
                    >
                      {copied ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mt-8 mb-4">Next Steps</h2>
                  <p>
                    Now that you have the basics up and running, explore the following topics to learn more:
                  </p>
                  
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <a href="#" className="text-primary hover:underline">Advanced Configuration</a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <a href="#" className="text-primary hover:underline">Creating Custom Themes</a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <a href="#" className="text-primary hover:underline">API Reference</a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full mr-3">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <a href="#" className="text-primary hover:underline">Deployment</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
