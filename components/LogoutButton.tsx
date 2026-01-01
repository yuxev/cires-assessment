'use client';

import { useActionState } from 'react';
import { logoutAction } from '@/app/actions/auth';

export default function LogoutButton() {
  const [, dispatch] = useActionState(logoutAction, undefined);
  
  return (
    <form action={dispatch}>
      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
        Logout
      </button>
    </form>
  );
}