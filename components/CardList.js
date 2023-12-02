"use client"
import React , {useState , useEffect} from 'react';
import Card from './Card';
import { useFirebase } from '../firebseContext/firebase'
const CardList = () => {
   
    const [fetchData, setFetchData] = useState()

    const firebase = useFirebase()

    useEffect(() => {
        
        firebase.getList().then((docs) => setFetchData(docs.docs))
    }, [firebase.getList()])
  return (
 
       <div>
      <p className='text-[30px] mt-[46px] mb-[24px] '>Added CheckIns</p>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2'>
        {
            fetchData?.map((item)=>{
                return <Card item={item}/>
            })
        }
      
      </div>
    </div>
 
  );
}

export default CardList;
