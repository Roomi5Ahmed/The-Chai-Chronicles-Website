// c:\WebDev\Claude-Code\tcc-void\app\auth\signup\page.tsx
"use client";
import React from 'react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Import Link

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      // Handle successful registration, maybe redirect to login
      router.push('/auth/signin');
    } else {
      // Handle errors (e.g., user already exists, validation errors)
      const errorData = await response.json();
      console.error('Registration failed:', errorData.message);
      // Display error message to the user
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            {/* Optional: Add remember me checkbox or forgot password link here */}
          </div>

          <div>
            <button type="submit">
              Sign Up
            </button>
          </div>
        </form>

        {/* Optional: Add a link to the sign-in page */}
        <div className="signin-link">
          <p>
            Already a member? <Link href="/auth/signin">Sign in</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;
