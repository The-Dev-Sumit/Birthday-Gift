import React from 'react'
import NoPageImg from '../assets/images/error.png'

const NoPage = () => {
    return (
      <div className='h-screen w-full bg-white'>   
      <div className='flex flex-col justify-center items-center py-14'>
          <h1 className='er1 text-[4rem] font-Bebas font-bold'>
              Error 404 : Not Found 
          </h1>
          <img className='er2 h-[22rem] w-[22rem]' src={NoPageImg} />
            </div>
                  </div>
  )
}

export default NoPage