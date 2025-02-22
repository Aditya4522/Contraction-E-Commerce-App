import React from 'react'
import { Card } from '../ui/card'

export default function Orders() {
  return (
    <div >
        <h1 className='text-2xl font-semibold mb-8'>Orders</h1>
        <div className='flex flex-col gap-2 mx-auto my-10'> 
            <div className='space-y-8'>
                <div className='space-y-4 p-4'>
                    <h2>Oder Summary</h2>
                </div>
                <div className='grid grid-cols-1 gap-2 px-3'>
                    <Card className="space-y-2 px-3 shadow-md">
                        <div></div>
                        <hr />
                        <div>
                            <p className='flex justify-between sm:justify-start gap-2 items-center px-3'>
                                <span className='font-bold'>Total  :</span>
                                <span className='text-gray-500'> 1000</span>
                            </p>
                            <p className='flex justify-between sm:justify-start gap-2  px-3'>
                                <span className='font-bold'>Address:</span>
                                <span className='text-gray-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </p>
                            <p className='flex justify-between sm:justify-start gap-2  px-3'>
                                <span className='font-bold'>Name</span>
                                <span className='text-gray-500'> </span>
                            </p>
                        </div>
                    </Card>
                </div>
            </div>

        </div>
    </div>
  )
}
