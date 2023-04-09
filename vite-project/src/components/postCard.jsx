import React, { useState } from 'react'
import '../styles/postCard.scss'
import axios from 'axios'
export const PostCard = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const postData = () => {
        const username = localStorage.getItem('myUsername')
        axios.post(`https://dev.codeleap.co.uk/careers/`,{
            username, 
            title,
            content,
        })
        
      }

  return (
    <>
    <div className='post-cart'>
        <div className='post-cart-title'>
            <h1 className='post-cart-h1'>What's on your mind?</h1>
        </div>
        
            <label htmlFor='title' className='post-cart-label-1'>Title</label>
                <input type='text' className='post-cart-text' name='title' required placeholder='Hello World' onChange={(e) => setTitle(e.target.value)}></input>
            
            <label htmlFor='textbox' className='post-cart-label-2'>Content</label>
                <input type='textbox' name='textbox' className='post-cart-textbox' required placeholder='Content' onChange={(e) => setContent(e.target.value)}></input>
            
            <div className='post-card-b-conteiner'>
                <button className='post-cart-button' disabled={!title || !content } onClick={postData}>Create</button>
            </div>
        

    </div>
    </>
  )
}

