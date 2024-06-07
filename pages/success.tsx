import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CheckIcon from '@heroicons/react/outline/CheckIcon'
import { useRouter } from 'next/router'
import Button from '@/components/Button'
import {useMediaQuery} from 'react-responsive'
import { ShoppingCartIcon ,ChevronUpIcon,ChevronDownIcon } from '@heroicons/react/outline'
import product from '@/sanity/schemaTypes/product'
import { GetServerSideProps } from 'next'
import { fetchLineItems } from '@/utils/fetchLineItems'

interface Props{
    products:StripeProduct[]
}

const Success = ({products}:Props ) => {
    console.log(product)
    const router = useRouter()
    const { session_id } = router.query
    const [mounted, setMounted] = useState(false)
    const subtotal = products.reduce(
        (acc,product) => acc+product.price.unit_amount/100,0
    )
    const [showOrderSummery, SetShowOrderSummery] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    },[] )

    const isTabletOrMoile = useMediaQuery({ query: '(max-width:1024px' })
    const showOrderSummeryCondition = isTabletOrMoile ? showOrderSummery : true
    
    const handleShowOrderSummary = () => {
        SetShowOrderSummery(!showOrderSummery)
    }

  return (
    <div>
        <Head>
              <title> Thank you -Apple</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <header className='mx-auto max-w-xl' >
            <Link href = '/'>
                <div className ='relative cursor-pointer ml-4 h-16 w-8 transition lg:hidden'>
                    <Image src='/usedimg/applelog.png'  fill = {true} sizes='true' alt='fuck' style ={{objectFit:'contain'}} ></Image>
              </div>
            </Link>
          </header>
          <main className=' grid grid-cols-1 lg:grid-cols-9' >
              <section className=' order-2 mx-auto max-w-xl pb-12 lg:col-span-5 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44' >
                <Link href = '/'>
                    <div className ='relative cursor-pointer hidden ml-4 h-24 w-12 transition lg:inline-flex'>
                        <Image src='/usedimg/applelog.png'  fill = {true} sizes='true' alt='fuck' style ={{objectFit:'contain'}} ></Image>
                    </div>
                  </Link>
                  
                  <div className=' my-8 ml4 flex space-x-4 lg:ml-4 xl ml-0'>
                      <div className='flex h-11 w11 items-center justify-center rounded-full border-2'>
                          <CheckIcon className = 'h-8 w-8'/>
                      </div>
                      <div>
                          <p className=' text-sm text-gray-500'> order #{ session_id?.slice(-5)}</p>
                          <h4 className=' text-lg'>
                              Thank you{''}
                              {/* {session ? session.user?.name?.split('')[0]:'Guest'} */}
                          </h4>
                      </div>
                  </div>
                  <div className=' mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:m-14' >
                      <div className=' space-y-2 pb-3' >
                          <p>Your order is confirmed</p>
                          <p>
                              We&apos;ve accepted your order, and we&apos;ve getting it ready. come back to this page for updates on your shipment status.
                          </p>
                      </div>
                      <div className=' pt-3 text-sm' >
                          <p className=' font-medium text-gray-500'></p>
                          <p>CNB21441622</p>
                      </div>
                  </div>
                  <div className=' my-4 mx-4 space-y-2 rounded-md border border-gray-300 p-4 lg:ml-14' >
                      <p>Order updates</p>
                      <p className=' text-sm text-gray-600'>
                          You will get shipping and delivery updates by email and text
                      </p>
                  </div>
                  <div className=' mx-4 flex flex-col items-center justify-between text-sm lg:ml-14 lg:flex-row' >
                      <p className=' hidd lg:inline' > Need help? Contact us</p>
                      {mounted && (
                          <Button
                              title='Continue Shopping'
                              onClick = {()=>router.push('/')}
                              width = {isTabletOrMoile ? 'w-full':undefined}
                              padding = 'py-4'
                          />
                      )}
                  </div>
              </section>
              {mounted && (
                  <section className=' overflow-y-scroll border-y border-l border-gray-300 bg-[#fafafa] lg:order-2  lg:col-span-4 lg:h-screen lg:border-y-0 '   >
                      <div className={`w-full ${showOrderSummeryCondition && 'border-b'} border-gray-300 text-sm lg:hidden`} >
                          <div className=' mx-auto flex max-w-xl items-center justify-between px-4 py-6'>
                              <button onClick={handleShowOrderSummary} className=' flex items-center space-x-2' >
                                  <ShoppingCartIcon className='h-6 w-6' />
                                  <p>Show order summery</p>
                                  {showOrderSummeryCondition ? (
                                      <ChevronUpIcon className=' h-4 w-4' />
                                  ):(<ChevronDownIcon className=' h-4 w-4' />)
                                  }
                              </button>
                              <p className=' text-xl font-medium text-black' >
                                  {subtotal+20}
                              </p>
                          </div>
                      </div>
                      {showOrderSummeryCondition && (
                          <div className=' max-xl:max-w-xl divide-y border-gray-300 px-4 py-4 lg:mx-0 lg:max-w-lg lg:px-10 lg:py-16' >
                              <div className=' space-y-4 pb-4 ' >
                                  {products.map((product) => (
                                      <div key={product.id}
                                            className=' flex items-center space-x-4 text-sm font-medium'>
                                          <div className=' relative flex h-16 w-16 items-center justify-center rounded-md border border-gray-300 bg-[#f1f1f1] textxs text-white' >
                                              <div className='relateive h-7 w-7 animate-bounce rounded-md' >
                                               <Image src='/usedimg/iphone.png' fill = {true}  alt = '' style ={{objectFit:'contain'}}  />
                                              </div>
                                              <div className=' absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full 
                                              bg-[gray] text-xs ' >
                                                  {product.quantity}
                                              </div>
                                          </div>
                                          <p className=' flex-1'>{ product.description}</p>
                                          <p>
                                              {product.price.unit_amount/100}
                                          </p>
                                     </div>
                                  ))}
                              </div>
                              <div className=' space-y-1 py-4' >
                                  <div className=' flex justify-between text-sm'>
                                      <p className=' text-[gray]'>Subtotal</p>
                                      <p className=' font-medium'>{ subtotal}</p>
                                  </div>
                                  <div className=' flex justify-between text-sm' >
                                        <p className=' text-[gray]'>Discount</p>
                                      <p className=' text-[gray]'></p>
                                  </div>
                                  <div className=' flex justify-between text-sm'>
                                          <p className=' text-[gray]'>Shipping</p>
                                      <p className='  font-medium'> {'20USD'} </p>
                                  </div>
                              </div>
                              <div className=' flex justify-between pt-8' >
                                  <p> Total</p>
                                  <p className='flex items-center gap-x-2 text-xs texg-[gray]' >USD
                                      <span className=' text-xl font-medium text-black'>
                                          {subtotal+20}
                                      </span>
                                  </p>
                              </div>
                          </div>
                      )}
                </section>  
              )}
          </main>
    </div>
  )
}

export default Success

export const getServerSideProps: GetServerSideProps<Props> = async ({query}) => {
    const sessionId = query.session_id as string
    const products = await fetchLineItems(sessionId)

    return {
        props: {
            products
        }
    }
}