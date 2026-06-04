'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export function TourismPackages() {
  const packages = [
    {
      title: 'Shillong',
      subtitle: 'City of Clouds',
      duration: '1-2 days',
      highlights: ['Ward\'s Lake', 'Don Bosco Museum', 'Khasi Heritage'],
      image: 'https://images.unsplash.com/photo-1537144191519-689ad63d434a?w=500&h=300&fit=crop',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Cherrapunji',
      subtitle: 'Wettest Place on Earth',
      duration: '1-2 days',
      highlights: ['Living Root Bridges', 'Mawsmai Falls', 'Sacred Groves'],
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Dawki',
      subtitle: 'Bangladesh Border',
      duration: '1 day',
      highlights: ['Umngot River', 'Clear Water', 'Border Market'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Kaziranga',
      subtitle: 'Wildlife Sanctuary',
      duration: '2-3 days',
      highlights: ['One-horned Rhinos', 'Jeep Safari', 'River Cruise'],
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=300&fit=crop',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Sikkim',
      subtitle: 'Himalayan Marvel',
      duration: '3-4 days',
      highlights: ['Kanyak dzong', 'Tsomgo Lake', 'Nathula Pass'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Brahmaputra Cruise',
      subtitle: 'River Journey',
      duration: '1-2 days',
      highlights: ['Sunset Cruise', 'River Ecosystem', 'Local Villages'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-accent-maroon/5 to-accent-burgundy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent-maroon mb-6">
            Explore Northeast India
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Extend your convocation stay and explore the beauty of Northeast India. Customize your journey.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${pkg.color} opacity-30`} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-accent-maroon mb-1">{pkg.title}</h3>
                <p className="text-accent-gold font-semibold mb-4">{pkg.subtitle}</p>

                {/* Duration */}
                <div className="flex items-center gap-2 text-gray-600 mb-4 text-sm">
                  <Clock size={16} />
                  {pkg.duration}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {pkg.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button className="w-full bg-accent-maroon hover:bg-accent-burgundy text-white font-semibold rounded-lg gap-2">
                  Inquire Now <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 sm:mt-24 text-center bg-white rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl font-bold text-accent-maroon mb-4">Custom Package Inquiry</h3>
          <p className="text-gray-600 mb-6">
            Have a specific destination or custom itinerary in mind? Contact us for personalized pricing and arrangements.
          </p>
          <Button className="bg-accent-gold hover:bg-accent-gold/90 text-black font-bold rounded-lg">
            Plan Your Custom Tour
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
