'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function BookingPage() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    journeyType: 'airport-to-campus', // airport-to-campus, campus-to-airport, round-trip, campus-internal
    bundle: 'one-way', // one-way, round-trip, round-trip-campus, packages
    travelDate: '',
    flightTrainNo: '',
    passengers: '',
    rideType: 'private', // private, shared, auto-match
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send to Google Apps Script
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwjcuIkb5l59KzT_lThr6MqsB7zKk0EBjgkIaWz674Bp7k5to67TlJL0mmmSRS1APpeOA/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(formData),
        }
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: '',
        journeyType: 'airport-to-campus',
        bundle: 'one-way',
        travelDate: '',
        flightTrainNo: '',
        passengers: '',
        rideType: 'private',
        notes: '',
      })

      // Show success for 2 seconds then redirect to confirmation page
      setTimeout(() => {
        navigate('/booking-confirmation')
      }, 2000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Failed to submit booking. Please try again.')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-accent-maroon hover:text-accent-burgundy transition mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>

          <h1 className="text-4xl sm:text-5xl font-black text-accent-maroon mb-2">Book Your Ride</h1>
          <p className="text-lg text-gray-600">Fill in your details below. We'll confirm your booking within 2 hours.</p>
        </motion.div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-green-50 border-2 border-green-400 rounded-2xl p-6 flex items-start gap-4"
          >
            <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-green-900 text-lg mb-1">Booking Submitted Successfully!</h3>
              <p className="text-green-800">Check your email for confirmation. Redirecting you now...</p>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-red-50 border-2 border-red-400 rounded-2xl p-6 flex items-start gap-4"
          >
            <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-red-900 text-lg mb-1">Submission Failed</h3>
              <p className="text-red-800">{errorMessage}</p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-3xl shadow-xl p-8 sm:p-12"
        >
          {/* Personal Information Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-accent-maroon mb-8">Personal Information</h2>
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Department *</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Computer Science"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Travel Details Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-accent-maroon mb-8">Travel Details</h2>
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Journey Type *</label>
                  <select
                    name="journeyType"
                    value={formData.journeyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900 bg-white"
                  >
                    <option value="airport-to-campus">Airport → Campus</option>
                    <option value="campus-to-airport">Campus → Airport</option>
                    <option value="round-trip">Round Trip (Airport)</option>
                    <option value="campus-internal">Within Campus</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Bundle Type *</label>
                  <select
                    name="bundle"
                    value={formData.bundle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900 bg-white"
                  >
                    <option value="one-way">One Way (₹649)</option>
                    <option value="round-trip">Round Trip (₹1249)</option>
                    <option value="round-trip-campus">Round Trip + Campus (₹1649)</option>
                    <option value="packages">Tourism Package</option>
                  </select>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Date *</label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Flight/Train Number</label>
                  <input
                    type="text"
                    name="flightTrainNo"
                    value={formData.flightTrainNo}
                    onChange={handleChange}
                    placeholder="e.g., AI101, 12345"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Passengers *</label>
                  <input
                    type="number"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    required
                    min="1"
                    max="8"
                    placeholder="1"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ride Type *</label>
                  <select
                    name="rideType"
                    value={formData.rideType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900 bg-white"
                  >
                    <option value="private">Private Ride (Standard)</option>
                    <option value="shared">Shared Ride (30% Savings)</option>
                    <option value="auto-match">Auto Match Me (40% Savings)</option>
                  </select>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-accent-maroon mb-8">Additional Information</h2>
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests or Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special requirements, luggage info, or additional notes..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent-gold focus:outline-none transition text-gray-900 resize-none"
              />
            </motion.div>
          </motion.div>

          {/* Pricing Info */}
          <motion.div
            variants={itemVariants}
            className="mb-12 p-6 bg-gradient-to-r from-accent-maroon/5 to-accent-burgundy/5 rounded-2xl border-2 border-accent-gold/30"
          >
            <h3 className="font-bold text-accent-maroon mb-3">Pricing</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Base Fare (as per bundle)</span>
                <span className="font-semibold text-accent-maroon">₹{formData.bundle === 'one-way' ? '649' : formData.bundle === 'round-trip' ? '1249' : '1649'}</span>
              </div>
              {formData.rideType === 'shared' && (
                <div className="flex justify-between text-green-600">
                  <span>Ride Sharing Discount (30%)</span>
                  <span className="font-semibold">-₹{Math.floor((parseInt(formData.bundle === 'one-way' ? '649' : formData.bundle === 'round-trip' ? '1249' : '1649') * 0.3))}</span>
                </div>
              )}
              {formData.rideType === 'auto-match' && (
                <div className="flex justify-between text-green-600">
                  <span>Auto Match Discount (40%)</span>
                  <span className="font-semibold">-₹{Math.floor((parseInt(formData.bundle === 'one-way' ? '649' : formData.bundle === 'round-trip' ? '1249' : '1649') * 0.4))}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-accent-maroon to-accent-burgundy text-white font-black text-lg rounded-xl hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting Your Booking...' : 'Complete Booking'}
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              * Required fields. We'll send a confirmation email shortly.
            </p>
          </motion.div>
        </motion.form>
      </div>
    </div>
  )
}
