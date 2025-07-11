"use client"

export default function QuotePage() {
  return (
    <main className="flex-1 bg-green-50 min-h-screen py-12">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800 mb-4">
            Holly's Enchanted Gardens Quote
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your outdoor space? Fill out the form below and we'll get back to you with a personalized
            quote within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full md:w-3/4 mx-auto">
          {/* Professional Contact Block */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 md:p-12 text-center">
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-green-800">Get in Touch</h2>
                  <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                    We'd love to hear from you. Click the button below to fill out our form.
                  </p>
                </div>

                {/* Contact Form Button */}
                <div className="pt-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeJLcfcOdk8K4anKM0LIjk6IWcd5TjmOp4iGPbumcdE2RifkQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"
                  >
                    Fill Out Our Contact Form
                    <svg
                      className="ml-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* Additional Info */}
                <div className="pt-6 border-t border-green-100">
                  <p className="text-sm text-gray-500 mb-3">Prefer to call or email directly?</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="tel:+14147088909"
                      className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      (414) 708-8909
                    </a>
                    <span className="hidden sm:block text-gray-300">•</span>
                    <a
                      href="mailto:hollysenchantedgardens@gmail.com"
                      className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Email Us
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-green-50 rounded-xl p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Business Hours</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Saturday:</span>
                      <span className="font-medium">7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-8 p-6 bg-white rounded-xl border border-green-200 shadow-sm">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Need to speak with us directly?</h3>
          <p className="text-gray-600 mb-4">
            Call us at{" "}
            <a href="tel:+14147088909" className="text-green-600 hover:underline font-medium">
              (414) 708-8909
            </a>{" "}
            or email us at{" "}
            <a href="mailto:hollysenchantedgardens@gmail.com" className="text-green-600 hover:underline font-medium">
              hollysenchantedgardens@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-500">Business Hours: Monday - Saturday, 7:00 AM - 7:00 PM</p>
        </div>
      </div>
    </main>
  )
}
