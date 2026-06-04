'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function WhyBookWithUs() {
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
            Why Book With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium service at affordable prices. Unbeatable rates for IITG alumni, students, and their families.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-accent-gold">
                <th className="text-left py-4 px-4 sm:px-6 font-bold text-accent-maroon">Route</th>
                <th className="text-center py-4 px-4 sm:px-6 font-bold text-gray-600">Market Fare</th>
                <th className="text-center py-4 px-4 sm:px-6 font-bold text-accent-gold bg-accent-gold/10 rounded-t-lg">
                  Our Fare
                </th>
                <th className="text-center py-4 px-4 sm:px-6 font-bold text-green-600">You Save</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  route: 'Airport → Campus',
                  market: '₹900–1200',
                  our: '₹649',
                  save: 'Up to ₹551',
                },
                {
                  route: 'Campus → Airport',
                  market: '₹900–1200',
                  our: '₹649',
                  save: 'Up to ₹551',
                },
                {
                  route: 'Round Trip',
                  market: '₹1800–2400',
                  our: '₹1249',
                  save: 'Up to ₹1151',
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`border-b ${index === 2 ? 'border-accent-gold/30' : 'border-gray-200'}`}
                >
                  <td className="py-4 px-4 sm:px-6 font-semibold text-accent-maroon">{row.route}</td>
                  <td className="text-center py-4 px-4 sm:px-6 text-gray-600">{row.market}</td>
                  <td className="text-center py-4 px-4 sm:px-6 bg-accent-gold/10 font-bold text-accent-gold">
                    {row.our}
                  </td>
                  <td className="text-center py-4 px-4 sm:px-6 text-green-600 font-semibold">{row.save}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Best Price Guarantee',
              description: 'Unbeatable rates exclusively for IITG Convocation 2026',
            },
            {
              title: 'Professional Drivers',
              description: 'Trained, courteous drivers committed to your safety',
            },
            {
              title: 'Transparent Pricing',
              description: 'No hidden charges. Pay exactly what you see',
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent-gold">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-accent-maroon mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
