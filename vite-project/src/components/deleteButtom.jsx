import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { DeleteCard } from './deleteCard'

export const DeleteButtom = ({data}) => {
    const [open, setOpen] = useState(false)

    const showModal = () => {setOpen((prev) => !prev)}
    
    
  return (
    <>
    <div>
        <MdDeleteForever className='delete-button' onClick={showModal} />
            {open && <DeleteCard open={open} data={data} />}

    </div>
    </>

    )
}
