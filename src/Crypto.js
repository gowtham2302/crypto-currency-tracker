import React from 'react'
import Cryptoitems from './Cryptoitems'

const Crypto = (props) => {
  console.log(props)
  return (
    <div className='wh-container'>
      
      <div>
        <div className='header'>
            <p>#</p>
            <p className='coin-nm'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p>Volume</p>
            <p>mrkt cap</p>
        </div>
        {props.coins.map(coin => {
          return(
            < Cryptoitems coins={coin} />
          )
        })}

      </div>
    </div>
  )
}

export default Crypto