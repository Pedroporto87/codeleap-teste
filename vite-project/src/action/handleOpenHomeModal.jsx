import React, { useState } from 'react'

export const handleOpenHomeModal = () => {
    const [open, setOpen] = useState(false)
        const timer =  setTimeout(() => {
             setOpen(true);
         }, 1000)
          return () => clearTimeout(timer);
     }
  


