import React from 'react'

const ProductOverview = () => {
  const overviewData = [
    {
      value: "12800",
      desc: "Cloud Mining Sold"
    },
    {
      value: "4300",
      desc: "Happy Customers around the World"
    },
    {
      value: "80",
      desc: "Countries delivered to"
    },
  ]

  return (
    <div className='w-full lg:w-[50%] px-5 sm:px-10 lg:px-20 mt-10'>
      <div className='flex flex-col sm:flex-row items-center gap-8 sm:gap-5'>
        {
          overviewData.map((data, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <h2 className='text-3xl sm:text-4xl text-color font-bold'>{data.value}+</h2>
              <p className='text-sm sm:text-base'>{data.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductOverview
