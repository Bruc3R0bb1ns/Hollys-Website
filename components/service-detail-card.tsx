import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

interface ServiceDetailCardProps {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  seasonalNote: string
  imageSrc: string
  imageAlt: string
  pricing?: string
}

export function ServiceDetailCard({
  icon,
  title,
  description,
  benefits,
  seasonalNote,
  imageSrc,
  imageAlt,
  pricing,
}: ServiceDetailCardProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2">
          {icon}
          <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
        </div>
        <p className="text-gray-600">{description}</p>

        <div className="space-y-2">
          <h3 className="font-medium">Benefits:</h3>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg bg-green-50 p-4 border border-green-100">
          <h3 className="font-medium text-green-800">Seasonal Note:</h3>
          <p className="text-sm text-gray-600 mt-1">{seasonalNote}</p>
        </div>

        {pricing && (
          <div className="rounded-lg bg-blue-50 p-4 border border-blue-100">
            <h3 className="font-medium text-blue-800">Pricing:</h3>
            <p className="text-sm text-gray-600 mt-1">{pricing}</p>
          </div>
        )}

        <Link
          href="/quote"
          className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        >
          Request a Quote
        </Link>
      </div>

      <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg group">
        <Image
          src={imageSrc || "/placeholder.svg?height=800&width=600"}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          loading="lazy"
        />
      </div>
    </div>
  )
}
