import React, { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Phone, Lock, Chrome } from 'lucide-react';
import Button from '@/components/ui/button';

const Signin = () => {
  const [loginMethod, setLoginMethod] = useState('email');
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setError('');

    // Basic validation
    if (!formData.emailOrPhone) {
      setError(
        `Please enter your ${
          loginMethod === 'email' ? 'email' : 'phone number'
        }`
      );
      return;
    }
    if (loginMethod === 'email' && !formData.emailOrPhone.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (
      loginMethod === 'phone' &&
      !/^\+?\d{10,}$/.test(formData.emailOrPhone)
    ) {
      setError('Please enter a valid phone number');
      return;
    }
    if (!formData.password || formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    setError('');
    setIsLoading(true);

    try {
      // Simulate Google sign-in API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Google sign-in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    window.location.href = '/forgot-password';
    console.log('Navigating to /forgot-password');
  };

  const handleBackToHome = () => {
    window.location.href = '/';
    console.log('Navigating to home');
  };

  const handleSignup = () => {
    window.location.href = '/signup';
    console.log('Navigating to /signup');
  };

  return (
    <div className='min-h-screen flex bg-gray-50 lg:bg-white'>
      {/* Left Sidebar - Hidden on mobile, fixed height */}
      <div className='hidden lg:flex lg:w-1/3 bg-gray-50 p-8 flex-col h-screen'>
        {/* Logo */}
        <div className='flex items-center mb-12'>
          <div className='w-8 ml-2 h-8 bg-blue-600 rounded flex items-center justify-center mr-3'>
            <div className='w-4 h-4 bg-white transform rotate-45'></div>
          </div>
          <span className='text-xl font-semibold'>Shoptinz</span>
        </div>

        {/* Welcome Message */}
        <div className='flex-1 flex flex-col justify-center'>
          <h2 className='text-3xl font-semibold text-gray-900 mb-4'>
            Welcome to Shoptinz!
          </h2>
          <p className='text-gray-600 text-base'>
            Sign in to access your affiliate dashboard and start exploring
            opportunities with Shoptinz.
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className='flex justify-between items-center pt-8 border-t border-gray-200'>
          <button
            onClick={handleBackToHome}
            className='flex items-center text-gray-600 hover:text-blue-800 transition-colors cursor-pointer'
          >
            <svg
              className='w-4 h-4 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
            Back to home
          </button>
          <button
            onClick={handleSignup}
            className='text-gray-600 hover:text-blue-800 transition-colors cursor-pointer'
          >
            Sign up
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className='flex-1 bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center min-h-screen'>
        <div className='max-w-md mx-auto w-full'>
          {/* Mobile Logo */}
          <div className='lg:hidden flex items-center justify-center mb-8'>
            <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3'>
              <div className='w-4 h-4 bg-white transform rotate-45'></div>
            </div>
            <span className='text-xl font-semibold'>Shoptinz</span>
          </div>

          {/* Error Message */}
          {error && (
            <div className='bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-6'>
              {error}
            </div>
          )}

          {/* Sign-in Form */}
          <div className='text-center mb-8'>
            <h1 className='text-2xl sm:text-3xl font-semibold text-gray-900 mb-2'>
              Sign in to Shoptinz
            </h1>
            <p className='text-gray-600 text-sm sm:text-base'>
              Access your account with your email, phone number, or Google.
            </p>
          </div>

          <div className='space-y-6'>
            {/* Email/Phone Tabs */}
            <div className='flex border border-gray-300 rounded-lg overflow-hidden'>
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-3 text-sm font-medium transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                  loginMethod === 'email'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Mail className='w-4 h-4' />
                Email
              </button>
              <button
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-3 text-sm font-medium transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                  loginMethod === 'phone'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Phone className='w-4 h-4' />
                Phone
              </button>
            </div>

            {/* Form Inputs */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                {loginMethod === 'email' ? 'Email' : 'Phone Number'}*
              </label>
              <div className='relative'>
                {loginMethod === 'email' ? (
                  <Mail className='absolute left-3 top-3.5 w-5 h-5 text-gray-400' />
                ) : (
                  <Phone className='absolute left-3 top-3.5 w-5 h-5 text-gray-400' />
                )}
                <input
                  type={loginMethod === 'email' ? 'email' : 'tel'}
                  value={formData.emailOrPhone}
                  onChange={(e) =>
                    handleInputChange('emailOrPhone', e.target.value)
                  }
                  placeholder={
                    loginMethod === 'email'
                      ? 'Enter your email'
                      : 'Enter your phone number'
                  }
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Password*
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-3.5 w-5 h-5 text-gray-400' />
                <input
                  type='password'
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange('password', e.target.value)
                  }
                  placeholder='Enter your password'
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base'
                />
              </div>
            </div>

            <div className='text-right'>
              <button
                onClick={handleForgotPassword}
                className='text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer'
              >
                Forgot password?
              </button>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              variant='primary'
              className='w-full'
              size='md'
            >
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>

            <div className='relative my-6'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-gray-500'>
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Sign-in Button */}
            <Button
              variant='tertiary'
              onClick={handleGoogleSignin}
              disabled={isLoading}
              leftIcon={<Chrome className='w-5 h-5' />}
              className='w-full'
            >
              Sign in with Google
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className='mt-6 flex justify-center space-x-6 text-sm lg:hidden'>
            <button
              onClick={handleBackToHome}
              className='text-gray-600 hover:text-blue-800 transition-colors cursor-pointer'
            >
              Back to home
            </button>
            <span className='text-gray-300'>|</span>
            <button
              onClick={handleSignup}
              className='text-gray-600 hover:text-blue-800 transition-colors cursor-pointer'
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
