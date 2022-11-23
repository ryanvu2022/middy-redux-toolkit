import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from './Rating';
import { addToCart, removeFromCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const SingleProduct = ({ item }) => {
   const { id, name, price, image, inStock, ratings, fastDelivery } = item;

   const { cart } = useSelector(store => store.cart)

   const dispatch = useDispatch();

   return (
      <div className="shadow-2xl sm:w-60 ss:w-72 w-80 m-2 p-3 rounded-md bg-white">
         <Link to={`/product/${id}`}>
            <img src={image} alt={name}/>
         </Link>
         <div>
            <h1 className="font-medium sm:text-base text-lg mt-1">{name}</h1>
            <h5 className="tracking-wide font-medium sm:text-base text-lg">CAD ${price}</h5>
            { fastDelivery
               ? <div className="text-lg sm:text-base">Fast Delivery</div>
               : <div className="text-lg sm:text-base">5 Days Delivery</div>
            }
            <div className="flex flex-row">
               <Rating rating={ratings}/>
            </div> 
         </div>

         <div className="flex justify-center mt-2">
            {cart.some(p => p.id === id) && (
               <button className="transition-all duration-300 ease-linear text-lg sm:text-base bg-red-600 hover:bg-red-400 text-white py-2 px-4 mr-2 my-2 rounded-md" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove from Cart
               </button>
            )}
            {!cart.some(p => p.id === id) && inStock && (
               <button className="transition-all duration-300 ease-linear text-lg sm:text-base bg-darkgreen hover:bg-hovergreen text-white py-2 px-4 mr-2 my-2 rounded-md" onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
               </button>
            )}
            {!inStock && (
               <button className="transition-all duration-300 ease-linear text-lg sm:text-base bg-gray-600 hover:bg-gray-400 text-white py-2 px-4 mr-2 my-2 rounded-md" disabled>
                  Out of Stock
               </button>
            )}        
         </div>
         
      </div>
   )
}

export default SingleProduct