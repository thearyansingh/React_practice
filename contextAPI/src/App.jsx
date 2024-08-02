import React from 'react'
import UserContextProvider from './context/ContextProvider'
import Login from './Login'
import Profile from './Profile'

const App = () => {
  return (
    <div>
      <UserContextProvider>
<Login/>
<Profile/>
        </UserContextProvider>
    </div>
  )
}

export default App

