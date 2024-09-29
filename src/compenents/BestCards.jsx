import React from 'react'

function BestCards(props) {
  return (
 <div className='my-5'>
        <img src={props.img} alt="" />
        <p className='text-3xl my-2'>{props.title}</p>
        <p className='text-gray'>{props.des}</p>
    </div>
  )
}

export default BestCards
