import React from 'react'
import '../loader.css'

import Navbar from './Navbar.jsx'
import TransactionList from './TransactionList.jsx'
import AddTransaction from './AddTransaction.jsx'
import Analytics from './Analytics.jsx'
import CurrencyConverter from './CurrencyConverter.jsx'
import Palette from './Palette.jsx'

export default function API() {

  {/**
    //////////////////////////////////////////////////// DE JHONY, NO MODIFICADO, DESDE AQUI/////////////////////////////////////////////
  */}
  const [posts, setPosts] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      setPosts(data)
      setIsLoading(false)
    }).catch((error) => {
      /* Error */
    })
  }, [])
  {/**
    //////////////////////////////////////////////////// DE JHONY, HASTA AQUI/////////////////////////////////////////////
  */}


  return (
    <>
      <div>
        <Navbar />
        <div className = "container">
          <div className = "row">
            <div className = "col-sm-12 col-lg-6">
              <TransactionList />
            </div>
            <div className = "col-sm-12 col-lg-6">
                <AddTransaction />
                <Analytics />
                <CurrencyConverter />
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  )
}