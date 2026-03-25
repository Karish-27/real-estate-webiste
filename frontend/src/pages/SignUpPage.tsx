import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '../components/auth/AuthHeader';
import SignUpForm from '../components/auth/SignUpForm';
import { useAuth } from '../contexts/AuthContext';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (formData: any) => {
    try {
      setError(null);
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      await register(fullName, formData.email, '', formData.password);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center py-12 px-4">
      <div className="max-w-[520px] w-full">
        {/* Logo */}
        <AuthHeader />

        {/* Sign Up Card */}
        <div className="bg-white border border-[#E6E0DA] rounded-2xl p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-playfair font-bold text-3xl text-[#221410] mb-2">
              Create Account
            </h1>
            <p className="font-inter font-extralight text-sm text-[#4B5563]">
              Join NestPrime and find your dream home
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="font-inter text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Form */}
          <SignUpForm onSubmit={handleSignUp} />

          {/* Sign In Link */}
          <p className="text-center font-inter font-extralight text-sm text-[#64748B]">
            Already have an account?{' '}
            <Link
              to="/signin"
              className="font-semibold text-[#1B3A5C] hover:text-[#C05621] transition-colors"
            >
              Sign In
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

export default SignUpPage;