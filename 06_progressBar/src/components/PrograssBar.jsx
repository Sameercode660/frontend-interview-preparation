import React from 'react'
import {useState, useEffect} from 'react'

function PrograssBar({value}) {


  const [width, setWidth] = useState(0)
  let intervalId = null;


  

  function progress () {
    intervalId = setInterval(()=> {
        setWidth(prev => prev >= 100 ? 100 : prev + 1 )
    }, 200)
  }

  
  useEffect(() => {
    progress()
  }, [])

  return (
    <div className='w-[300px] overflow-hidden relative z-0 bg-gray-300 rounded-xl m-auto h-[25px]'>
      <span className='relative z-30'>{width}%</span>
      <div className={`h-[25px] bg-green-300 rounded-xl relative z-20 top-[-24px] transition-all duration-100 ease-in `} style={{width: `${width}%`}}></div>
    </div>
  )
}

export default PrograssBar
