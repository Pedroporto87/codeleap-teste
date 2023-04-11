import React from 'react'
import axios from 'axios'


export const DeleteCard = ({data, open, setOpen}) => {

    const onDelete = (id) =>{
        axios.delete(`https://dev.codeleap.co.uk/careers/${id}`)
        .then({})
    }

  return (
    <>
        <div className='delete-card' id={data.id} >
            <div className='delete-card-conteiner' >
                <h1>Are you sure you want delete this item?</h1>
                <button >Cancel</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    </>
  )
}
