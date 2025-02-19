import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { Show } from './components/Show'

function App() {

  const [country, setCountry] = useState([])

    
  

  return (
    <>
      <h1>Buscador de paises</h1>
      <Search setCountry={setCountry}/>
      <Show element={country} />
    </>
  )
}

export default App
