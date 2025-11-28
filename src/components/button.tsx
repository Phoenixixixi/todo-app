import React from 'react'

type ButtonComponent = {
  onClick: () => void
  children: React.ReactNode
}
export default function Button({ children, onClick }: ButtonComponent) {
  return (
    <button
      className="p-2 bg-cyan-300 text-white rounded-sm shadow-lg
        cursor-pointer active:scale-95 duration-100"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
