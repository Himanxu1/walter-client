import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Wishlist = () => {

    const wishItems = useSelector((store)=>store.wish.items)
   

  return (
    <div className='bg-black w-full'>
        
        <h1 className='text-center text-[100px] font-bold text-white'>/wishlist</h1>
        <div className='flex flex-wrap justify-center mt-20'>
        { wishItems.length ===0 ?<div className='text-white text-3xl font-mono '>Wishlist is empty👀</div>: wishItems.map((singlewishitem)=>{
                return (
                    <div>
                        <ProductCard singleProduct={singlewishitem}  key={singlewishitem.id} wish={true} />
                       
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Wishlist
