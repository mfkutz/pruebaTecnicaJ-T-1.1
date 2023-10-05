import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('')
  const [gift, setGift] = useState("")

  const GIPHY_APY_KEY = "osRDF5OtkBUJVzWaIcFDl3oYpDQ1CN3h"


  function search(threeFirstWords) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${threeFirstWords}&api_key=${GIPHY_APY_KEY}`)
      .then(request => request.json())
      .then(response => {
        setGift(response.data[0].images.original.url)
      })
      .catch(error => console.error("Error en api gift", error))
  }


  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then(request => request.json())
      .then(response => {
        search(response.fact.split(" ").slice(0, 3).join(' '))
        setData(response)
      })
      .catch(error => console.error("Error en API", error))
  }, [])

  return (
    <>
      <h1>Cats and Gifs</h1>
      <div>
        {data.fact}
        <img src={gift} alt="" />
      </div>
    </>
  )
}

export default App
