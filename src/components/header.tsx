import Button from './button'
import React from 'react'

type HeaderProps = {
  onToogle: () => void
}

export default function Header({ onToogle }: HeaderProps) {
  return (
    <header className="p-8 w-full bg-linear-to-r from-cyan-400 to-lime-400 flex justify-between">
      <h1 className="text-4xl font-bold text-white">Todo List</h1>
      <Button onClick={onToogle}>Add Data</Button>
    </header>
  )
}
