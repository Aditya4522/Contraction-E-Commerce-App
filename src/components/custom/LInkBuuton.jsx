import React from 'react'
import { Link } from 'react-router-dom'

export default function LInkBuuton({text="Click Here", to="/"}) {
  return (
    <Link to={to} className= " bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
    >
      {text}
    </Link>
  )
}
