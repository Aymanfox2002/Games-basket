import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
   <Link href={"/"} className='block pb-5 mb-10 letter-spacing-2 text-5xl font-bold tracking-wider text-white'>
        <h1><span className='text-blue-700'>V</span>ortex</h1>
   </Link>
  )
}

export default Logo