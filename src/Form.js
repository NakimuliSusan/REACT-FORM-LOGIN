import React, {useState} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './App.css'
import myimage from './woman.png'


const Form = () => {
  const [email,setEmail] = useState('');
  console.log(email)
  const [password,setPassword] = useState('');
  console.log(password)

  const handleSubmit = (e) => {
        const data = {
          email: email,
          password: password
        }
        alert(JSON.stringify(data))
  };

    return (
      <div className = 'form-container'>
      <div className="form">
        <h3>Eddie's Shop</h3>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
        <label for="Your Email" className="Email">Your Email</label> <br></br><br></br>
          <input className="inputs" type="email"placeholder='name@domain.com'
           onChange={(e)=>
          {setEmail(e.target.value)}}/> <br></br><br></br>
          <label for="Password" className="password">Password</label> <br></br><br></br>
          <input className="inputs" type="password"placeholder='atleast 8 characters'
           onChange={(e)=>{setPassword(e.target.value);}}/>   <br></br> <br></br> 
          <input type="checkbox" placeholder="Password" className="password"/><span>Keep me logged in</span><span className="span">Forgot password?</span><br></br><br></br>
          <button type='submit'>Login</button> <br></br><br></br>
          <h4>________________________Or_______________________</h4>
          <div className= "social-icons">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-google" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          </div>
          {/* <div className="lines"> 
          <hr color='black'/> <span>or</span><hr color='black'/>
          </div> */}
        </form>
        {email?<Footer email={email}/> :<Navbar/>}
      

      </div>
        <div className= "image">
        <span className='upper'>Dont have an account?</span>&nbsp;&nbsp;<span className='upper-1'>SignUp</span>
        <img src={myimage} alt="woman" width={500} />
        </div>
        </div>
        
    )


};
export default Form;