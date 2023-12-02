"use client"
import CardList from '@/components/CardList'
import Navebar from '@/components/Navebar'
import WelcomComponent from '@/components/WelcomComponent'
import moment from 'moment/moment'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {

  return (
  <div className='p-7'>
    <Navebar/>
    <WelcomComponent/>
    <CardList/>
  </div>
  )
}
