import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;
    const handleAddToCart =props.handleAddToCart;
   
    return (
      <div className="border p-3 rounded-md space-y-2">
        <img className='h-[350px]' src={img} alt="" />
        <div className="product-info">
          <h6 className="text-xl font-bold">{name}</h6>
          <p className='font-bold'>Price : ${price}</p>
          <p>ManuFacturer : {seller}</p>
          <p>Rating : {ratings} Star</p>
        </div>
        <button
          onClick={() => handleAddToCart(props.product)}
          className="btn bg-[#FFE0B3] w-full py-2 rounded-md"
        >
          Add To Car <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    );
};

export default Product;