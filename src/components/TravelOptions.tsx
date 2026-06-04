'use client'

import { motion } from 'framer-motion'
import { Plane, Luggage, MapPin, Zap } from 'lucide-react'
import { Button } from './ui/button'

export function TravelOptions() {
  const options = [
    {
      icon: Plane,
      title: 'Airport → Campus',
      price: '₹649',
      description: 'Comfortable pickup from Guwahati airport to IITG campus',
      features: ['Direct route', 'Professional driver', 'Clean vehicle'],
      badge: 'Popular',
    },
    {
      icon: Plane,
      title: 'Campus → Airport',
      price: '₹649',
      description: 'Safe drop-off from campus to Guwahati airport',
      features: ['Direct route', 'Professional driver', 'Clean vehicle'],
    },
    {
      icon: Zap,
      title: 'Round Trip',
      price: '₹1249',
      description: 'Both arrival and departure journeys covered',
      features: ['Save ₹49', 'Flexibility', 'Guaranteed availability'],
      badge: 'Best Value',
    },
    {
      icon: Luggage,
      title: 'Round Trip + Campus Travel',
      price: '₹1649',
      description: 'Complete transportation for your convocation stay',
      features: ['Unlimited campus trips', 'Hotel transfers', 'Event shuttles'],
    },
    {
      icon: MapPin,
      title: 'Internal Campus Travel',
      price: '₹99/trip',
      description: 'Move around campus easily during convocation',
      features: ['Hostel to auditorium', 'Flexible timing', 'Per-trip pricing'],
    },
    {
      icon: Zap,
      title: 'Northeast Travel Packages',
      price: 'Custom',
      description: 'Explore Shillong, Cherrapunji, Dawki & more',
      features: ['Multi-day tours', 'Customizable', 'Contact for pricing'],
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-white to-accent-maroon/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent-maroon mb-6">
            Travel Options
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect option for your convocation journey. All prices are per person.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, index) => {
            const Icon = option.icon
            const hasBadge = !!option.badge
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 hover:shadow-xl transition ${
                  hasBadge ? 'ring-2 ring-accent-gold' : ''
                }`}
              >
                {/* Badge */}
                {hasBadge && (
                  <div className="absolute -top-3 right-4 bg-accent-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                    {option.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-burgundy rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-accent-maroon mb-2">{option.title}</h3>
                <p className="text-3xl font-black text-accent-gold mb-3">{option.price}</p>
                <p className="text-gray-600 mb-6">{option.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button className="w-full bg-accent-maroon hover:bg-accent-burgundy text-white font-semibold rounded-lg">
                  Select This Option
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
