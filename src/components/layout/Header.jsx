import React from 'react';
import userImg from "../../images/user.png";

const Header = () => {
    return (
        <div className='flex justify-between items-center px-10 h-[60px] drop-shadow-lg bg-red-800'>
            <div className='text-white text-2xl mt-[-5px] uppercase font-bold opacity-80'>
                Movie App
            </div>
            <div>
                <img src={userImg} alt="user" className='w-10 h-10 rounded-full ' />
            </div>
        </div>
    );
};

export default Header;