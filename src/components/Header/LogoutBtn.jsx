import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/Auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <button
      className="inline-block px-6 py-2 text-white hover:text-blue-300 duration-200"

      onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn