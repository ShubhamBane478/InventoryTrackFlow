import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { Logo } from '../components/Logo';
import { BackgroundGradient } from '../components/ui/aceternity/background-gradient';
import { MovingBorder } from '../components/ui/aceternity/moving-border';

interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}

const MOCK_CREDENTIALS = {
  email: 'demo@example.com',
  password: 'demo1234'
};

export function Auth({ mode }: { mode: 'login' | 'signup' }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AuthFormData>({
    email: mode === 'login' ? MOCK_CREDENTIALS.email : '',
    password: mode === 'login' ? MOCK_CREDENTIALS.password : '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (mode === 'login' && 
        formData.email === MOCK_CREDENTIALS.email && 
        formData.password === MOCK_CREDENTIALS.password) {
      navigate('/dashboard');
    } else if (mode === 'signup') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials! Use the demo account.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex items-center text-blue-400 mb-8 hover:text-blue-300 justify-center">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to home
        </Link>
        
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        <BackgroundGradient className="py-8 px-4 sm:px-10">
          <div className="text-center mb-8">
            <MovingBorder>
              {mode === 'login' ? (
                <LogIn className="mx-auto h-12 w-12 text-blue-400" />
              ) : (
                <UserPlus className="mx-auto h-12 w-12 text-blue-400" />
              )}
            </MovingBorder>
            <h2 className="mt-6 text-3xl font-bold text-white">
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              {mode === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-blue-400 hover:text-blue-300">
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-400 hover:text-blue-300">
                    Sign in
                  </Link>
                </>
              )}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <Input
                label="Full Name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-gray-800 text-white border-gray-700"
              />
            )}
            <Input
              label="Email address"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="bg-gray-800 text-white border-gray-700"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-gray-800 text-white border-gray-700"
            />
            
            <Button type="submit" variant="primary" className="w-full">
              {mode === 'login' ? 'Sign in' : 'Create account'}
            </Button>
          </form>

          {mode === 'login' && (
            <div className="mt-6">
              <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot your password?
              </Link>
            </div>
          )}
        </BackgroundGradient>

        {mode === 'login' && (
          <div className="mt-4 text-center text-sm text-gray-400">
            <p>Demo credentials are pre-filled</p>
            <p>Email: {MOCK_CREDENTIALS.email}</p>
            <p>Password: {MOCK_CREDENTIALS.password}</p>
          </div>
        )}
      </div>
    </div>
  );
}