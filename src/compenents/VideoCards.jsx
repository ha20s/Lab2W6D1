import React from "react";

function VideoCards(props) {
    return (
      <div className='flex lg:flex-row flex-col justify-between w-full'>
        <img className='object-cover w-[30%] lg:mr-4 mb-4 ' src={props.img} alt={props.title} />
        <div className='lg:w-[70%]'>
          <p className='text-xl font-bold'>{props.title}</p>
          <p className='text-sm text-gray'>{props.des}</p>
        </div>
      </div>
    );
  }
  

export default VideoCards;
