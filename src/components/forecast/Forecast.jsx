import React from 'react'

function Forecast({title}) {
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
      <div className='flex items-center justify-start'>
        <p className='text-light font-medium uppercase'>{title}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-blue w-6/12 mt-2">
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04;30Ap</p>
            <img src="" alt="" className="w-12 my-1"/>
            <p className="font-medium">ss</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04;30Ap</p>
            <img src="" alt="" className="w-12 my-1"/>
            <p className="font-medium">ss</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04;30Ap</p>
            <img src="" alt="" className="w-12 my-1"/>
            <p className="font-medium">ss</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04;30Ap</p>
            <img src="" alt="" className="w-12 my-1"/>
            <p className="font-medium">ss</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04;30Ap</p>
            <img src="" alt="" className="w-12 my-1"/>
            <p className="font-medium">ss</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast
