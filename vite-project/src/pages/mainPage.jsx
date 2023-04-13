import React from 'react'
import { Navbar } from '../components/navbar'
import '../styles/mainpage.scss'
import { PostCard } from '../components/postCard'
import { GetCard } from '../components/getCard'

const MainPage = () => {
  return (
    <div className='mainpage'>
      <div className='mainpage-conteiner'>
        <Navbar />
        <PostCard />
        <GetCard />
      </div>
    </div>
  )
}
export default MainPage
