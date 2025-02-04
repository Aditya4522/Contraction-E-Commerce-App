import React from 'react'
import HeroBanner from '../components/custom/HeroBanner';
import FilterMenu from '@/components/custom/FilterMenu';
import ProductList from '@/components/custom/ProductList';
import Footer from '@/components/custom/Footer';

export default function home() {
  return (
    <>
      <HeroBanner />
      <FilterMenu/>
      <ProductList/>
      
    </>
  )
}
