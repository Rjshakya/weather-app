import React from 'react'

const AqiDiv = ({data}) => {


    
  const aqi = data && Math.floor(data.current.air_quality.pm10)
   
    

  return (
    <div className='aqi-container mt-10  px-2 col-span-1'>
        <div className="wrapper bg-red-400 py-8 px-4 flex flex-col gap-4 rounded-3xl shadow-inner shadow-red-300 border border-red-300">
            <div className="title ">
                <p className=' text-6xl tracking-tighter'>
                   {
                     data && aqi
                   }
                </p>
            </div>

            <div className="divider w-full h-[1px] mt-10 dark:bg-red-300 bg-red-300 "></div>

            <div className="label">
                <p className='font-mono tracking-wide text-2xl'>Aqi</p>
            </div>
        </div>
    </div>
  )
}

export default AqiDiv