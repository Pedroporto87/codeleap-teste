import React from 'react'
import Logo  from '../photo/Captura de Tela (22).png'
import { handleOpenHomeModal } from '../action/handleOpenHomeModal'
import { HomeModal } from '../components/homeModal.jsx'

export const Home = () => {
    
  return (
    <div>
        <img src={Logo} alt='CodeLeaps logo'/>
        <HomeModal handleOpenHomeModal={handleOpenHomeModal}/>

    </div>
  )
}
