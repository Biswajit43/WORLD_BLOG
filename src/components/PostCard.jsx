import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                        className='rounded-xl' />

                </div>
                <h2
                    className='text-xl text-[#0F172A] bg- font-bold'
                >{title}</h2>  
                <p className='text-gray-500'>Posted by : </p> 
            </div>
        </Link>
    )
}
export default PostCard