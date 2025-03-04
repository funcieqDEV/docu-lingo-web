
import React, { useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onClose: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input when the search bar appears
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Add escape key handler
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-5 w-5 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search documentation..."
          className="w-full bg-muted/50 border-0 pl-10 pr-10 py-3 rounded-md focus:ring-2 focus:ring-primary/20 focus:outline-none"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1"
          onClick={onClose}
          aria-label="Close search"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute right-12 top-3 flex items-center space-x-2 text-xs text-muted-foreground">
        <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded-md">ESC</kbd>
        <span>to close</span>
      </div>
    </div>
  );
}
