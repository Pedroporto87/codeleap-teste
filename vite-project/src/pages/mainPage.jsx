import React from 'react'
import { Navbar } from '../components/navbar'
import '../styles/mainpage.scss'
import { PostCard } from '../components/postCard'

export const Posts = () => {
  return (
    <>
    <div className='mainpage'>
      <div className='mainpage-conteiner'>
        <Navbar />
        <PostCard />
      </div>
    </div>
    </>
  )
}

