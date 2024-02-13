import React from 'react'

const Cryptoitems = (props) => {
  return (
    <div className='cy-row'>
        <p>{props.coins.id}</p>
        <div className='cy-img'>
          <img src={props.coins.image} alt=''></img>
          <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>{props.coins.current_price.toLocaleString()} </p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p>{props.coins.total_volume.toLocaleString()}</p>
        <p>{props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default Cryptoitems
