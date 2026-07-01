import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Factory, TrendingUp, Map, Home as HomeIcon, Trees, ShoppingBag, ChevronDown, Play, CheckCircle, Clock, Building2, Award, Users, Globe, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Counter from '../components/Counter'
import Button from '../components/Button'


const Home = () => {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], [0, 200])

  const galleryImages = [
    '/hero.jpg',
    '/hometwo.jpeg',
    '/home3.jpeg',
    '/home4.jpeg',
    '/home5.jpeg',
    '/home6.jpeg',
    '/home7.jpeg',
  ]

  const amenities = [
    { icon: <MapPin size={24} />, title: 'Wide Roads' },
    { icon: <Trees size={24} />, title: 'Kabini Water' },
    { icon: <Building2 size={24} />, title: 'Borewell Water' },
    { icon: <ShoppingBag size={24} />, title: 'Commercial Zone' },
    { icon: <Award size={24} />, title: 'Temple Nearby' },
    { icon: <Factory size={24} />, title: 'Industrial Access' },
    { icon: <Trees size={24} />, title: 'Open Spaces' },
    { icon: <Globe size={24} />, title: 'Green Environment' },
  ]

  const locationAdvantages = [
    { place: 'RV University', distance: '500m' },
    { place: 'Mysore Airport', distance: '10km' },
    { place: 'Mysore City', distance: '20km' },
    { place: 'Bandipur', distance: '58km' },
    { place: 'Masinagudi', distance: '76km' },
    { place: 'Mudumalai', distance: '89km' },
    { place: 'Bangalore', distance: '150km' },
    { place: 'Coimbatore', distance: '180km' },
  ]

  const whyInvest = [
    { title: 'KIADB Industrial Corridor', value: '2000+ Acres', icon: <Factory size={28} /> },
    { title: 'Major Industries', value: '40+', icon: <Building2 size={28} /> },
    { title: 'Medium Industries', value: '20+', icon: <Building2 size={28} /> },
    { title: 'Small Scale Industries', value: '50+', icon: <Building2 size={28} /> },
    { title: 'Employees', value: '2,60,000+', icon: <Users size={28} /> },
    { title: 'Tax Paying State', value: '2nd Highest', icon: <Award size={28} /> },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
  {/* Background */}
  <motion.div
    style={{ y: parallaxY }}
    className="absolute inset-0"
  >
    <div
      className="absolute inset-0 bg-cover bg-center brightness-75"
      style={{
        backgroundImage: 'url("/home9.jpeg")',
      }}
    />

    <div className="absolute inset-0 bg-black/35" />
  </motion.div>

  <div className="relative z-10 h-full flex items-center">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <p className="text-blue-500 uppercase tracking-[3px] font-semibold mb-4">
              DURGA AGENCIES PRESENTS
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Chamundi
              <br />
              <span className="text-blue-600">
                Township
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 mt-10">
              <Button href="/projects/chamundi-township">
                Explore Project
              </Button>

              <Button
                href="/contact"
                variant="secondary"
              >
                Book Site Visit
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:block"
        >

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">

            {[
              {
                value: 45,
                suffix: " Acres",
                label: "Project Size",
              },
              {
                value: 10,
                suffix: " Acres",
                label: "Commercial",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                }}
                className="glass-card rounded-3xl p-8 text-center"
              >
                <h2 className="text-5xl font-bold text-blue-600">
                  <Counter target={stat.value} />
                  <span>{stat.suffix}</span>
                </h2>

                <p className="text-white mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}

          </div>

          {/* PRICE CARD */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
    delay: 0.8,
  }}
  className="flex justify-center mt-8"
>
  <motion.div
    whileHover={{
      scale: 1.03,
      y: -5,
    }}
    animate={{
      y: [0, -6, 0],
      boxShadow: [
        "0 0 20px rgba(59,130,246,.20)",
        "0 0 45px rgba(59,130,246,.45)",
        "0 0 20px rgba(59,130,246,.20)",
      ],
    }}
    transition={{
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
      boxShadow: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="relative overflow-hidden rounded-3xl px-10 py-8 w-full max-w-md
               bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-blue-700/30
               backdrop-blur-xl border border-blue-400/40"
  >

    {/* Animated Shine */}
    <motion.div
      animate={{
        x: ["-180%", "180%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "linear",
      }}
      className="absolute top-0 left-0 h-full w-24
                 bg-white/20 blur-xl rotate-12"
    />

    <p className="text-center uppercase tracking-[5px] text-blue-200 text-sm font-semibold">
      Launch Price
    </p>

    <motion.h2
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="text-center text-6xl font-black text-amber-400 mt-3"
    >
      ₹4249
    </motion.h2>

    <p className="text-center text-blue-100 text-lg mt-2">
      Only / Sq.ft
    </p>

    {/* Status */}
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.9, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="mt-7 mx-auto w-fit
                 px-7 py-3 rounded-full
                 bg-white text-blue-700
                 font-bold tracking-wider
                 shadow-xl"
    >
      ● OPEN NOW
    </motion.div>

  </motion.div>
</motion.div>

        </motion.div>

      </div>
    </div>
  </div>
</section>


{/* Pricing */}
      <section className="py-24 bg-gray-200">
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

      {/* Why Investment Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Why Invest Here"
            title="This Investment Is Different"
            description="Nanjangud is emerging as one of Karnataka's fastest growing industrial hubs, offering unmatched potential for growth and returns."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyInvest.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center text-dark-900 mb-6">
                  {item.icon}
                </div>
                <p className="text-3xl font-bold text-gold-gradient mb-2">{item.value}</p>
                <p className="text-gray-300">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br bg-slate-900" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="Investment Opportunity"
                title="Invest Where Karnataka Is Growing"
                description="Nanjangud is emerging as one of Karnataka's fastest growing industrial and residential hubs. With major industries setting up operations and infrastructure developing rapidly, now is the perfect time to invest."
              />

              <div className="space-y-6 mt-10">
                {[
                  { title: 'Rapid Industrial Growth', desc: 'KIADB corridor with 2000+ acres of industrial development' },
                  { title: 'Excellent Connectivity', desc: 'Well connected to Mysore, Bangalore, and Coimbatore' },
                  { title: 'High Appreciation', desc: 'Property values expected to grow exponentially' },
                  { title: 'MUDA Approved', desc: 'Legally approved layout with all necessary clearances' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={24} className="text-gold-400 flex-shrink-0 mt-1 text-green-400" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-white">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Total Plots', value: '479' },
                  
                    { label: 'Project Size', value: '45 Acres' },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-6 bg-slate-900 rounded-2xl">
                      <p className="text-2xl md:text-3xl font-bold text-gold-gradient mb-1">{stat.value}</p>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Gallery"
            title="Project Gallery"
            description="Take a visual tour of our premium township development."
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`rounded-2xl overflow-hidden ${idx % 3 === 1 ? 'md:row-span-2' : ''}`}
              >
                <img
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                  style={{ minHeight: idx % 3 === 1 ? '400px' : '200px' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Video Tour"
            description="Experience the vision behind Chamundi Township through our exclusive video tour."
            title="Watch The Project Video"
            align="center"
          />

          <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative aspect-video rounded-3xl overflow-hidden glass-card"
>
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/2aKsAI9cK5c?si=xFGlovcwK7EhBV8m"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div
  className="absolute inset-0 bg-cover bg-center parallax-bg"
  style={{
    backgroundImage: 'url("/home8.JPG")'
  }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/70" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Ready To Own Your<br />
                <span className="text-gold-gradient">Future Address?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Schedule a site visit today and discover the perfect plot for your dream home or investment.
              </p>
              <div className="flex flex-wrap gap-4">
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

export default Home
