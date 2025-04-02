
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, User, Lock, Eye, EyeOff, Building, Briefcase } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import UserTypeSelector, { UserType } from '../components/auth/UserTypeSelector';
import { toast } from '../components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const Signup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organization: '',
    jobTitle: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Here you would implement actual signup logic
      console.log('Signup attempt with:', { userType, ...formData });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: "Account created!",
        description: "You have successfully signed up.",
      });
      
      // Redirect to login
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: "There was a problem creating your account.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      description="Join our learning platform today"
    >
      <div className="mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <UserTypeSelector 
            selectedType={userType} 
            onChange={setUserType} 
          />

          <div className="p-5 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500">Must be at least 8 characters</p>
              </div>
              
              {userType === 'instructor' && (
                <div className="mt-4 p-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Instructor Information</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Building className="w-5 h-5 text-gray-400" />
                        </div>
                        <Input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Organization or institution"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job title</Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Briefcase className="w-5 h-5 text-gray-400" />
                        </div>
                        <Input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Job title"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{' '}
              <Link to="/terms" className="text-edu-blue-600 hover:text-edu-blue-500 underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-edu-blue-600 hover:text-edu-blue-500 underline">
                Privacy Policy
              </Link>
            </Label>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-edu-blue-600 hover:bg-edu-blue-700"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Create account'}
          </Button>
          
          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-edu-blue-600 hover:text-edu-blue-500">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
