
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-16 md:pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10">
        <div className="w-[800px] h-[800px] rounded-full bg-primary blur-3xl"></div>
      </div>
      
      <div className="relative container max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center py-1 px-3 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-medium animate-fade-up" style={{animationDelay: '0.1s'}}>
          <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
          Documentation made simple
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-up" style={{animationDelay: '0.2s'}}>
          Clear and concise <br className="hidden lg:block" />
          <span className="text-primary">programming documentation</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 animate-fade-up" style={{animationDelay: '0.3s'}}>
          A modern documentation platform designed for developers. Elegant, intuitive, and powerful — built to make learning and reference as efficient as possible.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{animationDelay: '0.4s'}}>
          <Button size="lg" className="group">
            <span>Start Exploring</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            View on GitHub
          </Button>
        </div>
        
        {/* Code Preview */}
        <div className="relative overflow-hidden rounded-lg border border-border bg-code-background animate-fade-up shadow-md" style={{animationDelay: '0.5s'}}>
          <div className="flex items-center justify-between p-3 border-b border-border bg-muted">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-muted-foreground/60"></div>
              <div className="w-3 h-3 rounded-full bg-muted-foreground/60"></div>
            </div>
            <div className="text-xs font-mono text-muted-foreground/70">example.js</div>
          </div>
          <pre className="p-4 overflow-x-auto">
            <code className="text-sm font-mono">
              <span className="text-code-keyword">import</span> <span className="text-code-foreground">&#123; data &#125;</span> <span className="text-code-keyword">from</span> <span className="text-code-string">'./data.js'</span>;<br/><br/>
              <span className="text-code-comment">// Define a class to process data</span><br/>
              <span className="text-code-keyword">class</span> <span className="text-code-function">DataProcessor</span> <span className="text-code-foreground">&#123;</span><br/>
              {'  '}<span className="text-code-keyword">constructor</span><span className="text-code-foreground">(data) &#123;</span><br/>
              {'    '}<span className="text-code-keyword">this</span><span className="text-code-foreground">.data = data;</span><br/>
              {'  '}<span className="text-code-foreground">&#125;</span><br/><br/>
              {'  '}<span className="text-code-function">process</span><span className="text-code-foreground">() &#123;</span><br/>
              {'    '}<span className="text-code-keyword">return</span> <span className="text-code-keyword">this</span><span className="text-code-foreground">.data.map(item =&gt; &#123;</span><br/>
              {'      '}<span className="text-code-keyword">return</span> <span className="text-code-foreground">&#123;</span><br/>
              {'        '}id: <span className="text-code-foreground">item.id,</span><br/>
              {'        '}value: <span className="text-code-foreground">item.value * </span><span className="text-code-number">2</span><span className="text-code-foreground">,</span><br/>
              {'        '}processed: <span className="text-code-keyword">true</span><br/>
              {'      '}<span className="text-code-foreground">&#125;;</span><br/>
              {'    '}<span className="text-code-foreground">&#125;);</span><br/>
              {'  '}<span className="text-code-foreground">&#125;</span><br/>
              <span className="text-code-foreground">&#125;</span><br/><br/>
              <span className="text-code-keyword">const</span> <span className="text-code-foreground">processor = </span><span className="text-code-keyword">new</span> <span className="text-code-function">DataProcessor</span><span className="text-code-foreground">(data);</span><br/>
              <span className="text-code-keyword">const</span> <span className="text-code-foreground">result = processor.process();</span><br/>
              <span className="text-code-function">console</span><span className="text-code-foreground">.log(result);</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
