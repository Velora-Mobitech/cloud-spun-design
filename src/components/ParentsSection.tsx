'use client'

import { motion } from 'framer-motion'
import { Heart, MapPin, Bus, Camera, MessageCircle } from 'lucide-react'

export function ParentsSection() {
  const services = [
    {
      icon: Bus,
      title: 'Airport Transfers',
      description: 'Comfortable pickup and drop-off service for family members arriving at the airport.',
    },
    {
      icon: MapPin,
      title: 'Hotel Coordination',
      description: 'We can help coordinate local hotel recommendations near campus.',
    },
    {
      icon: Camera,
      title: 'Local Sightseeing',
      description: 'Arrange trips to nearby attractions while waiting for convocation events.',
    },
    {
      icon: Heart,
      title: 'Family Packages',
      description: 'Special bundled pricing for family groups (3+ members).',
    },
    {
      icon: MessageCircle,
      title: '24/7 Support',
      description: 'Dedicated support team available throughout the convocation period.',
    },
    {
      icon: Bus,
      title: 'Event Shuttles',
      description: 'Regular transfers to all convocation events and venues on campus.',
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent-maroon mb-6">
            For Parents & Family
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've made it easy for your family to be part of this special celebration. Comprehensive support for your convocation visit.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent-maroon/5 to-accent-gold/5 border border-accent-gold/20 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-burgundy rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-accent-maroon mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Important Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 sm:mt-24 bg-accent-maroon text-white rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl font-bold mb-6">Important Information for Family Members</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-accent-gold font-bold text-lg">✓</span>
              <span>Book family group packages for 3+ members and get discounts</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-gold font-bold text-lg">✓</span>
              <span>All drivers are trained professionals experienced with family bookings</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-gold font-bold text-lg">✓</span>
              <span>We can arrange vehicle sizes based on your family group</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-gold font-bold text-lg">✓</span>
              <span>24/7 emergency support hotline for assistance during the event</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-gold font-bold text-lg">✓</span>
              <span>Special packages available for guests staying at nearby hotels</span>
            </li>
          </ul>
        </motion.div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-accent-gold/10 border-2 border-accent-gold rounded-xl p-6 text-center"
        >
          <p className="text-accent-maroon font-semibold">
            Same rates as students: ₹649 per trip | ₹1249 round trip | Special group discounts available
          </p>
        </motion.div>
      </div>
    </section>
  )
}
