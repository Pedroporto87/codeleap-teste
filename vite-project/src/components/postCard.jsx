import React from 'react'
import '../styles/postCard.scss'
export const PostCard = () => {
  return (
    <>
    <div className='post-cart'>
        <div className='post-cart-title'>
            <h1 className='post-cart-h1'>What's on your mind?</h1>
        </div>
        
            <label htmlFor='title' className='post-cart-label-1'>Title</label>
                <input type='text' className='post-cart-text' name='title' required placeholder='Hello World'></input>
            
            <label htmlFor='textbox' className='post-cart-label-2'>Content</label>
                <input type='textbox' name='textbox' className='post-cart-textbox' required placeholder='Content'></input>
            
            <div className='post-card-b-conteiner'>
                <button className='post-cart-button'>Create</button>
            </div>
        

    </div>
    </>
  )
}

