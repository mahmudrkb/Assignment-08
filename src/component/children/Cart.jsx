import React from 'react';

const Cart = ({cart}) => {

    return (
        <div className=' mt-10 flex justify-center items-center gap-4 bg-white rounded-lg'>
            <div className='flex items-center justify-between gap-5 '>
                <img className='w-[120px] flex justify-start' src={cart.product_image} alt="" />
                <div className=''>
                    <h3 className='font-semibold text-xl'>{cart.product_title}</h3>
                    <p>{cart.description}</p>
                    <h3 className='font-semibold'>Price : $ {cart.price}</h3>
                </div>
                <i className="text-red-700 fa-regular fa-circle-xmark"></i>
            </div>
            
        </div>
    );
};

export default Cart;