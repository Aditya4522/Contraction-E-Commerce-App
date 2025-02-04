import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
    <div className=' mb-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 mx-3 rounded-md   '>
        <ProductCard />
        <ProductCard />  <ProductCard /> 
        <ProductCard />  <ProductCard /> 
        <ProductCard />  <ProductCard /> 
        <ProductCard /> 
    </div>
  )
}
