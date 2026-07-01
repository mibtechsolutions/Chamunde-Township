import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  ArrowLeft,
  MapPin,
  CheckCircle,
  Play,
  Building2,
  Trees,
  Home,
  ShoppingBag,
  Award,
  Clock,
  Users,
  Map,
  Hotel,
  Fuel,
  GraduationCap,
  Hospital,
  Landmark,
  Train
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'


const ProjectDetails = () => {


  const [selectedImage, setSelectedImage] = useState(null)

  const nearbyPlaces = [
  {
    icon: <Hospital size={48} className="text-red-500" />,
    title: "ESI Hospital",
    distance: "492 M"
  },
  {
    icon: <GraduationCap size={48} className="text-blue-500" />,
    title: "Colleges",
    distance: "RV University 500 M"
  },
  {
    icon: <Train size={48} className="text-purple-500" />,
    title: "Railway Station",
    distance: "Railway Station Frontage"
  },
  {
    icon: <Users size={48} className="text-green-500" />,
    title: "Play Ground",
    distance: "Inside the Chamundi township"
  },
  {
    icon: <Fuel size={48} className="text-orange-500" />,
    title: "Petrol Pump",
    distance: "Petrol Bunk Nearby"
  },
  {
    icon: <Building2 size={48} className="text-cyan-500" />,
    title: "Industrial Area",
    distance: "IN & OUT"
  },
  {
    icon: <Hotel size={48} className="text-pink-500" />,
    title: "Hotels",
    distance: "550 M"
  },
  {
    icon: <Landmark size={48} className="text-yellow-500" />,
    title: "Highway Access",
    distance: "Highway Frontage Township"
  }
]

const upcomingAmenities = [
  {
    title: "BVR Mahal",
    icon: <Building2 size={48} className="text-blue-500" />,
    description: "Premium convention and wedding hall."
  },
  {
    title: "Star Hotel",
    icon: <Hotel size={48} className="text-yellow-500" />,
    description: "Luxury hospitality and accommodation."
  },
  {
    title: "Apartments",
    icon: <Building2 size={48} className="text-green-500" />,
    description: "Modern residential apartment development."
  }
]


  const features = [
  {
    icon: <MapPin size={24} className="text-white" />,
    title: "Mysore Airport",
    distance: "10 KM"
  },
  {
    icon: <Building2 size={24} className="text-white" />,
    title: "Mysore City",
    distance: "20 KM"
  },
  {
    icon: <Building2 size={24} className="text-white" />,
    title: "Chamarajanagar",
    distance: "20 KM"
  },
  {
    icon: <Building2 size={24} className="text-white" />,
    title: "Bangalore",
    distance: "150 KM"
  },
  {
    icon: <Trees size={24} className="text-white" />,
    title: "Bandipur",
    distance: "58 KM"
  },
  {
    icon: <Trees size={24} className="text-white" />,
    title: "Mudumalai",
    distance: "89 KM"
  },
  {
    icon: <Landmark size={24} className="text-white" />,
    title: "Masinagudi",
    distance: "76 KM"
  },
  {
    icon: <Building2 size={24} className="text-white" />,
    title: "Coimbatore",
    distance: "180 KM"
  }
]

const bankPartners = [
  {
    name: 'HDFC Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg'
  },
  {
    name: 'ICICI Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg'
  },
  {
    name: 'LIC Housing Finance',
    logo: '/lic-logo.svg'
  },
]



  const faqs = [
    {
      q: 'Dakshina Kashi Temple?',
      a: 'More than 55,00,000+ devotees visit the sacred Dakshina Kashi Temple every year to prayers and seek blessings. '
    },
    {
      q: 'Is the project MUDA approved?',
      a: 'Yes, Chamundi Township is a MUDA approved layout with all necessary clearances and approvals.'
    },
    {
      q: 'What is the water source for the township?',
      a: 'The township has dual water supply - Kabini river water and Corporate water for uninterrupted supply.'
    },
    {
      q: 'Are there major industrial areas nearby?',
      a: 'Located near the Nanjangud Industrial Corridor, Chamundi Township enjoys proximity to major industries including Nestlé India, AT&S India, Asian Paints, Jubilant Ingrevia, and Ricols Group, TVS Motors, Breaks India, Coca-cola, ITC, RV University, Kottakkal Arya Vaidya making it a promising destination for investment and growth.'
    },
    {
      q: 'What are the available plot orientations?',
      a: 'We have both North/East facing and South/West facing plots available at different price points.'
    },
    {
      q: 'Is there a commercial development within the township?',
      a: 'Yes, the project includes 10 acres of dedicated commercial development for shopping, Apartments and amenities.'
    },
    {
      q: 'What is the current price per sq.ft?',
      a: 'North & East facing plots are priced at ₹4,499 per sq.ft and South & West facing at ₹4,249 per sq.ft.'
    }
  ]

  const galleryImages = [
    '/home14.jpeg',
    '/hero.jpg',
    '/hometwo.jpeg',
    '/home3.jpeg',
    '/home4.jpeg',
    '/home5.jpeg',
    '/home6.jpeg',
    '/home7.jpeg',
    '/home8.JPG',
    '/home9.jpeg',
    '/home10.JPG',
    '/home11.JPG',
    
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="Chamundi Township"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
                DURGA AGENCIES
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-blue-600">
                Chamundi Township
              </h1>
              <p className="text-xl text-gray-300 flex items-center gap-2">
                <MapPin size={20} className="text-gold-400" /> Nanjangud, Mysore, Karnataka
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-dark-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="Project Overview"
                title="Take Life Quality To An Upper Level"
                description="The Chamundi Township rests on a sprawling expanse of 45 acres, making it one of the largest integrated township developments in Nanjangud."
              />
              <p className="text-gray-400 leading-relaxed">
                Designed with meticulous attention to detail, the township offers premium residential plots with world-class amenities, wide roads, and abundant green spaces. With the KIADB industrial corridor nearby and excellent connectivity to Mysore and Bangalore, this is the perfect investment for your future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '45', label: 'Acres' },
                { value: '479', label: 'Plots' },
                { value: '10', label: 'Acres Commercial' },
                { value: '55', label: 'North/East facing and South/West facing plots available' },
              ].map((stat, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl text-center">
                  <p className="text-4xl font-bold text-gold-gradient mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle
  subtitle="Connectivity"
  title="Distance From Township"
  description="Major destinations near Chamundi Township."
  align="center"
/>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-dark-900 mx-auto mb-4">
                  {feature.icon}
                </div>
              <div>
              <h4 className="font-semibold text-lg">
                    {feature.title}
              </h4>

              <p className="text-blue-600 font-bold mt-2">
                   {feature.distance}
               </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-dark-800">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Pricing"
            title="Plot Availability & Pricing"
            description="Choose from premium North/East or South/West facing plots."
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
            {[
              { facing: 'North & East Facing', price: '₹4,499', available: '55 Plots' },
              { facing: 'South & West Facing', price: '₹4,249', available: '55 Plots' },
            ].map((plot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card p-10 rounded-3xl"
              >
                <h3 className="text-2xl font-bold mb-6">{plot.facing}</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-4 border-b border-gray-800">
                    <span className="text-gray-400">Price Per Sq.Ft</span>
                    <span className="text-3xl font-bold text-gold-gradient">{plot.price}</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-gray-400">Available Plots</span>
                    <span className="text-xl font-semibold">{plot.available}</span>
                  </div>
                </div>
                <Button href="/contact" className="w-full justify-center">
                  Enquire Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* distance aminities */}

      <section className="py-24 bg-white">
  <div className="container mx-auto px-6">

    <SectionTitle
      subtitle="Nearby Facilities"
      title="In & Around The Township"
      description="Everything you need is just minutes away from Chamundi Township."
      align="center"
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
  {nearbyPlaces.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-8 text-center shadow-xl border border-gray-100"
    >
      <div className="flex justify-center mb-5">
        {item.icon}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {item.title}
      </h3>

      <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold">
        {item.distance}
      </div>
    </motion.div>
  ))}
</div>

  </div>
</section>

      {/* Bank Partners */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Financial Partners"
            title="Bank Loan Assistance"
            description="We've partnered with leading financial institutions for hassle-free loan processing."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {bankPartners.map((bank, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="glass-card px-12 py-8 rounded-2xl min-w-[200px] text-center"
  >
    <img
      src={bank.logo}
      alt={bank.name}
      className="h-14 mx-auto mb-4 object-contain"
    />

    <p className="font-semibold">
      {bank.name}
    </p>
  </motion.div>
))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-dark-800">
  <div className="container mx-auto px-6">
    <SectionTitle
      subtitle="Gallery"
      title="Project Gallery"
      description="Visualize your future at Chamundi Township."
      align="center"
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
      {galleryImages.map((image, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelectedImage(image)}
          className="aspect-video rounded-2xl overflow-hidden cursor-pointer"
        >
          <img
            src={image}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>

 

    {/* Image Popup */}
    {selectedImage && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedImage(null)}
        className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
      >
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-6 right-8 text-white text-5xl font-bold hover:text-red-500"
        >
          ×
        </button>

        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          src={selectedImage}
          alt="Gallery Preview"
          className="max-w-[95vw] max-h-[90vh] rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    )}
  </div>
</section>


 {/*future aminities upcomming */}

  <section className="pt-24 pb-10 bg-white">
  <div className="container mx-auto px-6">

    <SectionTitle
      subtitle="Future Development"
      title="Upcoming Amenities"
      description="Major developments planned around Chamundi Township to enhance lifestyle and investment value."
      align="center"
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {upcomingAmenities.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-white rounded-3xl p-8 shadow-xl text-center"
        >
          <div className="flex justify-center mb-6">
            {item.icon}
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600">
            {item.description}
          </p>

          <div className="mt-6 inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold">
            Upcoming
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

      {/* FAQ */}
      <section className="py-24 pt-8 bg-dark-800">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about Chamundi Township."
            align="center"
          />

          <div className="max-w-3xl mx-auto mt-16 space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-6 rounded-2xl"
              >
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-3">
                  <CheckCircle size={20} className="text-gold-400 flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-gray-400 pl-9">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-12 rounded-3xl text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready To Invest In Your Future?
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Book a site visit today and discover your perfect plot at Chamundi Township.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact">Book Site Visit</Button>
                <Button href="tel:+919663577779" variant="secondary">Call Now</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ProjectDetails
