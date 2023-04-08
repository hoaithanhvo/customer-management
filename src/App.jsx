import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Event from "./component/event"
import Customer_management from "./component/customer_management"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Customer_management />

      </div>
    </div>
  )
}

export default App
