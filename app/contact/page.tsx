"use client"

import { MapPin, Phone, Mail, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/enhanced-landscape-hero.png"
            alt="Beautiful landscaped outdoor space with stone retaining walls, vibrant red flowers, and lush greenery by Holly's Enchanted Gardens"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-start gap-4 text-white max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-lg text-white/90 md:text-xl animate-fade-in">
              Let&apos;s bring your garden to life—reach out today for a consultation or quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">Contact Information</h2>
                <p className="text-gray-600 md:text-lg">
                  Have questions or ready to get started? Reach out to us using any of the methods below, or fill out
                  the form to request a quote.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-sm text-gray-600">Visit us at our Grafton location</p>
                    <address className="text-green-600 not-italic">
                      1416 4th Ave
                      <br />
                      Grafton, WI 53024-2302
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-gray-600">Call us during business hours</p>
                    <a href="tel:+14147088909" className="text-green-600 hover:underline">
                      (414) 708-8909
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                    <a href="mailto:hollysenchantedgardens@gmail.com" className="text-green-600 hover:underline">
                      hollysenchantedgardens@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
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

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Service Area</h3>
                    <p className="text-sm text-gray-600">
                      Serving Milwaukee, Washington, Ozaukee, and Waukesha counties from our Grafton headquarters
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Information */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200 shadow-sm">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Meet Our Team
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-600"></div>
                    <div>
                      <p className="font-semibold text-green-800">Holly Steffen</p>
                      <p className="text-sm text-gray-600">Owner & Lead Designer</p>
                      <p className="text-xs text-gray-500">15+ years of landscaping experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div>
                      <p className="font-semibold text-green-800">Heidi Rebarchik</p>
                      <p className="text-sm text-gray-600">Office Manager</p>
                      <p className="text-xs text-gray-500">Scheduling & customer service</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-800">Find Us</h3>
                <div className="relative h-[300px] overflow-hidden rounded-xl border border-green-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.8234567890123!2d-87.9512345!3d43.3234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1416%204th%20Ave%2C%20Grafton%2C%20WI%2053024!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Holly's Enchanted Gardens Location - 1416 4th Ave, Grafton, WI 53024"
                    className="rounded-xl"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Located in the heart of Grafton, Wisconsin, we're perfectly positioned to serve the greater Milwaukee
                  area.
                </p>
              </div>
            </div>

            {/* Form column */}
            <div className="space-y-4 max-w-md w-full mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">Request a Quote</h2>
              <p className="text-gray-600 mb-6">
                Ready to get started? Visit our dedicated quote request page for a comprehensive form.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="font-semibold text-green-800 mb-2">Get Your Free Quote</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Fill out our detailed quote request form and we'll get back to you within 24 hours.
                </p>
                <Link href="/quote">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    Go to Quote Request Form
                  </Button>
                </Link>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  Or call us directly at{" "}
                  <a href="tel:+14147088909" className="text-green-600 hover:underline font-medium">
                    (414) 708-8909
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Holly's Enchanted Gardens LLC",
            description:
              "Woman-owned landscape design and seasonal service experts serving Milwaukee, Washington, Ozaukee, and Waukesha counties.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1416 4th Ave",
              addressLocality: "Grafton",
              addressRegion: "WI",
              postalCode: "53024-2302",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "43.3234567",
              longitude: "-87.9512345",
            },
            telephone: "+1-414-708-8909",
            email: "hollysenchantedgardens@gmail.com",
            url: "https://hollysenchantedgardens.com",
            openingHours: ["Mo-Sa 07:00-19:00"],
            serviceArea: [
              {
                "@type": "AdministrativeArea",
                name: "Milwaukee County, Wisconsin",
              },
              {
                "@type": "AdministrativeArea",
                name: "Washington County, Wisconsin",
              },
              {
                "@type": "AdministrativeArea",
                name: "Ozaukee County, Wisconsin",
              },
              {
                "@type": "AdministrativeArea",
                name: "Waukesha County, Wisconsin",
              },
            ],
            priceRange: "$$",
            image: "/images/enhanced-landscape-hero.png",
            sameAs: [],
          }),
        }}
      />
    </main>
  )
}
