import React from 'react'
import HeroBanner from '../components/custom/HeroBanner';
import FilterMenu from '@/components/custom/FilterMenu';
import ProductList from '@/components/custom/ProductList';
export default function home() {
  return (
    <>
      <HeroBanner />
      <FilterMenu/>
      <ProductList/>
      
    </>
  )
}
