import React from 'react'
import '../styles/getCard.scss'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { BiEdit } from 'react-icons/bi'
import { DeleteButtom } from './deleteButtom';

export const GetCard = () => {
    const [read, setRead] = useState([]);
    const username = localStorage.getItem('myUsername')
    useEffect(() => {
        axios.get(`https://dev.codeleap.co.uk/careers/`)
            .then((response) => {
                setRead(response.data.results)
            })
    })



  return (
    <>
        {read.map((data) =>
            <div className='get-card' key={data.id}>
                <div className='get-card-title'>
                    <h1 className='get-card-h1'>My Post at CodeLeap Network!</h1>
                    { username === data.username &&
                     <div className='get-card-icons'>
                        <DeleteButtom data={data} read={read} />
                        <BiEdit data={data}  />
                    </div>}
                </div>
                <div className='get-card-data-user'>
                    <p className='get-card-user'>@{data.username}</p>
                    <p className='get-card-timestamp'>{data.created_datetime}</p>
                </div>
                <p className='get-card-api-content'>{data.content}</p>
            </div>

        )}
        
    </>
  )
}

