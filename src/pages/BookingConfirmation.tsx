'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Phone, Mail, MessageCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function BookingConfirmation() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-maroon to-accent-burgundy flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 100 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-3xl" />
            <CheckCircle className="text-accent-gold w-24 h-24 relative" />
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-black text-accent-maroon mb-4">
            Thank You for Booking!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your booking has been successfully submitted. We're excited to make your convocation journey unforgettable!
          </p>
        </motion.div>

        {/* Confirmation Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-accent-maroon/5 rounded-2xl p-8 mb-8 border-2 border-accent-gold/30"
        >
          <h3 className="text-accent-maroon font-bold text-lg mb-6">What's Next?</h3>
          <div className="space-y-4 text-left">
            <div className="flex gap-4 items-start">
              <div className="bg-accent-gold text-accent-maroon rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-semibold text-accent-maroon">Confirmation Email</p>
                <p className="text-gray-600 text-sm">Check your email for booking details and receipt</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-accent-gold text-accent-maroon rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-accent-maroon">Driver Assignment</p>
                <p className="text-gray-600 text-sm">We'll assign your driver within 24 hours</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-accent-gold text-accent-maroon rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-semibold text-accent-maroon">Pre-Trip Contact</p>
                <p className="text-gray-600 text-sm">Our team will contact you 24 hours before your trip</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-accent-maroon font-bold text-lg mb-6">For Any Urgent Queries</h3>
          <div className="space-y-4">
            {/* Phone 1 */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+918688505081"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-accent-maroon/10 to-accent-gold/10 rounded-xl hover:shadow-lg transition border-2 border-accent-maroon/20"
            >
              <Phone className="text-accent-maroon flex-shrink-0" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-600">Call Us</p>
                <p className="font-bold text-accent-maroon text-lg">+91 8688 505 081</p>
              </div>
            </motion.a>

            {/* Phone 2 / WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/919347767815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-100 to-green-50 rounded-xl hover:shadow-lg transition border-2 border-green-400"
            >
              <MessageCircle className="text-green-600 flex-shrink-0" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-600">WhatsApp</p>
                <p className="font-bold text-green-600 text-lg">+91 9347 767 815</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:team@veloramobitech.systems"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-accent-maroon/10 to-accent-gold/10 rounded-xl hover:shadow-lg transition border-2 border-accent-maroon/20"
            >
              <Mail className="text-accent-maroon flex-shrink-0" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-bold text-accent-maroon text-lg">team@veloramobitech.systems</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Emergency Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-accent-gold/20 border-2 border-accent-gold rounded-xl p-6 mb-8"
        >
          <p className="text-accent-maroon font-semibold">
            💬 Prefer WhatsApp? <span className="text-green-600">Click the link above to message us!</span>
          </p>
        </motion.div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/')}
          className="w-full py-4 px-6 bg-gradient-to-r from-accent-maroon to-accent-burgundy text-white font-black text-lg rounded-xl hover:shadow-lg transition"
        >
          Back to Home
        </motion.button>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm text-gray-500 mt-6"
        >
          Confirmation email sent to your registered email address
        </motion.p>
      </motion.div>
    </div>
  )
}
