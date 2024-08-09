import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appWrite/Auth"
import { logout } from '../../Store/AuthSlice'
const LogoutBtn = () => {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <div>
      <button
      class
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutBtn
