import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { login,logout } from './Store/AuthSlice'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import  authService from './appWrite/Auth'
const App = () => {
  const [loading,setLoading]=useState(true)
const dispatch=useDispatch()
useEffect(() => {

authService.getCurrentUser()
.then((userData)=>{
  if(userData){
    dispatch(login({userData}))
  }
  else{
    dispatch(logout())
  }
})
.finally(()=>setLoading(false))
}, [])

return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      {/* <main>
      {/* TODO:  <Outlet /> */}
      {/* </main>  */}
      <Footer />
    </div>
  </div>
) : null
}

export default App
