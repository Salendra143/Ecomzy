import React from 'react'
import Product from './Product'
import { products } from '../utils/Data'


const ProductContainer = () => {
  return (
    <div className='flex flex-wrap px-16 mx-auto justify-between'>

    {
        products.map((item) => <Product key={item.id} data={item}/> )
    }
   
</div>
  )
}

export default ProductContainer