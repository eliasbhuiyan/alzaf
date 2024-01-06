import Link from 'next/link'
import React from 'react'

export const HeaderTop = () => {
  return (
    <section className='bg-secondary py-1.5'>
        <div className='container'>
           <div className='flex items-center justify-between'>
               <div>
                 <ul className='head_item'>
                    <li>
                        <p>Language</p>
                    </li>
                    <li className='ml-5 mr-9'>
                        <Link href='#'>Help Center</Link>
                    </li>
                    <li>
                        <Link href='tel:0964781656'>Helpline: 0964781656</Link>
                    </li>
                 </ul>
               </div>
               <div>
                 <ul className='head_item'>
                    <li>
                        <Link href='#'>Become a Seller</Link>
                    </li>
                    <li className='ml-[30px] mr-[38px]'>
                        <Link href='#'>Order Track</Link>
                    </li>
                    <li>
                        <Link href='#' className='text-brand'>Sign up / Login</Link>
                    </li>
                 </ul>
               </div>
           </div>
        </div>
    </section>
  )
}
