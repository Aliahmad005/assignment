import React from 'react';


const Navebar = () => {

  
    return (
        <div className='w-full py-2 flex-shrink-0 shadow rounded-full flex justify-between items-center px-6'>
            <div className='primryBg w-[40px] h-[40px] text-[12px] flex justify-center items-center text-white'>Logo</div>
            <div className='flex gap-3 items-center'>
                <button className='primryBg text-white flex justify-center items-center w-[110px] h-[40px] rounded-full'> feedback</button>
                <img className='w-[23px] h-[24px]' src='/Bell.svg' alt="" />
               <img className='w-[23px] h-[24px]' src="/infoCircle.svg" alt="" />
               <div className='flex'>
               <img className='w-[40px] h-[42px] mr-2' src="/Avatar.png" alt="" />
               <img src="/Ant-Menu-Submenu-Arrow-Down.svg" alt="" />
               </div>
               
               
            </div>
        </div>
    );
}

export default Navebar;
