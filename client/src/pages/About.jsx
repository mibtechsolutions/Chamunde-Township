import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Building2, Users, TrendingUp, Clock, Award, CheckCircle, ChevronRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

const About = () => {
  const directors = [
    {
      name: 'C. Thirumalaisamy',
      role: 'Partner',
      experience: 'Over 30 years of business experience',
      associations: ['Birla Group', 'Mafatlal Group', 'Industrial Asset Recovery', 'Textile Industry', 'Real Estate Development']
    },
    {
      name: 'T. Shanthi',
      role: 'Partner',
      experience: 'Land Development & Infrastructure Projects',
      associations: ['Land Development', 'Infrastructure Projects', 'Business Operations']
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <SectionTitle
            subtitle="About Us"
            title="Durga Agencies"
            description="Building trust and creating landmark developments for over three decades."
          />
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="Our Journey"
                title="Chamundi Township"
              />
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Karnataka Industrial Area Development Board (KIADB) has acquired more than 2,000 acres in and around Nanjangud, to develop an industrial corridor. Nanjangud Karnataka have 40 major industries, 20 medium industries and 50 small-scale units. Nanjangud,Mysore is the second higgest tax-paying taluk in the State after Bangalore. The Ministry of Labour & Employment has published an annual report for the year 2020-21, 260000 Employees are working various industries in Nanjangud and surroundings.
              </p>
              

            </motion.div>

            

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="/hero.jpg"
                  alt="Company"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            
          </div>

        </div>
        
      </section>

      

      

     
    </motion.div>
  )
}

export default About
