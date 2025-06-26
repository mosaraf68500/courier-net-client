import React from 'react'; 
import logo from "../../assets/logo.png"

const CouriereLogo = () => {
    return (
        <div className='flex justify-center items-end '>
            <img className='w-[25px] mb-2' src={logo} alt="" />
            <p className='text-2xl font-bold  text-green-400 -ml-0'>Courier-Net</p>
        </div>
    );
};

export default CouriereLogo;