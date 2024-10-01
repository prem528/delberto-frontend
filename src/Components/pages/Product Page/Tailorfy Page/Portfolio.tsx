import  { useState } from 'react'
import project from '../../../../assets/img/projects_1.png'
import project1 from '../../../../assets/img/projects_3.png'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [animateKey, setAnimateKey] = useState(0)

  const filters = ['all', 'portfolio', 'business showcase', 'online store', 'blog', 'other']
  const projects = [
    { id: 1, title: 'Project 1', category: 'portfolio', image: project },
    { id: 2, title: 'Project 2', category: 'business showcase', image: project1 },
    { id: 3, title: 'Project 3', category: 'online store', image: project },
    { id: 4, title: 'Project 4', category: 'blog', image: project1 },
    { id: 5, title: 'Project 5', category: 'other', image: project },
    { id: 6, title: 'Project 6', category: 'business showcase', image: project },
    { id: 7, title: 'Project 7', category: 'portfolio', image: project1 },
    { id: 8, title: 'Project 8', category: 'portfolio', image: project1 },
    { id: 9, title: 'Project 9', category: 'portfolio', image: project },
    { id: 10, title: 'Project 10', category: 'portfolio', image: project1 },
    { id: 11, title: 'Project 11', category: 'portfolio', image: project },
    { id: 12, title: 'Project 12', category: 'portfolio', image: project },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setAnimateKey(prev => prev + 1)
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 sm:mb-10 text-center">Choose a Website Template That Inspires You</h2>
        <p className="text-center text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
          Take advantage of 150 responsive, Designer-made templates, suitable for businesses, eCommerce stores, portfolios, landing pages, and blogs.
        </p>
        <div className="flex flex-wrap justify-center mb-8 sm:mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              className={`
                mx-2 px-4 py-2 rounded-lg mb-2
                transition-all duration-300 ease-in-out
                transform hover:scale-105 text-sm sm:text-lg font-semibold
                ${activeFilter === filter 
                  ? 'bg-[#3281bd] text-white  shadow-lg scale-105' 
                  : 'bg-white text-black '
                }
              `}
              onClick={() => handleFilterChange(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProjects.map(project => (
            <div key={`${project.id}-${animateKey}`} className="animate-scaleIn bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:bg-blue-100 hover:shadow-blue-200 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
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