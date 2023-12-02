"use client"
import React , {useState} from 'react';
import Modal from './Modall';

const WelcomComponent = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex mt-4 items-center pl-5 backGroundWelcom text-white h-[279px] w-full rounded-xl bg-gradient-to-l from-black to-transparent '>
          <div>
            <p className=' text-[36px]'>
                Hi! James Doe
            </p>
            <p className='text-[16px]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, dolorum non adipisci .
            </p>
            <button onClick={()=> setOpen(true)} className='primryBg mt-5 text-[16px] text-white flex justify-center items-center w-[166px] h-[54px] rounded-full'> Add Check in</button>
            </div>
            <Modal open={open} setOpen={setOpen}/>
        </div>
    );
}

export default WelcomComponent;
