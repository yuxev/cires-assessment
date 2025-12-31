'use client';

import { loginAction } from '@/app/actions/auth'
import { useActionState } from 'react';

export default function LoginForm() {

  const [state , dispatch] = useActionState(loginAction, undefined);

  return (
    // 2. Connect the form to the dispatch function
    <form action={dispatch} className="flex flex-col gap-4 max-w-sm border p-6 rounded shadow-sm">
      <h2 className="text-xl font-bold">Login</h2>

      {/* 3. Display server errors if they exist */}
      {state?.message && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {state.message}
        </div>
      )}
      
      <div className="flex flex-col gap-1">
        <label htmlFor="username" className="text-sm text-gray-600">username</label>
        <input 
          name="username" 
          type="username"
          required 
          className="border border-gray-300 p-2 rounded" 
          placeholder="username"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm text-gray-600">Password</label>
        <input 
          name="password" 
          type="password" 
          required 
          className="border border-gray-300 p-2 rounded" 
          placeholder="******"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Sign In
      </button>
    </form>
  );
}