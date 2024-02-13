import React from 'react'
import  axios  from 'axios';
import { FaCoins } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import Crypto from './Crypto';

const Dropdown = () => {

    const [country, setCountry] = useState('usd')

  const changecountry = (e) => {
    setCountry("usd")
  }

  console.log(country)

    
  const url = 
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${country}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`

      const [coins , setcoins] = useState([])

      useEffect(() => {
          axios.get(url)
          .then( response =>   {
          setcoins(response.data)
          console.log(response.data[0])
          }).catch((error) => {
          console.log(error)
          })
          } , [url])

  return (
    <div>
      <div className='navbar'>
        <FaCoins className='icon' />
        <h1> Crypto Coins </h1>
      </div>
      <div className="dropDown">
        <form >
          <label> <h3> Choose your country  :  </h3></label>
          <select className="fc" name="countries" id="count_ry" onChange={changecountry}>
      
            <option value="INR">INDIA</option>
            <option value="USD">UNITED STATES</option>
            <option value="EUR">EUROPE</option>
            <option value="GBP">UNITED KINGDOM</option>
            <option value="AED">UNITED ARAB EMIRATES</option>
            <option value="SGD">SINGAPORE</option>
          </select>
        </form>
      </div>

      <div>
        <Crypto coins={coins} />
      </div>
    </div>
 )
}

export default  Dropdown

