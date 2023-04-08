import React from 'react'
import Logo  from '../photo/Captura de Tela (22).png'
import { handleOpenHomeModal } from '../action/handleOpenHomeModal'

export const Home = () => {
    
    useEffect(() => {
        handleOpenHomeModal();
    }, [])
    
  return (
    <div>
        <img src={Logo} alt='CodeLeaps logo'/>
    </div>
  )
}
