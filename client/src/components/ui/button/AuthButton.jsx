import React from 'react';

const AuthButton = () => {
  const handleSignIn = () => {
    // Add your sign in logic here
    console.log('Sign In clicked');
    alert("You have signed in succesfully")
  };

  const handleSignUp = () => {
    // Add your sign up logic here
    console.log('Sign Up clicked');
    alert("you have signed in successfully")
  };

  return (
    <div className="flex items-center gap-8">
      {/* Sign In Button */}
      <button
        onClick={handleSignIn}
        className="px-10 py-5 text-gray-700 bg-transparent border border-gray-300 rounded-md font-semibold text-lg flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        style={{ minWidth: '110px' }}
      >
        Sign in
      </button>

      {/* Sign Up Button */}
      <button
        onClick={handleSignUp}
        className="px-10 py-5 text-white bg-blue-600 rounded-md font-semibold text-lg flex items-center justify-center hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
        style={{ minWidth: '110px' }}
      >
        Sign up
      </button>
    </div>
  );
};

export default AuthButton;