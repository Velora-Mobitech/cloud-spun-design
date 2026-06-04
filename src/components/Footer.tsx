'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { label: 'Book Now', href: '#booking-form' },
    { label: 'Travel Options', href: '#travel-options' },
    { label: 'Ride Sharing', href: '#cab-sharing' },
    { label: 'Tourism', href: '#tourism-packages' },
    { label: 'For Parents', href: '#parents' },
    { label: 'FAQ', href: '#faq' },
  ]

  const policies = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Cancellation Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ]

  return (
    <footer className="relative bg-accent-maroon text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-black text-accent-gold mb-4">IITG Convocation 2026</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Making your convocation journey comfortable, affordable, and unforgettable.
            </p>
            <p className="text-white/60 text-sm">
              Celebrate the Moment. We'll Handle the Journey.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-accent-gold transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Call</p>
                  <a href="tel:+918876XXXXXX" className="text-accent-gold font-semibold hover:text-accent-gold/80">
                    +91 8876 XXXXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <a href="mailto:support@convocation2026.com" className="text-accent-gold font-semibold hover:text-accent-gold/80">
                    support@convocation2026.com
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-accent-gold text-white hover:text-accent-maroon rounded-full flex items-center justify-center transition"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
            <p className="text-white/60 text-sm mt-6">
              Share your convocation moments with us on social media using #IITG2026
            </p>
          </motion.div>
        </div>

        {/* Policies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-12 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/70 text-sm">
              © 2026 IIT Guwahati Convocation 2026 Travel Platform. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              {policies.map((policy) => (
                <a key={policy.label} href={policy.href} className="text-white/70 hover:text-accent-gold text-sm transition">
                  {policy.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-accent-gold text-accent-maroon py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold">
            Emergency Support Available 24/7 | Call: <span className="font-black">+91 8876 XXXXXX</span>
          </p>
        </div>
      </div>
    </footer>
  )
}