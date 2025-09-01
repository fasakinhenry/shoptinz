import { useState } from 'react';
import { Link } from 'react-router';
import Button from '@/components/ui/button';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    verificationCode: ['', '', '', ''],
    referralCode: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateStep = (step) => {
    setError('');

    switch (step) {
      case 1:
        if (!formData.email || !formData.email.includes('@')) {
          setError('Please enter a valid email address');
          return false;
        }
        if (!formData.password || formData.password.length < 6) {
          setError('Password must be at least 6 characters long');
          return false;
        }
        return true;
      case 2:
        const code = formData.verificationCode.join('');
        if (code.length !== 4) {
          setError('Please enter the complete verification code');
          return false;
        }
        return true;
      case 3:
        // Referral code is optional, so no validation required
        return true;
      default:
        return true;
    }
  };

  const handleNext = async () => {
    if (!validateStep(currentStep)) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setError('');
    }
  };

  const handleSignIn = () => {
    // Navigate to login route
    window.location.href = '/login';
    console.log('Navigating to /login');
  };

  const handleBackToHome = () => {
    // Navigate to home route
    window.location.href = '/';
    console.log('Navigating to home');
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password route
    window.location.href = '/forgot-password';
    console.log('Navigating to /forgot-password');
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleVerificationCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...formData.verificationCode];
      newCode[index] = value;
      setFormData((prev) => ({
        ...prev,
        verificationCode: newCode,
      }));

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const steps = [
    {
      id: 1,
      title: 'Your details',
      description: 'Provide an email and password',
      icon: (
        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
          <path
            fillRule='evenodd'
            d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Verify your email',
      description: 'Enter your verification code',
      icon: (
        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
          <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Enter referral code',
      description: 'Add the code from your inviter (optional)',
      icon: (
        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z' />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Welcome to Shoptinz!',
      description: 'Get up and running in 3 minutes',
      icon: (
        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className='text-center mb-8'>
              <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6'>
                <div className='w-6 h-6 bg-white transform rotate-45 rounded-sm'></div>
              </div>
              <h1 className='text-2xl sm:text-3xl font-semibold text-gray-900 mb-2'>
                Create a free account
              </h1>
              <p className='text-gray-600 text-sm sm:text-base'>
                Provide your email and choose a password.
              </p>
            </div>

            <div className='space-y-4 sm:space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Email*
                </label>
                <input
                  type='email'
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder='Enter your email'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Password*
                </label>
                <input
                  type='password'
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange('password', e.target.value)
                  }
                  placeholder='Choose a password'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base'
                />
              </div>

              <div className='text-right'>
                <button
                  onClick={handleForgotPassword}
                  className='text-sm text-blue-600 hover:text-blue-800 font-medium'
                >
                  Forgot password?
                </button>
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className='text-center mb-8'>
              <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
              </div>
              <h1 className='text-2xl sm:text-3xl font-semibold text-gray-900 mb-2'>
                Verify your email
              </h1>
              <p className='text-gray-600 text-sm sm:text-base'>
                We sent a code to {formData.email}
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex justify-center space-x-3'>
                {formData.verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type='text'
                    maxLength='1'
                    value={digit}
                    onChange={(e) =>
                      handleVerificationCodeChange(index, e.target.value)
                    }
                    className='w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors'
                  />
                ))}
              </div>

              <div className='text-center'>
                <p className='text-sm text-gray-600'>
                  Didn't get a code?{' '}
                  <button className='text-blue-600 hover:text-blue-800 font-medium'>
                    Click to resend
                  </button>
                </p>
              </div>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className='text-center mb-8'>
              <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z' />
                </svg>
              </div>
              <h1 className='text-2xl sm:text-3xl font-semibold text-gray-900 mb-2'>
                Enter referral code
              </h1>
              <p className='text-gray-600 text-sm sm:text-base'>
                Add the code from your inviter (optional).
              </p>
            </div>

            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Referral Code
                </label>
                <input
                  type='text'
                  value={formData.referralCode}
                  onChange={(e) =>
                    handleInputChange('referralCode', e.target.value)
                  }
                  placeholder='Enter referral code (optional)'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-sm sm:text-base'
                />
              </div>

              <div className='text-center mt-6'>
                <button
                  onClick={() => setCurrentStep(4)}
                  className='text-blue-600 hover:text-blue-800 font-medium text-sm'
                >
                  Skip for now
                </button>
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className='text-center mb-8'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <h1 className='text-2xl sm:text-3xl font-semibold text-gray-900 mb-2'>
                Welcome to Shoptinz!
              </h1>
              <p className='text-gray-600 text-sm sm:text-base mb-8'>
                Your account has been created successfully. Get up and running
                in 3 minutes.
              </p>

              <div className='space-y-4'>
                <Link to='/dashboard' className='w-full block'>
                  <Button variant='primary' className='w-full'>
                    Get Started
                  </Button>
                </Link>

                <div className='flex items-center space-x-4 text-sm text-gray-600'>
                  <div className='flex items-center'>
                    <svg
                      className='w-4 h-4 mr-1 text-blue-600'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Account verified
                  </div>
                  <div className='flex items-center'>
                    <svg
                      className='w-4 h-4 mr-1 text-blue-600'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Referral code added
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen flex overflow-hidden bg-gray-50 lg:bg-white'>
      {/* Left Sidebar - Hidden on mobile */}
      <div className='hidden lg:flex lg:w-1/3 bg-gray-50 p-8 flex-col relative'>
        {/* Logo */}
        <div className='flex items-center mb-12'>
          <div className='w-8 ml-2 h-8 bg-blue-600 rounded flex items-center justify-center mr-3'>
            <div className='w-4 h-4 bg-white transform rotate-45'></div>
          </div>
          <span className='text-xl font-semibold'>Shoptinz</span>
        </div>

        {/* Steps with Timeline */}
        <div className='flex-1 relative'>
          {/* Vertical Line */}
          <div className='absolute left-8 top-8 bottom-8 w-px bg-gray-300'></div>

          {/* Steps */}
          <div className='space-y-8 relative'>
            {steps.map((step, index) => (
              <div key={step.id} className='flex items-center relative'>
                {/* Step Icon Container */}
                <div
                  className={`relative z-10 ml-2 w-12 h-10 rounded-lg flex items-center justify-center mr-4 transition-all duration-200 ${
                    currentStep >= step.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white border-2 border-gray-300 text-gray-400'
                  }`}
                >
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className='flex-1 pt-2'>
                  <h3
                    className={`font-medium ${
                      currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      currentStep >= step.id ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className='flex justify-between items-center pt-8 border-t border-gray-200'>
          <button
            onClick={handleBackToHome}
            className='flex items-center text-gray-600 hover:text-blue-800 transition-colors'
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
            onClick={handleSignIn}
            className='text-gray-600 hover:text-blue-800 transition-colors'
          >
            Sign in
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className='flex-1 bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center min-h-screen relative'>
        {/* Top Right Back Button */}
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className='absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center text-gray-600 hover:text-blue-800 transition-colors text-sm font-medium'
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
            Back
          </button>
        )}

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

          {/* Step Content */}
          {renderStepContent()}

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className='mt-8'>
              <Button
                onClick={handleNext}
                disabled={isLoading}
                variant='primary'
                className='w-full'
              >
                {isLoading ? 'Loading...' : 'Continue'}
              </Button>
            </div>
          )}

          {/* Progress Bar - Main Form */}
          <div className='mt-8'>
            <div className='flex space-x-2'>
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex-1 h-2 rounded-full transition-colors duration-300 ${
                    currentStep >= step ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className='mt-6 flex justify-center space-x-6 text-sm lg:hidden'>
            <button
              onClick={handleBackToHome}
              className='text-gray-600 hover:text-blue-800 transition-colors'
            >
              Back to home
            </button>
            <span className='text-gray-300'>|</span>
            <button
              onClick={handleSignIn}
              className='text-gray-600 hover:text-blue-800 transition-colors'
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
