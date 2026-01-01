'use client';

import { loginAction } from '@/app/actions/auth';
import { useActionState } from 'react';

export default function LoginForm() {

  const [state , dispatch] = useActionState(loginAction, undefined);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back</h1>
        <p className="text-gray-500">Welcome back! Please enter your details.</p>
      </div>

      {/* Form */}
      <form action={dispatch} className="flex flex-col gap-5">
        {/* Error Message */}
        {state?.message && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
            {state.message}
          </div>
        )}
        
        {/* username Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-sm font-medium text-gray-700">
            Username
          </label>
          <input 
            name="username" 
            type="username"
            required 
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition" 
            placeholder="Enter your username"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input 
            name="password" 
            type="password" 
            required 
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition" 
            placeholder="••••••••"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-600 focus:ring-slate-500" />
            <span className="text-gray-600">Remember for 30 days</span>
          </label>
          <a href="" className="text-slate-600 font-medium hover:text-slate-700">
            Forgot password
          </a>
        </div>

        {/* Sign In Button */}
        <button 
          type="submit" 
          className="w-full bg-slate-800 text-white py-3 rounded-lg font-medium hover:bg-slate-900 transition shadow-sm"
        >
          Sign in
        </button>

        {/* Google Sign In */}
        <button 
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="" className="font-medium text-slate-700 hover:text-slate-900">
            Sign up for free
          </a>
        </p>
      </form>
    </div>
  );
}