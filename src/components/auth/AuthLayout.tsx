
import React from 'react';
import Logo from '../Logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  title,
  description 
}) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Brand */}
      <div className="hidden md:flex md:w-1/2 bg-edu-blue-50 p-8 flex-col justify-between">
        <div className="flex flex-col h-full justify-center items-center">
          <div className="max-w-md mx-auto">
            <Logo size="lg" />
            <h1 className="mt-8 text-3xl font-bold text-edu-gray-900">
              Expand your knowledge and skills with EduLearn
            </h1>
            <p className="mt-4 text-lg text-edu-gray-600">
              Join thousands of students and instructors in our growing community of learners.
            </p>
          </div>
          
          <div className="mt-16 flex flex-col items-center">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i}
                  className="w-16 h-16 rounded-md bg-edu-blue-100 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-auto pt-8 text-center text-sm text-edu-gray-500">
          © {new Date().getFullYear()} EduLearn. All rights reserved.
        </div>
      </div>
      
      {/* Right side - Auth Form */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="md:hidden flex justify-center mb-8">
            <Logo />
          </div>
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-edu-gray-900">{title}</h2>
            {description && (
              <p className="text-edu-gray-500">{description}</p>
            )}
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
