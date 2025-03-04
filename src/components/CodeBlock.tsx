
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeBlock({ 
  code, 
  language, 
  filename, 
  showLineNumbers = true,
  className 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // Split code by new lines to enable line numbering
  const codeLines = code.split('\n');

  return (
    <div className={cn("relative overflow-hidden rounded-lg border border-border bg-code-background shadow-sm", className)}>
      {/* Header bar with language and copy button */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-muted">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-muted-foreground/60"></div>
            <div className="w-3 h-3 rounded-full bg-muted-foreground/60"></div>
          </div>
          {filename && (
            <div className="text-xs font-mono text-muted-foreground/70 ml-2">{filename}</div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xs font-mono text-muted-foreground/70">{language}</div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={copyToClipboard}
            className="h-8 w-8 p-0"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Code content */}
      <div className="relative overflow-x-auto">
        <pre className="p-4 text-sm font-mono">
          <code>
            {showLineNumbers ? (
              <table className="border-collapse">
                <tbody>
                  {codeLines.map((line, index) => (
                    <tr key={index} className="leading-relaxed">
                      <td className="text-muted-foreground/40 text-right pr-4 select-none" style={{ width: '1%' }}>
                        {index + 1}
                      </td>
                      <td className="whitespace-pre">{line}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="whitespace-pre-wrap">{code}</div>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
