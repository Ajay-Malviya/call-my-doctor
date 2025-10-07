import Image from 'next/image'
import { IoCallSharp, IoLocation } from 'react-icons/io5'

const Header = () => {
  return (
    <header className='bg-white px-4 py-2 md:px-8 md:py-4 flex items-center justify-between shadow-md'>
      <div className='max-w-7xl w-full mx-auto flex flex-col-reverse gap-2 md:flex-row items-center justify-between'>
        <div className='flex items-center'>
          <Image src='/logo.svg' alt='Logo' width={223} height={52} />
        </div>
        <div className='flex items-center justify-between gap-2 sm:gap-6 lg:gap-10'>
          <div className='flex items-center gap-1.5 text-[#4C5354] text-[18px] font-normal tracking-tight capitalize font-poppins'>
            <IoLocation size={24} fill='#028650' className='shrink-0' />
            <span className='max-md:text-xs max-lg:text-sm'>Sheikh Zayed Road, Al Barsha 1, Dubai, UAE</span>
          </div>
          <div className='flex items-center gap-1.5 text-[#4C5354] text-[18px] font-normal tracking-tight capitalize mt-1 font-poppins'>
            <IoCallSharp size={24} fill='#028650' className='shrink-0' />
            <span className='max-md:text-xs max-lg:text-sm whitespace-nowrap'>+971 4 549 0700</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
