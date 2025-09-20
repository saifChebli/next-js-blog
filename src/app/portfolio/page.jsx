// "use client"

import React from 'react'
import { projects } from '@/data/projects'
import Card from '../../components/Card'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

const Portfolio = () => {

      // const router = useRouter()
  return (
    <div className='min-h-screen py-10 max-w-2xl mx-auto '>
      <h1 className='text-3xl font-bold mb-6'>Portfolio</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
          projects.map(project => (
            <Link key={project.id} href={`/portfolio/${project.slug}`}>
              <Card title={project.title} description={project.description} />
            </Link>
          ))
        }
      </div>
      {/* <button onClick={() => router.push("/")}>
        Go Home
      </button> */}
    </div>
  )
}

export default Portfolio