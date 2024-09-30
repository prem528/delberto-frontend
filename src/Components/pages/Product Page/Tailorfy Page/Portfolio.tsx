import React from 'react'
import { useState } from 'react'

const Portfolio:React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all')

  const filters = ['all', 'portfolio', 'business', 'store', 'blog', 'other']
  const projects = [
    { id: 1, title: 'Project 1', category: 'portfolio', image: '/placeholder.svg?height=300&width=400' },
    { id: 2, title: 'Project 2', category: 'business', image: '/placeholder.svg?height=300&width=400' },
    { id: 3, title: 'Project 3', category: 'store', image: '/placeholder.svg?height=300&width=400' },
    { id: 4, title: 'Project 4', category: 'blog', image: '/placeholder.svg?height=300&width=400' },
    { id: 5, title: 'Project 5', category: 'other', image: '/placeholder.svg?height=300&width=400' },
    { id: 6, title: 'Project 6', category: 'portfolio', image: '/placeholder.svg?height=300&width=400' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)
  return (
    <section className="py-20">
      <div className="container mx-auto px-24">
        <h2 className="text-4xl font-bold text-blue-900 mb-10 text-center">Choose a Website Template That Inspires You</h2>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          Take advantage of 150 responsive, Designer-made templates, suitable for businesses, eCommerce stores, portfolios, landing pages, and blogs.
        </p>
        <div className="flex justify-center mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              className={`mx-2 px-4 py-2 rounded-lg ${activeFilter === filter ? 'bg-[#3281bd] text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">Category: {project.category}</p>
                <a href={`/project/${project.id}`} className="text-blue-600 hover:underline">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
