import React from 'react'
import { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { EditCard } from './editCard'

export const EditButtom = ({data}) => {
  const [open, setOpen] = useState(false)

  const showModal = () => {setOpen((prev) => !prev)}
  return (  
    <div>
        <BiEdit className='edit-button' onClick={showModal} />
        {open ? (<EditCard onClose={() => setOpen(false)} data={data} />):''}
    </div> 
  )
}
