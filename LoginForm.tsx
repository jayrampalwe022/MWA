'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    const storedUser = localStorage.getItem('smart-society-user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      login(userData);
      router.push(`/dashboard/${userData.role}`);
    } else {
      alert('No user found. Please register first.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <button onClick={handleLogin} className="bg-green-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}
