"use client"
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useFirebase, firebaseStorage } from '../firebseContext/firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const Card = (props) => {
  const [pat, setPat] = useState(null);

  const getImgUrl = async (path) => {
    try {
      const url = await getDownloadURL(ref(firebaseStorage, path));
      setPat(url);
    } catch (error) {
      console.error('Error getting image URL:', error);
    }
  };

  useEffect(() => {
    getImgUrl(props.item.data().imagePath);
  }, [props.item.data().imagePath]); // Include imagePath in the dependency array

  return (
    <div className='shadow rounded-md bg-white p-3 cursor-pointer '>
      <div
        style={{ backgroundImage: `url('${pat}')` }}
        className=' w-full h-[160px] backGroundCard flex justify-end p-3 rounded-2xl'
      >
        <div className='primryBg  text-[14px]  text-white flex justify-center items-center w-[90px] h-[32px] rounded-full'>
          Checked in
        </div>
      </div>
      <p className='font-semibold text-[20px] mt-2'>{props.item?.data().title}</p>
      <p className='text-gray-500 text-[16px] mt-2 '>{moment(props.item?.data().date).format('ll')}</p>
      <div className='flex items-center mt-3'>
        <img className='w-[32px] h-[32px] mr-1' src="/Avatar.png" alt="" />
        <p className='font-semibold text-[16px]'>Owner: John Doe</p>
      </div>
    </div>
  );
};

export default Card;
