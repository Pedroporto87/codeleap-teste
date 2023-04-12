import React from 'react'
import axios from 'axios'
import '../styles/deleteCard.scss'


export const DeleteCard = ({data, onClose=()=>{}}) => {    

    const onDelete = (id) =>{
        const string = JSON.stringify(id)
        axios.delete(`http://dev.codeleap.co.uk/careers/${string}/`)
        
        
    }
    function CloseModal(e){
        e.preventDefault()
         onClose()
    }
  return (
    <>
        <div className='delete-card' id={data.id} >
            <div className='delete-card-conteiner' >
                <h1>Are you sure you want delete this item?</h1>
                <button onClick={CloseModal}>Cancel </button>
                <button onClick={() => onDelete(data.id)}>Delete</button>
            </div>
        </div>
    </>
  )
}
