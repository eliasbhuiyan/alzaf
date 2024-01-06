import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaRegUser,FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { SideNav } from './SideNav';

export const Navbar = () => {
  return (
    <nav className='py-3 bg-white'>
        <div className='container relative'>
            <SideNav/>
            <div className='flex items-center'>
                <div>
                    <Link href='/'>
                      <Image src='/logo.png' className='w-32 h-9' width={130} height={38}/>
                    </Link>
                </div>
                <div className='search'>
                    <input className='bg-transparent w-full'/>
                    <button className='search_btn'>
                      <IoMdSearch />
                    </button>
                </div>
                <div>
                    <ul className='flex gap-3'>
                        <li>
                            <Link href='#' className='cart'>
                              <FaRegUser/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='cart'>
                            <FaRegHeart />
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='cart'>
                            <MdOutlineShoppingCart />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='ml-7'>
                    <Link href='#'>
                      <Image src='/cloud.png' width={177} height={44}/>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
