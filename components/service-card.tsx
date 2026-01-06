import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  season: string
  href: string
}

export function ServiceCard({ icon, title, description, season, href }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 space-y-4 rounded-lg border border-green-100 bg-white shadow-sm transition-all hover:shadow-md hover:border-green-200">
      <div className="p-2 rounded-full bg-green-50">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-green-600 font-medium">{season}</p>
      <Link href={href} className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700">
        Learn more <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}
