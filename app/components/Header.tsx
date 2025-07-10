"use client";
import Link from 'next/link';
import React from 'react';
import { useCart } from '../CartContext';
import { useWishlist } from '../WishlistContext';
import { useSession, signOut } from 'next-auth/react'; // Import useSession and signOut

export default function Header() {
  const { cart } = useCart() || { cart: [] };
  const { wishlist } = useWishlist() || { wishlist: [] };
  const { data: session, status } = useSession(); // Get session data and status

  const cartCount = cart?.length || 0;
  const wishlistCount = wishlist?.length || 0;

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <Link href="/" className="site-logo">
            The Chai Chronicles
          </Link>
          <nav className="site-nav">
            <ul className="nav-list">
              <li>
                <Link href="/our-story" className="nav-link">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              {/* Conditionally render auth links based on status */}
              {status === 'loading' ? null : ( // Render null while loading
                status === 'authenticated' ? (
                  <> {/* Render these if authenticated */}
                    <li>
                      {/* Optional: Display user's name */}
                      <span className="nav-link">Welcome, {session.user?.name || session.user?.email}!</span>
                    </li>
                    <li>
                      <button onClick={() => signOut()} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                          Sign Out
                        </button>
                      </li>
                    </>
                  ) : (
                    <> {/* Render these if not authenticated */}
                      <li>
                        <Link href="/auth/signin" className="nav-link">
                          Sign In
                        </Link>
                      </li>
                      <li>
                        <Link href="/auth/signup" className="nav-link">
                          Sign Up
                        </Link>
                      </li>
                    </>
                  )
              )}
              <li>
                <Link href="/cart" className="nav-link">
                  Cart
                  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="nav-link">
                  Wishlist
                  {wishlistCount > 0 && <span className="wishlist-count">{wishlistCount}</span>}\
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
