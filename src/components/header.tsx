import Button from './button'
export default function Header() {
  return (
    <header className="p-8 w-full bg-linear-to-r from-cyan-400 to-lime-400 flex justify-between">
      <h1 className="text-4xl font-bold text-white">Todo List</h1>
      <Button>Add Data</Button>
    </header>
  )
}
