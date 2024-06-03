import React from 'react'

function ProductCard({title, image, description}) {
  return (
    <div className='cursor-pointer flex w-[20%] flex-col justify-center items-center bg-slate-600 m-1 rounded-md p-1'>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <span className='text-white font-semibold text-[20px]'>{title}</span>
      </div>
      <div>
        <span className='text-white text-justify'>{description}</span>
      </div>
    </div>
  )
}

export default ProductCard
