"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { use, useEffect } from 'react'

function Header() {
    const path=usePathname();
    useEffect(() => {
        console.log(path)
    }, [path])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src={"/logo.svg"} alt="Logo" width={160} height={100} />
      <ul className='hidden md:flex gap-6'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                        ${path=='/dashboard'&&'text-primary font-bold'}                         
                        `}>Dashboard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                        ${path=='/dashboard/questions'&&'text-primary font-bold'}                         
                        `}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                        ${path=='/dashboard/upgrade'&&'text-primary font-bold'}                         
                        `}>Upgrade</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                        ${path=='/dashboard/howitworks'&&'text-primary font-bold'}                         
                        `}>How it Works?</li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header
