import React from 'react'

function LastesCards(props) {
  return (
    <div>
    <img src={props.img} alt="Grilled Flank Steak with Chimichurri" />
    <p className='text-2xl my-2'>{props.title}</p>
    <p className='my-5 text-gray'>{props.des}</p>
    <button className='text-pink'>Read More →</button>
    </div>
  )
}

export default LastesCards
