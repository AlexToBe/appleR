import { urlFor } from '@/sanity';
import React from 'react'
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/outline'
import { removeFromBasket } from '@/redux/busketSlice';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

interface Props{
    items: Product[];
    id:string
}

const CheckoutProduct = ({ id, items }: Props) => {
   const dispatch = useDispatch()

    const removeItemFrombasket = () => {
        dispatch(removeFromBasket({id}))
         toast.success(`${items[0].title} remove to basket`, {
            position: 'bottom-center',
        })
    }



       

    return (
    <div className=' flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center '>
        <div className='relative h-44 w-44 ' >
            <Image src={urlFor(items[0].image[0]).url()} fill = {true} sizes='100vh' alt = '' style ={{objectFit:'contain'}}  />
        </div >
        <div className='flex flex-1 items-end lg:items-center' >
            <div className='flex-1 space-y-4' >
                <div className='flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl'>
                    <h4 className=' font-semibold lg:w-96' >{ items[0].title }</h4>
                    
                    <p className='flex items-end gap-x-1 font-semibold'>
                        {items.length}
                        <ChevronDownIcon className='h-6 w6 text-blue-500' />
                    </p>
                </div>
                <p className=' flex cursor-pointer items-end text-blue-500 hover:underline' >
                    Show Product details
                    <ChevronDownIcon className='h-6 w6' />
                </p>
            </div>
            <div className='flex flex-col items-end space-y-4' >
                <h4 className=' text-xl font-semibold lg:text-2xl' >
                    {items.reduce((total, item)=> total + item.price, 0)}
                    </h4>
                <button
                    onClick={removeItemFrombasket}
                    className=' text-blue-500 hover:underline'
                >
                    remove
                </button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct
