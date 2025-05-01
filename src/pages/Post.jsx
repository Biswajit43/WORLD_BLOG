import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();
    
    const userData = useSelector((state) => state.auth.userData);
    
    useEffect(() => {
        if (slug) {
            setLoading(true);
            appwriteService.getPost(slug)
                .then((post) => {
                    if (post) {
                        setPost(post);
                        // console.log("Post fetched:", post); // Debug log
                    } else {
                        // console.log("Post not found");
                        navigate("/");
                    }
                })
                .catch(error => {
                    console.error("Error fetching post:", error);
                    navigate("/");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);
    
    // Move this inside useEffect to ensure post is available before checking
    const isAuthor = post && userData ? post.userId === userData.$id : false;
    // console.log("Auth check:", { isAuthor, userId: post?.userId, userDataId: userData?.$id }); // Debug log
    
    const deletePost = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            appwriteService.deletePost(post.$id)
                .then((status) => {
                    if (status) {
                        appwriteService.deleteFile(post.featuredImage);
                        navigate("/");
                    }
                })
                .catch(error => {
                    console.error("Error deleting post:", error);
                });
        }
    };
    
    if (loading) {
        return (
            <Container>
                <div className="w-full py-8 mt-4 text-center">
                    <div className="flex justify-center">
                        <div className="inline-block h-8 w-8 border-4 border-t-blue-600 border-r-transparent border-b-blue-600 border-l-transparent rounded-full animate-spin"></div>
                    </div>
                    <p className="text-gray-500 mt-2">Loading post...</p>
                </div>
            </Container>
        );
    }
    
    if (!post) {
        return (
            <Container>
                <div className="w-full py-8 mt-4 text-center">
                    <h1 className="text-2xl font-bold text-gray-700">Post not found</h1>
                    <p className="text-gray-500 mb-4">The post you're looking for doesn't exist or has been removed</p>
                    <Button onClick={() => navigate("/")}>Go Home</Button>
                </div>
            </Container>
        );
    }
    
    return (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-6 relative border rounded-xl p-2">
                    {post.featuredImage && (
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl max-h-96 object-contain"
                            onError={(e) => {
                                console.error("Image load error");
                                e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Available";
                            }}
                        />
                    )}
                    
                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex flex-col sm:flex-row gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="px-4 py-2">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" className="px-4 py-2" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                
                <div className="w-full mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
                    <div className="flex items-center mt-2 text-gray-500">
                        <span className="text-sm">
                            {new Date(post.$createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                </div>
                
                <div className="prose max-w-none browser-css">
                    {post.content ? parse(post.content) : <p>No content available</p>}
                </div>
            </Container>
        </div>
    );
}