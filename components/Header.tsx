import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
    
 
import {SearchIcon,ShoppingBagIcon,UserIcon} from "@heroicons/react/outline"
import { useSelector } from 'react-redux'
import { selectBasketItems } from '@/redux/busketSlice'
import { signIn,signOut ,useSession } from 'next-auth/react'
const Header = () => {
    const {data:session} = useSession()
    
    const items = useSelector( selectBasketItems )

    return (
      <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>
        <div className='flex items-center justify-center md:w-1/5'>
          <Link href = '/'>
            <div className ='relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
              {/* <Image src='https://rb.gy/vsvv2o' width={10} height={10} alt='fuck'  ></Image> */}
              <Image src='/usedimg/applelog.png'  fill = {true} sizes='true' alt='fuck' style ={{objectFit:'contain'}} ></Image>
              </div>
          </Link>
        </div>
        <div className='hidden  space-x-8 md:flex'>
          <a className='headerLink'>Product</a>
          <a className='headerLink'>Explore</a>
          <a className='headerLink'>Support</a>
          <a className='headerLink'>Business</a>
        </div>
        <div className='flex items-center justify-center space-x-4 md:w-1/5'>
            <SearchIcon className='headerIcon' />
          <Link href='/checkout'>
              <div className='relative '>
              <span className='absolute -right-1 -top-1 z-50 h-4 flex w-4 items-center justify-center rounded-full text-white bg-gradient-to-l from-pink-500 to-violet-500'>{items.length}</span>
              <ShoppingBagIcon className='headerIcon' />
              </div>
          </Link>
          {session ? (
            <Image src={
              //session.user?.image||
              '/usedimg/none.jpg'
            }
              alt='fuck'
              className='cursor-pointer rounded-full'
              height={34}
              width={34}
              sizes='true'
              onClick={() => signOut()}
                    />
          ) : (<UserIcon className='headerIcon' onClick={() => {
            signIn()
          }} />)
    }
        </div>

      </header>
    )
    }

export default Header
