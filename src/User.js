import React, {useEffect,useState} from 'react';

// https://dummyjson.com/users

const User =() =>{
    const [user, setUser] = useState()
    const [loading , setLoading] = useState(false);
    useEffect(() => {   
        userdata()
      },[])  
        
        const userdata = ()=>{
            fetch('https://dummyjson.com/users')
            .then (res => res.json())
            .then (data => {
                setUser(data.users)
                setLoading(true)
                console.log("fetched data----->",user)})
            .catch (err =>{throw  new Error (err.message)});
        }
if(!loading){
    console.log("loading data----->",loading);
    return <div>Loading........</div>
}
   return (
     <div>
      {user.map(item =>(
        <div key={item.id}>
            <img src={item.image} alt= "user profile"/>
            <p> {item.firstName} {item.lastName} {item.maidenName}</p>
            <h4>details:</h4>
            <p>Email:{item.email}</p>
            <p>UserName:{item.username}</p>
            <p>Age:{item.age}</p>
            <p>Gender:{item.gender}</p>
            <p>Address:{item.address.address}</p>

        </div>
      ))}
     </div>
   );

};
export default User;