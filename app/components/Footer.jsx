import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const quickLinks = ['Home', 'Patients Rights and Responsibility', 'Ethics and Compliance', 'Careers', 'Blogs', 'FAQs', 'About']

const services = ['Our Services', 'Lab Test at Home', 'Physiotherapy at Home', 'Nursing Care', 'Vitamin Infused Therapy', 'IV Therapy', 'Speech Therapy']

const socials = ['/linkedin.svg', '/facebook.svg', '/instagram.svg', '/tiktok.svg']

const Footer = () => {
  return (
    <footer className='relative bg-[linear-gradient(352.62deg,#004984_21.54%,#028650_79.1%)] text-white pt-[178px] overflow-hidden'>
      <Image
        src='/footer-2.svg'
        width={420}
        height={420}
        className='absolute -top-12 xl:-top-2 -left-40 xl:left-0 pointer-events-none select-none'
        alt='Footer Left'
      />
      <Image
        src='/footer-1.svg'
        width={465}
        height={465}
        className='absolute -top-40 -right-40 xl:right-0 pointer-events-none select-none'
        alt='Footer Right'
      />
      <div className='max-md:text-center max-w-7xl w-full mx-auto mb-28 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          <div className='flex flex-col gap-12 max-lg:text-center max-lg:items-center max-lg:col-span-full md:max-w-xl md:mx-auto'>
            <Image src='/logo-white.svg' width={264} height={60} alt='Logo' />

            <p className='font-poppins font-medium text-white'>
              Your trusted doctor on call in Dubai. Expert, private and convenient home healthcare, 24/7. Your well-being, our priority.
            </p>

            <div className='flex flex-wrap gap-4 items-center'>
              {socials.map((social, idx) => (
                <Link key={social + idx} href='/'>
                  <div className='bg-[#004984] rounded-full h-12 w-12 flex items-center justify-center'>
                    <Image src={social} width={24} height={24} alt={social} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <nav className='flex flex-col gap-14'>
            <h3 className='font-poppins font-bold text-[18px]'>Quick Links</h3>
            <ul className='flex flex-col gap-4'>
              {quickLinks.map((link, idx) => (
                <li key={link + idx} className='font-poppins font-normal hover:underline cursor-pointer'>
                  {link}
                </li>
              ))}
            </ul>
          </nav>

          <nav className='flex flex-col gap-14'>
            <h3 className='font-poppins font-bold text-[18px]'>Our Services</h3>
            <ul className='flex flex-col gap-4'>
              {services.map((service, idx) => (
                <li key={service + idx} className='font-poppins font-normal hover:underline cursor-pointer'>
                  {service}
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex flex-col gap-14'>
            <h3 className='font-poppins font-bold text-[18px]'>Get in Touch</h3>

            <div className='flex flex-col gap-6 justify-between max-md:items-center'>
              <div className='flex items-center gap-2'>
                <Image src='/location-icon.svg' width={24} height={24} alt='location' />
                <p>AB Center, Sheikh Zayed Road,Al Barsha 1, Dubai, UAE</p>
              </div>
              <div className='flex items-center gap-2'>
                <Image src='/call-icon.svg' width={24} height={24} alt='call' />
                <p>+971 4 549 0700 / Toll Free: 800 99387</p>
              </div>
              <div className='flex items-center gap-2'>
                <Image src='/mail-icon.svg' width={24} height={24} alt='mail' />
                <p>info@callmydoctor.ae</p>
              </div>

              <Image src='/logo-dha.svg' width={168} height={60} alt='DHA Logo' />
            </div>
          </div>
        </div>
      </div>
      <div className='text-center font-light text-sm lg:text-[18px] py-7 px-4 border-t border-white'>
        <span>© 2024 Call My Doctor Health Care LLC, All rights reserved.</span> | <Link href='/privacy-policy'>Privacy Policy</Link> |{' '}
        <Link href='/terms-and-conditions'>Terms & Conditions</Link>
      </div>
    </footer>
  )
}

export default Footer
