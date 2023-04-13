import React from 'react'
import axios from 'axios'
import '../styles/deleteCard.scss'
import '../styles/deleteCard.scss'


export const DeleteCard = ({data,  onClose=()=>{}}) => {

    const onDelete = (id) =>{
        const string = JSON.stringify(data.id)
        axios.delete(`https://dev.codeleap.co.uk/careers/${string}/`)
    }
    function CloseModal(e){
        e.preventDefault()
         onClose()
    }
  return (
    
        <div className='delete-card' id={data.id} >
            <div className='delete-card-conteiner' >
                <h1 className='delete-card-title'>Are you sure you want delete this item?</h1>
                <div className='delete-card-buttons'>
                    <button className='cancel-button' onClick={CloseModal}>Cancel</button>
                    <button className='delete-button' onClick={() => onDelete(data.id)}>Delete</button>
                </div>
            </div>
        </div>
    
  )
}
