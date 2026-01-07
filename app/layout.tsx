import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Mountain, Phone, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Holly's Enchanted Gardens LLC - Landscape Design & Seasonal Services | Grafton, WI",
  description:
    "Woman-owned landscape design and seasonal service experts serving Milwaukee, Washington, Ozaukee, and Waukesha counties from our Grafton, WI location. Professional landscaping, seasonal containers, cleanup services, and more.",
  keywords:
    "landscape design, seasonal containers, garden cleanup, snow removal, holiday lighting, Grafton WI, Milwaukee landscaping, Wisconsin garden services",
  openGraph: {
    title: "Holly's Enchanted Gardens LLC - Professional Landscaping Services",
    description:
      "Transform your outdoor space with Holly's Enchanted Gardens. Professional landscape design and seasonal services in Grafton, WI.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-green-600" />
          <span className="text-lg font-bold">Holly&apos;s Enchanted Gardens</span>
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-green-600 hover:underline underline-offset-4">
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-green-600 hover:underline underline-offset-4"
          >
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-green-600 hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+14147088909" className="flex items-center gap-2 text-sm font-medium hover:text-green-600">
            <Phone className="h-4 w-4" />
            (414) 708-8909
          </a>
          <Link href="/quote">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Request a Quote</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-6 w-6 text-green-600" />
              <span className="text-lg font-bold">Holly&apos;s Enchanted Gardens</span>
            </Link>
            <p className="text-sm text-gray-500">
              Woman-owned landscape design and seasonal service experts serving the greater Milwaukee area from our
              Grafton location.
            </p>
            <div className="text-sm font-medium text-green-700">Holly's Enchanted Gardens LLC</div>
            <address className="text-sm text-gray-600 not-italic">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  1416 4th Ave
                  <br />
                  Grafton, WI 53024-2302
                </div>
              </div>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-green-600 hover:underline underline-offset-4">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-600 hover:underline underline-offset-4">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-600 hover:underline underline-offset-4">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services#landscape-design"
                  className="hover:text-green-600 hover:underline underline-offset-4"
                >
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#seasonal-containers"
                  className="hover:text-green-600 hover:underline underline-offset-4"
                >
                  Four-Season Containers
                </Link>
              </li>
              <li>
                <Link href="/services#cleanup" className="hover:text-green-600 hover:underline underline-offset-4">
                  Spring & Fall Cleanup
                </Link>
              </li>
              <li>
                <Link href="/services#snow-removal" className="hover:text-green-600 hover:underline underline-offset-4">
                  Snow Removal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-green-600" />
                <a href="tel:+14147088909" className="hover:text-green-600 hover:underline underline-offset-4">
                  (414) 708-8909
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-green-600" />
                <a
                  href="mailto:hollysenchantedgardens@gmail.com"
                  className="hover:text-green-600 hover:underline underline-offset-4"
                >
                  hollysenchantedgardens@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-green-600" />
                <span>Serving Milwaukee, Washington, Ozaukee, and Waukesha counties</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Holly&apos;s Enchanted Gardens LLC. All rights reserved.
            <br />
            <span className="mt-2 block">
              Professional Landscaping Services in Grafton, WI – Serving the Greater Milwaukee Area
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
