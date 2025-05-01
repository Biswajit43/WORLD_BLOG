import React from 'react';

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            We Value Your Feedback
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Your insights help us improve our services. Please share your thoughts, suggestions, or concerns using the form below.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Form Header */}
          <div className="bg-blue-700 py-4 px-6">
            <h2 className="text-white text-xl font-semibold">Feedback Form</h2>
          </div>
          
          {/* Google Form */}
          <div className="p-2 md:p-6">
            <div className="relative rounded-md overflow-hidden shadow-inner bg-gray-50">
              <iframe 
                className="w-full"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeJoOMrs4YiwIkacPvD44ecDVBw35lb9p5YoqV1NEz0HjWfBQ/viewform?embedded=true"
                height="650"
                frameBorder="0"
                title="Feedback Form"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-500 text-2xl mb-4">⏱️</div>
            <h3 className="font-semibold text-gray-800 mb-2">Quick Response</h3>
            <p className="text-gray-600 text-sm">We aim to respond to all feedback within 48 hours.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-500 text-2xl mb-4">🔒</div>
            <h3 className="font-semibold text-gray-800 mb-2">Private & Secure</h3>
            <p className="text-gray-600 text-sm">Your feedback is handled with the utmost confidentiality.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-500 text-2xl mb-4">💬</div>
            <h3 className="font-semibold text-gray-800 mb-2">Alternative Contact</h3>
            <p className="text-gray-600 text-sm">Prefer to email us directly? Contact support@example.com</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>Thank you for helping us improve. Your feedback makes a difference.</p>
        </div>
      </div>
    </div>
  );
}