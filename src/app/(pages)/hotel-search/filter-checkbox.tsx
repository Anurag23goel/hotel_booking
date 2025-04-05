"use client"

interface FilterCheckboxProps {
  id: string
  label: string
  count: number
  checked?: boolean
  onChange?: () => void
}

export default function FilterCheckbox({ id, label, count, checked = false, onChange }: FilterCheckboxProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <input type="checkbox" id={id} className="h-4 w-4" checked={checked} onChange={onChange} />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <span className="text-xs text-gray-500 ml-auto">{count}</span>
    </div>
  )
}

