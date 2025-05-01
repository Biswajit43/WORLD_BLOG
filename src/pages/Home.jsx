import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { Navigate, useNavigate } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoading(false)
        }).catch(error => {
            console.error("Error fetching posts:", error)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div className="w-full py-20 flex justify-center items-center">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin"></div>
                    <p className="mt-4 text-lg text-gray-600">Loading posts...</p>
                </div>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-16 mt-4 bg-gray-50">
                <Container>
                    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto text-center">
                        <div className="text-blue-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-3">
                            Login to Access Posts
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Sign in to your account to view and interact with the latest posts from our community.
                        </p>
                        <button onClick={() => (navigate("\login"))} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-md">
                            Sign In
                        </button>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-8 bg-gray-50">
            <Container>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <div key={post.$id} className="transform transition duration-300 hover:scale-105">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                <PostCard {...post} />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home