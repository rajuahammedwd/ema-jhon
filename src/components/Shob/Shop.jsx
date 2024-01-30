import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shob.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    
    const handleAddToCart = (product)=>{
         const newCart =[...cart, product];
         setCart(newCart)
    }

    return (
      <div className="grid grid-cols-5">
        <div className=" col-span-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mx-auto">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="col-span-1 bg-[#FFE0B3] text-center pt-5">
          <h4 className='text-3xl font-bold'>Order Summary</h4>
          <p className='text-xl'>Selected Items : {cart.length}</p>
        </div>
      </div>
    );
};

export default Shop;