import React from 'react'
import { handleOpenHomeModal } from '../action/handleOpenHomeModal'
import '../styles/homeModal.scss'

export const HomeModal = () => {

  return (
    <>
        <div className='home-modal'>
            <div className='home-modal-conteiner'>
                <div>
                    <h1 className='home-modal-title'>Welcome to CodeLeap Network!</h1>
                </div>
                <div className='home-modal-align'>
                    <label htmlFor='user' className='home-modal-label'> Please enter your username
                        <input type='text' className='home-modal-input' name='user' required placeholder='John Doe'></input>
                    </label>
                </div>
                <div className='home-modal-button-conteiner'>
                    <button className='home-modal-button'>ENTER</button>
                </div>
            </div>
        </div>
    </>
  )
}

