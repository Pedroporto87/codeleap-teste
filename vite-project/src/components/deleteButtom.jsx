import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { DeleteCard } from './deleteCard'

export const DeleteButtom = ({data, read}) => {
    const [open, setOpen] = useState(false)

    const showModal = () => {setOpen((prev) => !prev)}
    
    
  return (
    <>
    <div>
        <MdDeleteForever className='delete-button' onClick={showModal} />
            {open ? (<DeleteCard onClose={() => setOpen(false)} data={data} />):''}

    </div>
    </>

    )
}
