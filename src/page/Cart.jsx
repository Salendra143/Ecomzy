import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../component/CartItem';
import { Link } from 'react-router-dom';


const Cart = () => {

  const items = useSelector((state)=> state.cart.items)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(items.reduce((acc, curr) => acc + curr.price, 0));
  }, [items]);


  return (
    <div>
      {
        items.length > 0 ? (
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {items.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
            <div className="flex flex-col gap-5 ">
            <div className="font-semibold text-xl text-gray-700 italic ">Your Cart</div>
              <div className="font-semibold text-5xl text-pink-700  -mt-5 italic">Summary</div>
              <p className="text-xl">
                <span className="text-gray-700 italic font-semibold text-xl">Total Items: {items.length}</span>
              </p>
              <div className="flex flex-col">
              <p className="text-xl font-bold"><span className="text-gray-700 italic font-semibold">Total Amount:</span> ${totalAmount.toFixed(2)}</p>
              <button className="bg-pink-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear italic mt-5 border-2 border-pink-600 font-bold hover:text-pink-700 p-3 text-xl">CheckOut Now</button>
            </div>
            </div>
            </div>

            
          </div>
        </div>

     ) :


     (
      <div className=''> 
          <div className=' h-screen flex flex-col gap-5 justify-center items-center '>
            <p className=' text-[2rem] italic text-gray-500 font-semibold '>Your Cart is Empty</p>
           <Link to={"/"}> <button  className=' bg-pink-600 active:text-white hover:bg-pink-500 italic rounded-2xl p-2 px-5 text-[1.1rem] font-semibold'>SHOP NOW</button></Link>
          </div>
      </div>
      )
    }
</div>
  )
}

export default Cart