import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Home, ShoppingBag, ChevronRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

const Projects = () => {
  const projects = [
    {
      id: 'chamundi-township',
      title: 'Chamundi Township',
      location: 'NH 212, Sujathapuram, Nanjangud, Mysore, Karnataka,India ',
      size: '45 Acres',
      plots: '479 Residential Plots',
      commercial: '10 Acres Commercial',
      status: 'Ongoing',
      image: 'home10.JPG',
      prize:'Price Per Sq.Ft ₹4,499 / ₹4,249',
      features: ['MUDA Approved', 'Kabini Water Supply', 'Wide Roads', 'Temple Nearby']
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero */}
      <section className="py-20 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <SectionTitle
            subtitle="Our Projects"
            title="Premium Developments"
            description="Creating landmark real estate projects that redefine luxury living."
          />
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-3xl overflow-hidden mb-12"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-video lg:aspect-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full text-sm">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-blue-600 flex items-center gap-2 mb-6">
                      <MapPin size={18} /> {project.location}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 bg-gray-100 rounded-xl">
                        <p className="text-gray-600 text-sm mb-1">Project Size</p>
                        <p className="text-xl font-semibold text-gray-900">{project.size}</p>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-xl">
                        <p className="text-gray-600 text-sm mb-1">Residential Plots</p>
                        <p className="text-xl font-semibold text-gray-900">{project.plots}</p>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-xl">
                        <p className="text-gray-600 text-sm mb-1">Commercial</p>
                        <p className="text-xl font-semibold text-gray-900">{project.commercial}</p>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-xl">
                        <p className="text-gray-600 text-sm mb-1">North East / South West</p>
                        <p className="text-xl font-semibold text-gray-900">{project.prize}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.features.map((feature, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-4 py-2 border border-blue-600/30 text-blue-600 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button href={`/projects/${project.id}`}>
                      View Project Details <ChevronRight size={18} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Interested In Our Projects?
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Get in touch with our team to learn more about available plots and investment opportunities.
              </p>
              <Button href="/contact">
                Contact Us <ChevronRight size={18} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects
