import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import emailjs from '@emailjs/browser'



const Contact = () => {
  const [formData, setFormData] = useState({
  user_name: '',
  user_phone: '',
  user_email: '',
  message: '',
})
 const [submitted, setSubmitted] = useState(false)
 const form = useRef()

  const handleSubmit = (e) => {
  e.preventDefault()

  emailjs
    .sendForm(
      'service_jrouapl',
      'template_jogeevq',
      form.current,
      {
        publicKey: 'd7teX1N1sD93dSy_Q',
      }
    )
    .then(
      () => {
        setSubmitted(true)

        setTimeout(() => {
          setSubmitted(false)

          setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
          })
        }, 3000)
      },
      (error) => {
        console.log(error)
        alert('Failed to send message')
      }
    )
}

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero */}
      <section className="py-20 relative overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 " />
        <div className="container mx-auto px-6 relative z-10 ">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors ">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <SectionTitle
            subtitle="Get In Touch"
            title="Contact Us"
            description="Reach out to our team for any queries or to schedule a site visit."
          />
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-dark-900 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Address</h4>
                    <p className="text-gray-400">
                      NH 212, Sujathapuram<br />
                      Nanjangud, Mysore<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 ">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-dark-900 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Phone</h4>
                    <p className="text-gray-400">+91 96635 77779</p>
                  </div>
                </div>

                <div className="flex gap-4 ">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-dark-900 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email</h4>
                    <p className="text-gray-400">chamunde.township@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-dark-900 flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Working Hours</h4>
                    <p className="text-gray-400">Monday to Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=Chamundi%20Township%20Nanjangud&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chamundi Township Location"
              className="w-full h-full"
            />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card p-8 lg:p-10 rounded-3xl">
                <h3 className="text-2xl font-bold mb-8 text-white">Send Us a Message</h3>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-dark-900" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Thank You!</h4>
                    <p className="text-gray-400">Your message has been sent successfully. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Full Name</label>
                      <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 text-white border border-gray-700 rounded-xl focus:bg-white focus:text-black focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Phone Number</label>
                      <input
                        type="tel"
                        name="user_phone"
                        value={formData.user_phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 text-white border border-gray-700 rounded-xl focus:bg-white focus:text-black focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder="+91"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                      <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 text-white border border-gray-700 rounded-xl focus:bg-white focus:text-black focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-900 text-white border border-gray-700 rounded-xl focus:bg-white focus:text-black focus:border-blue-500 focus:outline-none transition-all duration-300"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button type="submit" className="w-full justify-center">
                      Send Message <Send size={18} />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
