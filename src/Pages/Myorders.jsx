import React from 'react'
import OrderData from '../components/custom/OrderData'
export default function Myorders() {
  return (
    <div className='w-[90vw] lg:[50vw] mx-auto my-10 sm:my-32 grid gap-3 '>
      <h1 className=' text-2xl font-bold'>My Orders</h1>
      <div className='grid'>
        <OrderData/>
      </div>
    </div>
  )
}
