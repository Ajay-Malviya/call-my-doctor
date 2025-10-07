'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const initialState = { name: '', phone: '', email: '' }

const CallBack = () => {
  const [fields, setFields] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const errs = {}
    if (!fields.name.trim()) errs.name = 'Name is required.'
    if (!fields.phone.trim()) errs.phone = 'Phone number is required.'
    else if (!/^\+?\d{7,15}$/.test(fields.phone.trim())) errs.phone = 'Enter a valid phone number.'
    if (!fields.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email.trim())) errs.email = 'Enter a valid email address.'
    return errs
  }

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined, form: undefined })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      localStorage.setItem('callback_form_data', JSON.stringify(fields))
      setFields(initialState)
      setErrors({})
    } catch (error) {
      setErrors({ form: 'Failed to submit form. Please try again later.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className='relative bg-[linear-gradient(180deg,#004984_19.14%,#028650_90.42%)] py-[52px] md:bg-[linear-gradient(272.17deg,#004984_19.14%,#028650_90.42%)] lg:py-[104px]'>
      <div className='md:pl-[350px] md:pr-[25px] lg:pl-[450px] lg:pr-[125px] px-4'>
        <div className='flex flex-col gap-4 lg:gap-8 items-start mb-12'>
          <h2 className='font-poppins font-semibold text-white text-2xl md:text-3xl lg:text-5xl leading-[40px] align-middle'>Request Call Back</h2>
          <p className='font-poppins font-medium text-white text-base md:text-xl lg:text-2xl leading-none'>
            Our team will call you shortly to assist with your query
          </p>
        </div>
        <form className='flex flex-col gap-5 xl:flex-row xl:flex-wrap' onSubmit={handleSubmit} noValidate>
          <div className='flex flex-col w-full xl:w-[300px]'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name*'
              value={fields.name}
              onChange={handleChange}
              className={`px-6 py-4 bg-white border rounded-2xl focus-within:outline-0 ${errors.name ? 'border-red-500' : 'border-[rgba(164,203,241,0.5)]'}`}
            />
            {errors.name && <span className='text-red-500 text-xs mt-1'>{errors.name}</span>}
          </div>
          <div className='flex flex-col w-full xl:w-[300px]'>
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='+91  Mobile Number*'
              value={fields.phone}
              onChange={handleChange}
              className={`px-6 py-4 bg-white border rounded-2xl focus-within:outline-0 ${errors.phone ? 'border-red-500' : 'border-[rgba(164,203,241,0.5)]'}`}
            />
            {errors.phone && <span className='text-red-500 text-xs mt-1'>{errors.phone}</span>}
          </div>
          <div className='flex flex-col w-full xl:w-[300px]'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email Id*'
              value={fields.email}
              onChange={handleChange}
              className={`px-6 py-4 bg-white border rounded-2xl focus-within:outline-0 ${errors.email ? 'border-red-500' : 'border-[rgba(164,203,241,0.5)]'}`}
            />
            {errors.email && <span className='text-red-500 text-xs mt-1'>{errors.email}</span>}
          </div>
          <div className='flex flex-col w-full xl:w-[300px]'>
            <button
              type='submit'
              disabled={submitting}
              className='bg-[#028650] w-full text-white py-4 px-10 rounded-2xl shadow-[0px_8px_23px_0px_rgba(48,178,48,0.235)] cursor-pointer transition-all duration-150
                hover:bg-[#02653c] hover:shadow-[0px_12px_32px_0px_rgba(48,178,48,0.30)]
                active:bg-[#014c2c] active:shadow-[0px_4px_12px_0px_rgba(48,178,48,0.18)] disabled:opacity-60'
            >
              {submitting ? 'Submitting...' : 'Request Callback'}
            </button>
            {errors.form && <span className='text-red-500 text-xs mt-2'>{errors.form}</span>}
          </div>
        </form>
        <div className='md:absolute md:left-0 md:bottom-0 md:ml-10 max-md:-mb-14'>
          <Image src='/woman-chatting.png' width={305} height={383} alt='Woman Chatting' className='lg:hidden mx-auto' />
          <Image src='/woman-chatting.png' width={405} height={483} alt='Woman Chatting' className='max-lg:hidden mx-auto' />
        </div>
      </div>
    </section>
  )
}

export default CallBack
