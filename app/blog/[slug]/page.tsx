"use client";
import React from 'react';
import { blogPosts, BlogPost } from '../blog-data';
import { useParams } from 'next/navigation';


export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug || '';

  const post: BlogPost | undefined = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div className="container"><h1>Post not found</h1></div>;
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <h1 className="page-title">{post.title}</h1>
        <p>Author: {post.author}</p>
        <p>Date: {post.date}</p>
        <img src={post.image} alt={post.title} className="blog-post-image"/>
        <p>{post.content}</p>
      </div>
    </div>
  );
}