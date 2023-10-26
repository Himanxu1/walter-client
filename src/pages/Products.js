import React,{useEffect,useState} from 'react'
import ProductCard from '../components/ProductCard'
import useProductList from '../utils/useProductList'

import { useNavigate } from 'react-router-dom'


export const Products = () => {

  const [filteredProducts,setFilteredProducts] = useState([])
  const [searchItem,setSearchItem] = useState("")

  const products = useProductList(setFilteredProducts)
  const navigate = useNavigate() 
  
  const filterData = (products,searchItem)=>{
      const list = products.filter((product) => product.name.toLowerCase().includes(searchItem.toLowerCase()))

      setFilteredProducts(list)
  }

 
  useEffect(()=>{
    filterData(products,searchItem)
 },[searchItem])



  return (
    <div className='bg-black w-full'>
      <div className='flex justify-center'>
       <input  className='px-14 py-2 border border-white bg-black text-white' placeholder='Search Headphone' 
        onChange={(e)=>setSearchItem(e.target.value)}
        />
      </div>
        <h1 className='text-center text-[100px] font-bold text-white'>/all-Products</h1>
         <div className='flex flex-wrap justify-center mt-20'>
      { filteredProducts.length === 0 ? <div className='text-center font-mono text-3xl text-white'>loading👀...</div>: filteredProducts.map((singleProduct,index)=>{
            return (
              <>
               <ProductCard key={singleProduct.id} singleProduct={singleProduct} wish={false} />
              </>
            )
          })} 
    
         </div>
    </div>
  )
}