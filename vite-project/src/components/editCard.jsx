import React, { useState } from 'react'
import axios from 'axios'
import '../styles/editCard.scss'

export const EditCard = ({data,  onClose=()=>{}}) => {

    const [title, setTitle] =useState('')
    const [content, setContent]= useState('')



    const onEdit = () => {
        const string = JSON.stringify(data.id)
        axios.patch(`https://dev.codeleap.co.uk/careers/${string}/`, {
            title,
            content,
        })
        CloseModal()
    }

    function CloseModal(){
         onClose()
    }

  return (
    <>
    <div className='edit-card' id={data.id} >
        <div className='edit-card-conteiner' >
            <h1 className='edit-card-title'>Edit Item</h1>
            <label htmlFor='title' className='edit-card-label-title'>Title:</label>
                <input type='text' className='edit-card-input-title' name='title' required 
                placeholder='   Hello World' onChange={(e) => setTitle(e.target.value)}></input>
            <label htmlFor='textbox' className='edit-card-label-textbox'>Content:</label>
                <input type='textbox' name='textbox' className='edit-card-textbox' required 
                placeholder='   Content' onChange={(e) => setContent(e.target.value)}></input>
            <div className='edit-card-buttons'>
                <button className='edit-cancel-button' onClick={CloseModal}>Cancel</button>
                <button className='edit-save-button'type='submit' onClick={() => onEdit(data)}>Save</button>
            </div>
        </div>
    </div>
</>
  )
}
