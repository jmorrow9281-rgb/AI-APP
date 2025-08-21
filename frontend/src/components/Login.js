import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const Login = () => {
  const { user, login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await login(email, password);
    if (!result.success) {
      setError(result.error);
    }
    setIsLoading(false);
  };

  const handleProviderLogin = async (provider) => {
    setIsLoading(true);
    setError('');

    const result = await login('user@example.com', '', provider);
    if (!result.success) {
      setError(result.error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-black rounded-full transform rotate-12"></div>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold mb-2">Welcome to JulioMakk</h1>
            <p className="text-gray-400">
              Don't have an account?{' '}
              <a href="#" className="text-cyan-400 hover:underline">
                Sign up for free
              </a>
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-8">
            <Button
              variant="outline"
              className="w-full bg-transparent border-gray-700 text-white hover:bg-gray-900 h-12"
              onClick={() => handleProviderLogin('Google')}
              disabled={isLoading}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-red-500"></div>
                <span>Continue with Google</span>
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-full bg-transparent border-gray-700 text-white hover:bg-gray-900 h-12"
              onClick={() => handleProviderLogin('GitHub')}
              disabled={isLoading}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-gray-800"></div>
                <span>Continue with Github</span>
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-full bg-transparent border-gray-700 text-white hover:bg-gray-900 h-12"
              onClick={() => handleProviderLogin('Apple')}
              disabled={isLoading}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-white"></div>
                <span>Continue with Apple</span>
              </div>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-400">Or Log in with email</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-gray-700 text-white placeholder-gray-500 h-12"
                required
              />
            </div>
            
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-gray-700 text-white placeholder-gray-500 h-12 pr-12"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 h-12 font-medium"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </Button>
          </form>

          {/* Forgot Password */}
          <div className="text-center mt-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Forgot Password ?
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Showcase */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute top-8 right-8 text-right">
          <h2 className="text-xl font-semibold mb-1">Build Ambitious App</h2>
          <h2 className="text-xl font-semibold">With AI</h2>
        </div>

        {/* Mock App Screenshots */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 transform rotate-12 scale-75">
            <Card className="w-48 h-32 bg-gradient-to-br from-purple-600 to-blue-600 border-none"></Card>
            <Card className="w-48 h-32 bg-gradient-to-br from-green-500 to-teal-500 border-none"></Card>
            <Card className="w-48 h-32 bg-gradient-to-br from-orange-500 to-red-500 border-none"></Card>
            <Card className="w-48 h-32 bg-gradient-to-br from-pink-500 to-purple-500 border-none"></Card>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-8 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;