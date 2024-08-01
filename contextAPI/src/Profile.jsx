import React, { useContext } from 'react'
import UserContext from './context/UserContext'

const Profile = () => {
 const {user}=useContext(UserContext)
if(!user)
    return <div>please Login</div>
    return <div>welcome {user.userName}</div>
}

export default Profile
