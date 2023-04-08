import React from 'react'

export const handleOpenHomeModal = () => {
        const timer =  setTimeout(() => {
             setOpen(true);
         }, 1000)
          return () => clearTimeout(timer);
     }
  


