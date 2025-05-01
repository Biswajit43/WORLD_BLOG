import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice.js'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const create = async(data) => {
        setError("")
        setIsLoading(true)
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-10 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-6">
                    <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo text="text-white" width="100%" />
                        </span>
                    </div>
                    <h2 className="text-center text-3xl font-bold text-white">Create Account</h2>
                </div>
                
                <div className="p-8">
                    <p className="text-center text-gray-600 mb-6">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-800 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                    
                    {error && (
                        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {error}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit(create)} className="space-y-6">
                        <div>
                            <Input
                                label="Full Name"
                                placeholder="Enter your full name"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                error={errors.name?.message}
                                className="focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        
                        <div>
                            <Input
                                label="Email Address"
                                placeholder="name@example.com"
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    validate: {
                                        matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Please enter a valid email address"
                                    }
                                })}
                                error={errors.email?.message}
                                className="focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        
                        <div>
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Create a secure password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                                error={errors.password?.message}
                                className="focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        
                        <Button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-200 transform hover:translate-y-px"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating Account...
                                </span>
                            ) : "Create Account"}
                        </Button>
                        
                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Protected by secure authentication</span>
                            </div>
                        </div>
                        
                        <p className="text-center text-xs text-gray-500">
                            By signing up, you agree to our Terms of Service and Privacy Policy
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup