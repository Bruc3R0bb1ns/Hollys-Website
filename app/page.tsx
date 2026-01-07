import Link from "next/link"
import { ChevronRight, MapPin, Phone, Leaf, Wind, Calendar, Users } from "lucide-react"
import Image from "next/image"

import { TestimonialCard } from "@/components/testimonial-card"
import { ServiceCard } from "@/components/service-card"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
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
            <div className="inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-lg animate-fade-in">
              ✨ Woman-Owned LLC • Grafton, Wisconsin
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
              Transform Your Outdoor Space with Holly&apos;s Enchanted Gardens
            </h1>
            <p className="text-lg text-white/90 md:text-xl animate-fade-in">
              Professional landscape design and seasonal service experts serving Milwaukee, Washington, Ozaukee, and
              Waukesha counties with vibrant, year-round beauty.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 animate-fade-in"
            >
              Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Woman-Owned LLC • Grafton, WI
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                About Holly&apos;s Enchanted Gardens
              </h2>
              <p className="text-gray-600 md:text-lg">
                Founded by Holly Steffen, a passionate landscape designer with over 15 years of experience, Holly&apos;s
                Enchanted Gardens LLC brings personalized, creative, and sustainable landscaping solutions to homeowners
                throughout the greater Milwaukee area from our headquarters in Grafton, Wisconsin.
              </p>
              <p className="text-gray-600 md:text-lg">
                What sets us apart is our dedication to year-round beauty. We believe your outdoor space should be
                enchanting in every season, from spring blooms to winter wonderlands. Our personalized approach means we
                take the time to understand your vision, lifestyle, and the unique characteristics of your property.
              </p>

              {/* Team Section */}
              <div className="bg-white rounded-xl p-6 border border-green-200 shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Meet Our Team
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                    <div>
                      <p className="font-semibold text-green-800">Holly Steffen</p>
                      <p className="text-sm text-gray-600">Owner & Lead Designer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div>
                      <p className="font-semibold text-green-800">Heidi Rebarchik</p>
                      <p className="text-sm text-gray-600">Office Manager</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-green-600 bg-transparent px-4 py-2 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                >
                  Our Services
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/commercial-containers.jpg"
                alt="Professional seasonal container displays and commercial landscaping featuring vibrant yellow and colorful flowers by Holly's Enchanted Gardens"
                fill
                className="object-cover object-center transition-transform duration-300 hover:scale-105"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Our Services
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive landscaping solutions for every season
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <ServiceCard
              icon={<Leaf className="h-10 w-10 text-green-600" />}
              title="Landscape Design"
              description="Personalized plans, sustainable practices, and artistic approach for your dream garden."
              season="Year-round service"
              href="/services#landscape-design"
            />
            <ServiceCard
              icon={<Calendar className="h-10 w-10 text-green-600" />}
              title="Four-Season Containers"
              description="Rotating seasonal planters for spring, summer, fall, and winter to keep your outdoor space beautiful year-round."
              season="Updated quarterly"
              href="/services#seasonal-containers"
            />
            <ServiceCard
              icon={<Wind className="h-10 w-10 text-green-600" />}
              title="Spring & Fall Cleanup"
              description="Comprehensive debris removal, pruning, and soil preparation to keep your garden healthy and beautiful."
              season="Book early for best availability"
              href="/services#cleanup"
            />
          </div>
          <div className="flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            >
              View All Services <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Service Areas
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Serving the greater Milwaukee area from our Grafton, Wisconsin headquarters
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-green-200 bg-white p-6 text-center shadow-sm">
              <MapPin className="h-10 w-10 text-green-600" />
              <h3 className="text-xl font-bold">Milwaukee</h3>
              <p className="text-sm text-gray-500">County</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-green-200 bg-white p-6 text-center shadow-sm">
              <MapPin className="h-10 w-10 text-green-600" />
              <h3 className="text-xl font-bold">Washington</h3>
              <p className="text-sm text-gray-500">County</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-green-200 bg-white p-6 text-center shadow-sm">
              <MapPin className="h-10 w-10 text-green-600" />
              <h3 className="text-xl font-bold">Ozaukee</h3>
              <p className="text-sm text-gray-500">County</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-green-200 bg-white p-6 text-center shadow-sm">
              <MapPin className="h-10 w-10 text-green-600" />
              <h3 className="text-xl font-bold">Waukesha</h3>
              <p className="text-sm text-gray-500">County</p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-xl mt-8 bg-green-100 border border-green-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Our Service Area</h3>
              <p className="text-gray-600 max-w-md">
                Based in Grafton, Wisconsin, we proudly serve Milwaukee, Washington, Ozaukee, and Waukesha counties with
                professional landscaping services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from homeowners who have experienced the Holly&apos;s Enchanted Gardens difference
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
            <TestimonialCard
              quote="Holly and her team do a great job sprucing up yards and mulch beds. The spruce trees she planted look great."
              author="Kyle Rosengren"
              location="Cedarburg, Wisconsin"
            />
            <TestimonialCard
              quote="Absolutely amazing work - they were able to completely transform my backyard! Very reasonably priced, very amazing work and everyone was super nice! I recommend them 100%!"
              author="Abby Schmidt"
              location="Mequon, Wisconsin"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-green-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let&apos;s bring your garden to life
              </h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to transform your outdoor space? Reach out today for a personalized consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-green-800 shadow-lg transition-colors hover:bg-green-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+14147088909"
                className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="mr-2 h-4 w-4" /> (414) 708-8909
              </a>
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
              "Woman-owned landscape design and seasonal service experts serving Milwaukee, Washington, Ozaukee, and Waukesha counties from Grafton, Wisconsin.",
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
            founder: {
              "@type": "Person",
              name: "Holly Steffen",
            },
            employee: [
              {
                "@type": "Person",
                name: "Holly Steffen",
                jobTitle: "Owner",
              },
              {
                "@type": "Person",
                name: "Heidi Rebarchik",
                jobTitle: "Office Manager",
              },
            ],
          }),
        }}
      />
    </main>
  )
}
