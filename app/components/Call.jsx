'use client'
import React, { useRef } from 'react'
import { IoCall } from 'react-icons/io5'
import { useClickLogger } from '../hooks/useClickLogger'

const Call = () => {
  const btnRef = useRef(null)
  const { logClick } = useClickLogger()

  const handleClick = () => {
    logClick(btnRef, 'call-btn')
  }

  return (
    <button
      onClick={handleClick}
      id='call-btn'
      className='bg-[#0369BB] cursor-pointer text-white rounded-full w-12 lg:w-[70px] h-12 lg:h-[70px] flex items-center justify-center fixed bottom-8 left-8 z-50'
    >
      <IoCall size={42} className='max-lg:hidden' />
      <IoCall size={24} className='lg:hidden' />
    </button>
  )
}

export default Call
