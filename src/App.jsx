import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [events, setEvents] = useState([])

  console.log(events)
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("https://api.seatgeek.com/2/events?client_id=MzI2OTE3ODd8MTY4MDAzNDAxMC4yNzMxODcy")
      const json = await response.json()
      setEvents(json)
    }
    fetchEvents().catch(console.error)
  }, [])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
