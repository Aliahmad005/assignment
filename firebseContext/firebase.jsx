"use client"


import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set , get , child, onValue } from 'firebase/database';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage'


const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_API_APP_ID
}


const firebaseApp = initializeApp(firebaseConfig);
// const database = getDatabase(firebaseApp);
 const firestore = getFirestore(firebaseApp)
export const firebaseStorage = getStorage(firebaseApp)

export const useFirebase = () => useContext(FirebaseContext);



export const FirebaseProvider = (props) => {
    const [data, setData] = useState()

    // console.log('data', data);

    const handleCreateData = async (title, picture) => {
       
        const imgRef = ref(firebaseStorage, `upload/images/${Date.now()}-${picture.name}`);
        const imagePath = await uploadBytes(imgRef, picture)
        const response = await addDoc(collection(firestore, 'userCheckin'), {
            title,
            date: Date.now(),
            imagePath: imagePath.ref.fullPath
        })

        return response
    }

    const getList = () => {
        return getDocs(collection(firestore, 'userCheckin'))
    }

    const getImgUrl = (path) => {
        return getDownloadURL(ref(firebaseStorage, path))
    }

    return (
        <FirebaseContext.Provider value={{ data, handleCreateData, getList, getImgUrl }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};

