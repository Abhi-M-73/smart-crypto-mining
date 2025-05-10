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
    <div className='w-[50%] px-20'>
      <div className='flex items-center gap-5'>
        {
          overviewData.map((data, index) => (
            <div key={index} className='flex flex-col items-center'>
              <h2 className='text-3xl text-color font-bold'>{data.value}+</h2>
              <p className='text-center'>{data.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductOverview
