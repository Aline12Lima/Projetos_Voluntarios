import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  bg?: 'white' | 'gray' | 'dark';
}

export const Section = ({ id, className = '', title, subtitle, children, bg = 'white' }: SectionProps) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-secondary text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12 max-w-2xl mx-auto">
            {subtitle && <span className="text-primary font-bold tracking-wider uppercase text-sm">{subtitle}</span>}
            {title && <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${bg === 'dark' ? 'text-white' : 'text-secondary'}`}>{title}</h2>}
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};