'use client'
import React, { useRef } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { useClickLogger } from '../hooks/useClickLogger'
const Whatsapp = () => {
  const btnRef = useRef(null)
  const { logClick } = useClickLogger()

  const handleClick = () => {
    logClick(btnRef, 'whatsapp-btn')
  }

  return (
    <button
      ref={btnRef}
      id='whatsapp-btn'
      onClick={handleClick}
      className='bg-[#25D366] cursor-pointer text-white w-12 lg:w-[70px] h-12 lg:h-[70px] rounded-full flex items-center justify-center fixed bottom-8 right-8 z-50'
    >
      <IoLogoWhatsapp size={42} className='max-lg:hidden' />
      <IoLogoWhatsapp size={28} className='lg:hidden' />
    </button>
  )
}

export default Whatsapp
