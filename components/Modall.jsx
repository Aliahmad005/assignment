"use client"

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useFirebase } from '../firebseContext/firebase'

export default function Modal({ open, setOpen }) {
    const [title, setTitle] = useState('')
    const [picture, setPicture] = useState(null)
    const [active , setActive] = useState(false)
    // console.log(picture);
    const cancelButtonRef = useRef(null)
    const firebase = useFirebase()
    const handleSubmit = async () => {
    setActive(true)
       const response = await firebase.handleCreateData(title, picture)
    //    console.log('ress' , response);
       if(response){
        firebase.getList()
        setTitle('')
        setPicture(null)
        setOpen(false)
        setActive(false)
       }
    }
    const upload = (e) => {
        setPicture(e.target.files[0])

    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                                <div className='flex justify-between py-[16px] px-[24px] bg-[#F8F8F8]'>
                                    <p className='font-medium'>Add Check in</p>
                                    <img onClick={() => setOpen(false)} className='cursor-pointer' src="/Close.svg" alt="" />
                                </div>
                                <div className='p-[24px] '>
                                    <form onSubmit={handleSubmit}>
                                        <div className='mb-[20px]'>
                                            <label className='font-medium ' >Title</label>
                                            <input onChange={(e) => setTitle(e.target.value)} value={title} className='block outline-none rounded mt-[15px] border  border-[#D9D9D9] w-full p-[8px]' placeholder='Enter Title' type="text" />
                                        </div>
                                        <div className='border-2 border-dashed rounded py-[16px]'>
                                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white  w-full ">
                                                <img className='w-[48px] h-[48px] relative m-auto' src="/inbox.svg" alt="" />
                                                <p className='font-normal text-center mt-3  w-full'>Click or drag file to this area to upload</p>
                                                <p className='text-[14px] text-center mb-3 font-normal text-[#B4B4B4]'>Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                                                <input onChange={upload} id="file-upload" required name="file-upload" type="file" className="sr-only" />
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="submit"
                                        className="mt-3  h-[32px]  primryBg ml-2 px-[15px] py-[4px] text-sm font-semibold text-white shadow-sm border rounded-full hover:border-cyan-500 hover:bg-cyan-500 duration-500"
                                    onClick={handleSubmit}
                                    disabled = {active}
                                    >
                                        Add
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3  h-[32px]  bg-white px-[15px] py-[4px] text-sm font-semibold text-gray-900 shadow-sm border rounded-full hover:border-cyan-500 hover:text-cyan-500 duration-500"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
