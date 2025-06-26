import React from 'react'; 
import logo from "../../assets/logo.png"

const CouriereLogo = () => {
    return (
        <div className='flex justify-center items-center'>
            <img className='w-[25px]' src={logo} alt="" />
            <p className='text-xl font-bold  text-green-400'>Courier-Net</p>
        </div>
    );
};

export default CouriereLogo;