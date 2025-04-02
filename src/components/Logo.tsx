
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link to="/" className="flex items-center gap-2 font-bold">
      <BookOpen className="text-edu-blue-600" size={size === 'sm' ? 24 : size === 'md' ? 28 : 32} />
      <span className={`${sizeClasses[size]} text-edu-blue-800`}>EduLearn</span>
    </Link>
  );
};

export default Logo;
