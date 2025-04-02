
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, AlertTriangle } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import { toast } from '../components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminCode, setAdminCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Here you would implement actual admin login logic
      console.log('Admin login attempt with:', { email, password, adminCode });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Admin login successful",
        description: "Welcome to the admin dashboard.",
      });
      
      // Redirect to admin dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast({
        variant: "destructive",
        title: "Admin login failed",
        description: "Invalid credentials. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Platform Administration"
      description="Secure admin access only"
    >
      <div className="mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 flex items-start gap-3 text-yellow-800">
            <div className="mt-0.5">
              <AlertTriangle size={20} className="text-yellow-600" />
            </div>
            <div>
              <h3 className="font-medium">Restricted Area</h3>
              <p className="text-sm mt-1">
                This area is only accessible to platform administrators. Unauthorized access attempts are logged and monitored.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Admin email</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder="admin@example.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Admin password</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="adminCode" className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-edu-blue-600" />
                <span>Security code</span>
              </Label>
              <Input
                type="text"
                id="adminCode"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
                placeholder="Enter admin security code"
                required
                className="border-edu-blue-200 focus-visible:ring-edu-blue-500"
              />
              <p className="text-xs text-gray-500">Required for admin authentication</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Checkbox id="remember-me" />
            <Label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
              Remember this device (secure environments only)
            </Label>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-edu-gray-800 hover:bg-edu-gray-900"
            disabled={isLoading}
          >
            {isLoading ? 'Authenticating...' : 'Authenticate as Administrator'}
          </Button>
          
          <div className="text-center text-sm text-gray-600">
            <Link to="/login" className="font-medium text-edu-blue-600 hover:text-edu-blue-500">
              Return to standard login
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default AdminLogin;
