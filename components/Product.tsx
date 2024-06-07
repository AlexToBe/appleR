import { urlFor } from '@/sanity';
import React from 'react'
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/redux/busketSlice';
import toast from 'react-hot-toast';
interface Props{
    product: Product;
}


const Product = ({ product }: Props) => {
    const dispatch = useDispatch()


    const addItemToBasket = () =>{
        dispatch(addToBasket(product))
        toast.success(`${product.title} added to basket`, {
            position: 'bottom-center',
        })

}


  return (
      <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383c]
         p-8 md:h-[500px] md:w-[400px] md:p-10'
      >
          <div className='relative h-64 w-full md:h-72' >
          <Image src={urlFor(product.image[0]).url()} fill = {true} sizes='100vh' alt = '' style ={{objectFit:'contain'}}  />
          </div>

          <div className='flex flex-1 items-center justify-between space-x-3' >
              <div className=' space-y-2 text-xl text-white md:text-2xl'>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
              </div>
              <div className='flex items-center justify-center h-16 w-16 cursor-pointer flex-shrink-0 rounded-full bg-gradient-to-t from-pink-500
               to-violet-500 md:h-[70px] md:w-[70px]'  onClick={addItemToBasket} >
                  <ShoppingCartIcon className='h-8 w-8 text-white' />
              </div>
          </div>
    </div>
  )
}

export default Product
