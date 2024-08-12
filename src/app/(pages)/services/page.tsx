import Product from '@/components/Product'
import TechArvel from '@/components/TechArvel'
import WhatsNew from '@/components/WhatsNew'
import React from 'react'

const Services = () => {
  return (
    <section className='w-screen py-12 '>
    <div className=" max-w-[92rem] mx-auto min-h-screen">
    <TechArvel/>
    <Product />
  </div>
  <section className="max-w-[90%] md:px-8 bg-custom-image bg-cover mx-auto bg-center dark:bg-black/30 rounded-lg my-4 px-3">
        <WhatsNew/>
      </section>
    </section>
  )
}

export default Services