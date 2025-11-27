import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { Provider } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-full">
      <Header />
    </div>
  )
}

export default App
