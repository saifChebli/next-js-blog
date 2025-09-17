import React from 'react'
import { posts } from '@/data/posts'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className='min-h-screen py-10 max-w-2xl mx-auto '>
      <h1 className='text-3xl font-bold mb-10'>Blog</h1>
      <ul className='space-y-4'>
        {
          posts.map(post => (
            <li key={post.id}>
              <Link className='text-blue-600 hover:underline' href={`/blog/${post.id}`}>{post.title}</Link>
              <p>{post.content}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Blog