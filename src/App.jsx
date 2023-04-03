import { useState, useEffect } from 'react'
import './App.css'
import Event from './Components/Event';
import NavBar from './Components/NavBar';

const API_KEY = import.meta.env.CLIENT_ID;

function App() {
  const [list, setList] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("")
  
  
  
  console.log(list)
  
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("https://api.seatgeek.com/2/events?client_id=MzI2OTE3ODd8MTY4MDAzNDAxMC4yNzMxODcy")
      const json = await response.json()
      setList(json.events)
      
    }
    fetchEvents().catch(console.error)
    
  }, [])

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = list.filter((item) => 
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list));
    }
  };

  const filterItems = filterValue => {
    setFilterInput(filterInput)
    if(filterValue !== "") {
      const filteredData = list.filter((item) => 
      Object.values(item)
          .join("")
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list));
    }
  }

  //console.log(filteredResults)
  return (
    <div className="whole-page">
      <NavBar />
      
      <div className='container'>

        <div className='filterContainer'>
          <div className='input'>
            <input 
                type="text"
                placeholder='Search...' 
                onChange={(inputString) => searchItems(inputString.target.value)}
            />
            </div>
          <div className='cities'>
            <select name="" id="cities" onSelect={(inputString) => filterItems(inputString.target.value)}>
              {list.map((event) => 
                <option value="event.venue.city" key={event.id}>{event.venue.city}</option>
                
              )}
            </select>
          </div>
        </div>

        <div className='eventContainer'>
          {searchInput.length > 0 
            ? filteredResults.map((event) =>
              <Event 
                image = {event.performers[0].image}
                title = {event.performers[0].name}
                date = {event.datetime_utc}
                place = {event.venue.city}
                id = {event.id}
                key={event.id}
                /> 
            )
            : list && Object.entries(list).map(([event]) => 
              <Event 
                image = {list[event].performers[0].image}
                title = {list[event].performers[0].name}
                id = {list[event].id}
                place = {list[event].venue.city}
                date = {event.datetime_utc}
              />
            )
            
            }
        </div>  
      </div>
    </div>
  )
}

export default App
