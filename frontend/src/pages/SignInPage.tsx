import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '../components/auth/AuthHeader';
import SignInForm from '../components/auth/SignInForm';
import { useAuth } from '../contexts/AuthContext';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (formData: any) => {
    try {
      setError(null);
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center py-12 px-4">
      <div className="max-w-[480px] w-full">
        {/* Logo */}
        <AuthHeader />

        {/* Sign In Card */}
        <div className="bg-white border border-[#E6E0DA] rounded-2xl p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-playfair font-bold text-3xl text-[#221410] mb-2">
              Welcome Back
            </h1>
            <p className="font-inter font-extralight text-sm text-[#4B5563]">
              Sign in to access your account
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="font-inter text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Form */}
          <SignInForm onSubmit={handleSignIn} />

          {/* Sign Up Link */}
          <p className="text-center font-inter font-extralight text-sm text-[#64748B] mt-6">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-semibold text-[#1B3A5C] hover:text-[#C05621] transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-inter font-medium text-sm text-[#64748B] hover:text-[#1B3A5C] transition-colors"
          >
            <span className="material-icons text-base">arrow_back</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;