
import Link from 'next/link';
import React from 'react';
import { blogPosts } from './blog-data';

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="container">
        <h1 className="page-title">Chai Stories & Insights</h1>

        <section className="blog-posts-list">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-post-card">
              <h2 className="post-title"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p className="post-summary">{post.content.substring(0, 150)}...</p>
              <Link href={`/blog/${post.slug}`} className="read-more-link">Read More</Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}