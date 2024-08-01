import React from 'react'

const Profile = () => {
  return (
 <>
<ProfileCard
 name="aryan"
 age={33}
 greeting={
    <div>
        <strong>Hi </strong>
        </div>
 }
 >
    <p>hobiess</p>
    <button>contact</button>

</ProfileCard>
<ProfileCard
 name="aryan"
 age={33}
 greeting={
    <div>
        <strong>Hi </strong>
        </div>
 }
 >
    <p>hobiess</p>
    <button>contact</button>

</ProfileCard>
 </>
  )
}
const ProfileCard =(props)=>{
    return(
        <>
        <h2>Name :{props.name}</h2>
        <h2>Name :{props.age}</h2>
        <p>{props.greeting}</p>
    
    <div>{props.children}</div>
    
        </>
    )
    }
    

export default Profile


