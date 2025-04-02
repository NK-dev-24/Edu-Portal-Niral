
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Users, Shield, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-edu-gray-600 hover:text-edu-gray-900 text-sm font-medium">
              Sign in
            </Link>
            <Link 
              to="/signup" 
              className="bg-edu-blue-600 text-white px-4 py-2 rounded-md hover:bg-edu-blue-700 transition-colors text-sm font-medium"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-edu-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-edu-gray-900 mb-6">
              Expand Your Knowledge with EduLearn
            </h1>
            <p className="text-xl text-edu-gray-600 mb-8 max-w-2xl mx-auto">
              Access thousands of courses from expert instructors around the world. 
              Learn at your own pace and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup" 
                className="bg-edu-blue-600 text-white px-6 py-3 rounded-md hover:bg-edu-blue-700 transition-colors text-base font-medium"
              >
                Sign up for free
              </Link>
              <Link 
                to="/login" 
                className="bg-white text-edu-blue-600 px-6 py-3 rounded-md border border-edu-blue-600 hover:bg-edu-blue-50 transition-colors text-base font-medium"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-edu-gray-900 mb-12">
            For Everyone
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-edu-blue-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="text-edu-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-edu-gray-900">Students</h3>
              <p className="text-edu-gray-600 mb-4">
                Access a wide variety of courses, track your progress, and earn certifications to advance your career.
              </p>
              <Link to="/signup" className="flex items-center text-edu-blue-600 font-medium">
                Get started <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-edu-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-edu-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-edu-gray-900">Instructors</h3>
              <p className="text-edu-gray-600 mb-4">
                Create engaging courses, reach students worldwide, and grow your teaching business on our platform.
              </p>
              <Link to="/signup" className="flex items-center text-edu-blue-600 font-medium">
                Become an instructor <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-edu-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-edu-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-edu-gray-900">Administrators</h3>
              <p className="text-edu-gray-600 mb-4">
                Manage the platform, oversee users, and ensure a smooth learning experience for everyone.
              </p>
              <Link to="/signup" className="flex items-center text-edu-blue-600 font-medium">
                Admin access <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-edu-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
          <p className="text-edu-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning on our platform.
            Start your journey today!
          </p>
          <Link 
            to="/signup" 
            className="bg-white text-edu-blue-800 px-6 py-3 rounded-md hover:bg-edu-blue-50 transition-colors text-base font-medium inline-block"
          >
            Create an account
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-edu-gray-800 text-edu-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">EduLearn</h3>
              <p className="text-sm">
                The leading platform for online education and learning.
              </p>
            </div>
            
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Subscribe</h4>
              <p className="text-sm mb-4">Get the latest news and updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  className="bg-edu-gray-700 text-white px-3 py-2 rounded-l-md w-full text-sm focus:outline-none focus:ring-1 focus:ring-edu-blue-400"
                  placeholder="Email address"
                />
                <button className="bg-edu-blue-600 px-3 py-2 rounded-r-md text-white text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-edu-gray-700 mt-12 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
