import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <div className='mb-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 mx-3 rounded-md'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}