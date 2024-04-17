import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const Product = ({data}) => {
  
    const  {title,description,image,price,id} = data;
    const dispatch = useDispatch();

    const addTocartHandler = (data) => {
        dispatch(addItem(data))
    }


return (
   <div className='my-4'>
        <div className=' w-72 h-[370px] flex flex-col border-2 shadow-2xl  border-pink-600 gap-3 rounded-2xl   items-center'>
            <p className='text-[1.5rem] italic text-center'>{title.slice(0,15)+"..."}</p>
            <p className=' text-gray-500 italic text-center '>{description.slice(0,60)+"..."}</p>
            <img className='w-32 h-40' src={image} alt="image" />
            <div className='flex w-full justify-between items-center px-3 mt-5'>
                <p className='text-[1.2rem] italic text-gray-700'> Rs-{price}</p>
                <button className=' bg-pink-600 active:text-white hover:bg-pink-500  italic font-semibold rounded-2xl p-2 px-3 text-[1.1rem]'
                onClick={() =>addTocartHandler(data)}
                >Add To Cart</button>

            </div>
        </div>
</div>
  )
}

export default Product