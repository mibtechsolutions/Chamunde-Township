import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, MessageSquare, Share2, Users } from 'lucide-react'
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter
} from "react-icons/fa6";

const Footer = () => {

  const socialLinks = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/durga_agencies_01/",
  },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/profile.php?id=61590695805030",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com/24786998e14f4c3",
  },
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/@ChamundiTownship",
  },
];

  return (
    <footer className="bg-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="flex items-center gap-2">
            <img
                src="https://www.chamundetownship.com/images/chamundilogo.png"
                alt="Durga Agencies Logo"
                className="h-16 w-auto"
            />
          </Link>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
             The Karnataka Industrial Area Development Board (KIADB) has acquired more than 2,000 acres in and around Nanjangud.
            </p>
            <div className="flex gap-4">
  {socialLinks.map((item, idx) => {
    const Icon = item.icon;

    return (
      <a
        key={idx}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300"
      >
        <Icon size={18} />
      </a>
    );
  })}
</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Project Highlights</h3>
            <ul className="space-y-4">
              {['45 Acres Township', '479 Residential Plots', '10 Acres Commercial', 'MUDA Approved', 'Kabini Water Supply'].map((item) => (
                <li key={item}>
                  <span className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  NH 212, Sujathapuram<br />
                  Nanjangud, Mysore<br />
                  Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">+91 96635 77779</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">chamunde.township@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">Mon-Sun: 10:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Chamundi Township by Durga Agencies. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
