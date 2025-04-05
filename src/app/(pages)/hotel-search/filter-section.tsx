"use client"

import { useState } from "react"
import type { ReactNode } from "react"

interface FilterSectionProps {
  title: string
  children: ReactNode
}

export default function FilterSection({ title, children }: FilterSectionProps) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="bg-white rounded-md shadow-sm border mb-4">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-semibold">{title}</h2>
        <span className="text-xs text-gray-500 cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "HIDE" : "SHOW"}
        </span>
      </div>
      {isVisible && <div className="p-4">{children}</div>}
    </div>
  )
}

