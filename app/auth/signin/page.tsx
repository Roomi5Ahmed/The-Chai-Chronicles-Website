// c:\WebDev\Claude-Code\tcc-void\app\auth\signin\page.tsx
"use client";
import React from 'react';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Import Link


const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // State to hold error message
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push('/'); // Redirect to home page on successful login
    } else {
      // Handle errors, e.g., display an error message
      setError(result?.error || 'An unexpected error occurred'); // Set the error state
      console.error('Sign-in failed:', result?.error);
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
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
                autoComplete="current-password"
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
              Sign In
            </button>
          </div>
        </form>

        {/* Optional: Add a link to the sign-up page */}
        <div className="signin-link">
          <p>
            Not a member? <Link href="/auth/signup">Sign up</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignInPage;
