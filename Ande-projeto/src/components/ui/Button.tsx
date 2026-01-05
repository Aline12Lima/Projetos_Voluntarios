// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-2 rounded-full font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-orange-600 hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};