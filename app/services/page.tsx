import Link from "next/link"
import { ChevronRight, Leaf, Snowflake, Wind, Calendar, Droplets, Gift, Phone } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ServiceDetailCard } from "@/components/service-detail-card"

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-lg text-white/90 md:text-xl animate-fade-in">
              Comprehensive landscaping solutions for every season of the year
            </p>
            <Link href="/quote" className="animate-fade-in">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div id="landscape-design" className="scroll-mt-20">
            <ServiceDetailCard
              icon={<Leaf className="h-12 w-12 text-green-600" />}
              title="Landscape Design"
              description="Our personalized landscape design service begins with understanding your vision, lifestyle, and the unique characteristics of your property. We create sustainable, artistic plans that transform your outdoor space into a beautiful, functional extension of your home."
              benefits={[
                "Custom designs tailored to your property and preferences",
                "Sustainable plant selections suited for Wisconsin's climate",
                "Expert advice on materials, layout, and long-term maintenance",
                "Phased implementation options to fit your budget",
              ]}
              seasonalNote="Landscape design consultations are available year-round, with implementation scheduled during appropriate planting seasons."
              imageSrc="/images/landscape-design.jpg"
              imageAlt="Beautiful mature landscape design featuring stone pathways, mixed perennial plantings, ornamental grasses, and a charming stone gazebo by Holly's Enchanted Gardens"
            />
          </div>

          <div id="seasonal-containers" className="scroll-mt-20 mt-16">
            <ServiceDetailCard
              icon={<Calendar className="h-12 w-12 text-green-600" />}
              title="Four-Season Containers"
              description="Keep your outdoor space beautiful year-round with our rotating seasonal container service. We design, install, and maintain stunning planters that change with the seasons, ensuring your home always looks its best."
              benefits={[
                "Custom container designs for spring, summer, fall, and winter",
                "Professional installation and seasonal rotation",
                "High-quality plants selected for maximum impact and longevity",
                "Optional maintenance service to keep containers looking fresh",
              ]}
              seasonalNote="Container rotations typically occur in early spring, summer, fall, and for the holiday season."
              imageSrc="/images/seasonal-containers.jpg"
              imageAlt="Beautiful fall seasonal display featuring colorful mums, pumpkins, gourds, and creative autumn decorations by Holly's Enchanted Gardens"
            />
          </div>

          <div id="cleanup" className="scroll-mt-20 mt-16">
            <ServiceDetailCard
              icon={<Wind className="h-12 w-12 text-green-600" />}
              title="Spring & Fall Cleanup"
              description="Our comprehensive cleanup services prepare your garden for the growing season in spring and for winter protection in the fall. We handle debris removal, pruning, soil preparation, and more to keep your landscape healthy and beautiful."
              benefits={[
                "Thorough removal of leaves, branches, and garden debris",
                "Professional pruning and trimming of shrubs and perennials",
                "Soil preparation and mulching as needed",
                "Lawn dethatching and aeration options",
              ]}
              seasonalNote="Book early for spring (March-May) and fall (September-November) cleanups as these are our busiest seasons."
              imageSrc="/images/fall-cleanup.jpg"
              imageAlt="Professional fall cleanup service with rake gathering colorful autumn leaves by Holly's Enchanted Gardens"
            />
          </div>

          <div id="gutters" className="scroll-mt-20 mt-16">
            <ServiceDetailCard
              icon={<Droplets className="h-12 w-12 text-green-600" />}
              title="Gutter & Downspout Cleaning"
              description="Protect your home and landscaping with our gutter and downspout cleaning service. We remove leaves, debris, and blockages to ensure proper water drainage and prevent damage to your foundation and gardens."
              benefits={[
                "Complete removal of leaves and debris from gutters",
                "Downspout clearing and testing",
                "Minor repairs and adjustments as needed",
                "Inspection for potential issues",
              ]}
              seasonalNote="Recommended in late fall after leaves have fallen and in spring to prepare for rainy season."
              imageSrc="/images/gutter-cleaning.jpg"
              imageAlt="Professional gutter cleaning service removing leaves and debris from residential gutters by Holly's Enchanted Gardens"
            />
          </div>

          <div id="snow-removal" className="scroll-mt-20 mt-16">
            <ServiceDetailCard
              icon={<Snowflake className="h-12 w-12 text-green-600" />}
              title="Snow Removal"
              description="Keep your property safe and accessible during Wisconsin winters with our reliable snow removal service. We clear driveways, walkways, and small commercial areas promptly after snowfall."
              benefits={[
                "Prompt service after snowfall events",
                "Careful attention to prevent damage to landscaping",
                "De-icing options available",
                "Seasonal contracts or per-visit service",
              ]}
              seasonalNote="Seasonal contracts available starting in October. Limited availability for new clients, book early!"
              imageSrc="/images/snow-removal.jpg"
              imageAlt="Professional snow removal service clearing driveways and walkways by Holly's Enchanted Gardens"
            />
          </div>

          <div id="holiday" className="scroll-mt-20 mt-16">
            <ServiceDetailCard
              icon={<Gift className="h-12 w-12 text-green-600" />}
              title="Holiday Lighting & Decorations"
              description="Make your home festive and welcoming during the holiday season with our custom lighting and decoration service. We handle everything from design to installation to takedown."
              benefits={[
                "Custom design to complement your home's architecture",
                "Professional installation with attention to safety",
                "High-quality, energy-efficient lighting options",
                "Complete removal and storage service after the season",
              ]}
              seasonalNote="Book by October 1st to ensure availability for the holiday season."
              imageSrc="/images/holiday-lighting.jpg"
              imageAlt="Holly's Enchanted Gardens professional holiday lighting installation with colorful tree displays and business signage"
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
                Ready to transform your outdoor space?
              </h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your landscaping needs and schedule a consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-white text-green-800 hover:bg-green-100">
                  Request a Quote
                </Button>
              </Link>
              <a href="tel:+14141234567">
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent">
                  <Phone className="mr-2 h-4 w-4" /> (414) 708-8909
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
