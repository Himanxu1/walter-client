import React from 'react'

const Feature = (item) => {
    const {id,title,desciption,img}= item.item

  return (
    <div className='flex mt-20 transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer'>
        {
            id%2==0 ? (
                <>
                <div className='mr-60'>
                    <h2 className='text-white mt-2 text-red-300 font-mono font-bold' >{title}</h2>
                    <p className='text-white w-[500px] mt-4'>{desciption}</p>
                </div>
        <img  src={img} className='w-[300px] h-[300px]' alt='banner' />
                </>
            ) :(
                <>
          <img  src={img} className='w-[300px] h-[300px]' alt='banner' />
                <div className='ml-60'>
                <h2 className='text-white mt-2 text-yellow-300 font-bold font-mono'>{title}</h2>
                <p className='text-white w-[500px] mt-4'>{desciption}</p>
                 </div>
                </>
            )

        }
        
    </div>
  )
}

export default Feature
