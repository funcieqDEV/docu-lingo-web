
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DocCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  className?: string;
}

export default function DocCard({ 
  title, 
  description, 
  icon, 
  to, 
  className 
}: DocCardProps) {
  return (
    <Link 
      to={to}
      className={cn(
        "group relative flex flex-col p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:-translate-y-1",
        className
      )}
    >
      <div className="mb-4 p-3 rounded-md bg-primary/10 text-primary w-fit">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6">
        {description}
      </p>
      
      <div className="mt-auto flex items-center text-sm font-medium text-primary">
        <span>Learn more</span>
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
