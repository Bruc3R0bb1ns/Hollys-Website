import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
}

export function TestimonialCard({ quote, author, location }: TestimonialCardProps) {
  return (
    <div className="flex flex-col space-y-4 rounded-lg border border-green-100 bg-white p-6 shadow-sm">
      <Quote className="h-8 w-8 text-green-200" />
      <p className="text-gray-600 italic">{quote}</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  )
}
