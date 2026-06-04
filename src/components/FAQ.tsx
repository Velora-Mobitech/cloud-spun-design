'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      category: 'Booking',
      questions: [
        {
          q: 'How do I book my ride?',
          a: 'Simply click "Book My Ride" and follow our 6-step booking process. It takes just 5 minutes.',
        },
        {
          q: 'Can I modify my booking after booking?',
          a: 'Yes, you can modify your booking up to 24 hours before your scheduled trip. Contact our support team for assistance.',
        },
        {
          q: 'Is there a booking confirmation?',
          a: 'Yes, you\'ll receive an email confirmation with your booking details, driver information, and vehicle number.',
        },
      ],
    },
    {
      category: 'Ride Sharing',
      questions: [
        {
          q: 'How does ride matching work?',
          a: 'Our algorithm matches you with travelers who have similar arrival times, routes, and preferences. You\'ll be notified of your group.',
        },
        {
          q: 'Can I select my ride mates?',
          a: 'Yes, with our "Shared Ride" option, you can handpick who you want to travel with from available options.',
        },
        {
          q: 'What if I don\'t want to share?',
          a: 'Select "Private Ride" option to book a complete vehicle just for yourself and your group.',
        },
      ],
    },
    {
      category: 'Refunds',
      questions: [
        {
          q: 'What\'s your cancellation policy?',
          a: 'Free cancellation up to 24 hours before your trip. Cancellations within 24 hours may incur a 50% charge.',
        },
        {
          q: 'How long does a refund take?',
          a: 'Refunds are processed within 5-7 business days after cancellation to your original payment method.',
        },
      ],
    },
    {
      category: 'Parents',
      questions: [
        {
          q: 'Is there a family group discount?',
          a: 'Yes! Family groups of 3+ members get 15% off. Contact our support for group bookings.',
        },
        {
          q: 'Can you help with hotel recommendations?',
          a: 'We can suggest nearby hotels and help coordinate rates. Contact our parent support team.',
        },
      ],
    },
    {
      category: 'Tourism',
      questions: [
        {
          q: 'How do I book a Northeast travel package?',
          a: 'Click "Inquire Now" on any package card. Our team will contact you within 24 hours with customized pricing.',
        },
        {
          q: 'Can I customize a tour itinerary?',
          a: 'Absolutely! We offer fully customizable packages. Share your preferences with our team.',
        },
      ],
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-accent-maroon mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">Find answers to common questions about our services.</p>
        </motion.div>

        {/* FAQs by Category */}
        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-accent-maroon mb-6">{category.category}</h3>

              {/* Questions */}
              <div className="space-y-3">
                {category.questions.map((faq, index) => {
                  const uniqueIndex = `${catIndex}-${index}`
                  const isOpen = openIndex === uniqueIndex

                  return (
                    <motion.div
                      key={uniqueIndex}
                      initial={false}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:border-accent-gold transition"
                    >
                      {/* Question Button */}
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : uniqueIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-accent-gold/10 transition text-left"
                      >
                        <span className="font-semibold text-accent-maroon">{faq.q}</span>
                        <ChevronDown
                          size={20}
                          className={`text-accent-gold transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Answer */}
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                          {faq.a}
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Need Help? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 sm:mt-24 bg-accent-maroon rounded-2xl text-white p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="mb-6 text-white/90">Our support team is available 24/7 to help you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918876XXXXXX" className="bg-accent-gold text-accent-maroon px-6 py-3 rounded-lg font-bold hover:bg-accent-gold/90 transition">
              Call Us
            </a>
            <a href="#contact" className="bg-white/20 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/30 transition border border-white">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
