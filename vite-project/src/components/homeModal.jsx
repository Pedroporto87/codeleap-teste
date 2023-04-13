import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/homeModal.scss'

export const HomeModal = () => {
    const [value, setValue] = useState("")
    const navigate = useNavigate()
    const onChangeLogin = event => {
        localStorage.setItem('myUsername', event.target.value);
        setValue(event.target.value)
    }

    const handleClickLogin = ((event) =>{
        event.preventDefault()
        return navigate("/posts")
    })

  return (
    
        <div className='home-modal'>
            <div className='home-modal-conteiner'>
                <div>
                    <h1 className='home-modal-title'>Welcome to CodeLeap Network!</h1>
                </div>
                <div className='home-modal-align'>
                    <label htmlFor='user' className='home-modal-label'> Please enter your username
                        <input type='text' value={value} className='home-modal-input' name='user' required placeholder='John Doe' onChange={onChangeLogin}></input>
                    </label>
                </div>
                <div className='home-modal-button-conteiner'>
                    <button className='home-modal-button' disabled={!value} onClick={handleClickLogin}>ENTER</button>
                </div>
            </div>
        </div>
    
  )
}

