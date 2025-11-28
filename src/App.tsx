import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Form from './components/form'
import Card from './components/card'
import { useAppSelector } from './app/hooks'

function App() {
  const [isEnable, setIsEnable] = useState<boolean>(false)

  const todos = useAppSelector((state) => state.todo.list)

  const toogleEnabled = () => {
    setIsEnable((prev) => !prev)
  }

  return (
    <div className="w-full h-full">
      <Header onToogle={toogleEnabled} />
      {isEnable ? <Form /> : <div></div>}
      <div className="mt-12 p-4 grid grid-cols-4 gap-4">
        {todos.map((todo) => (
          <Card data={todo} key={todo.id} />
        ))}
      </div>
    </div>
  )
}

export default App
