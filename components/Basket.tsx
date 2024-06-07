import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import {selectBasketItems,selectBasketTotal} from '../redux/busketSlice'

const Basket = () => {
    const items:Product[] = useSelector(selectBasketItems)
    // const basketTotal:number = useSelector(selectBasketTotal)
    if (items.length === 0) return null
    console.log(items.length)
    return (
      <Link href='/checkout'>
            <div className=' fixed bottom-10  z-50 right-10 flex h-16 w-16 cursor-pointer
            items-center  justify-center rounded-full bg-gray-300' >
                {items.length > 0 && (<span className=' absolute -right-2  -top-2 z-50 flex h-7 w-7  items-center justify-center rounded-full
                 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-center '
                > {items.length}
                </span>)}
                
                < ShoppingBagIcon className='h-8 w-8' />
            </div>
      </Link>
  
  )
}

export default Basket
