import React from 'react'
import { projects } from '@/data/projects'
import Card from '../../components/Card'

const Portfolio = () => {
  return (
    <div className='min-h-screen py-10 max-w-2xl mx-auto '>
      <h1 className='text-3xl font-bold mb-6'>Portfolio</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {
          projects.map(project => (
            <Card key={project.id} title={project.title} description={project.description} />
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio