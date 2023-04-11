import React, { useEffect, useState } from 'react'
import Logo  from '../photo/Captura de Tela (24).png'
import { HomeModal } from '../components/homeModal.jsx'
import '../styles/home.scss'

export const Home = () => {
    const [open, setOpen] = useState(false)
  
    useEffect(() =>{
    const timer =  setTimeout(() => {
        setOpen(true);
    }, 3000)
    return () => clearTimeout(timer)
  },[])
  
  return (
    <>
        <div className='home'>
            <img src={Logo} alt='CodeLeaps logo' className='home-img' />
        </div>
        {open && <HomeModal />}
    </>
  )
}
