import React, { useState } from 'react';
import './App.css';
import Daycomplite from './components/Daycomplite';

function App() {

const [login,setLogin]=useState(false)
const [formData, setFormData] = useState();
const [massin,setMass]=useState(false)
const [masspas,setMasspass]=useState(false)
const [userid,setUserid]=useState()

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value
  }));

}

const loginbt=(e)=>{
  e.preventDefault();

  if (!formData){
    setMass(!massin)
    setMasspass(!masspas)
    console.log('tag', formData)
  }else{
    
  if((formData.name ==="name" && formData.password==="password") || (formData.name ==="mars" && formData.password==="password")){
  if(formData.name ==="name" && formData.password==="password"){
    setUserid(1)
  }
  if(formData.name ==="mars" && formData.password==="password"){
    setUserid(2)
  }
    setMass(false)
  setMasspass(false)
  setLogin(true)
  }
 
  }
console.log('tag', formData)
}
  


if(!login){
  return (
    <>
    <div className='login_wrapper'>
    <div className='login'>
    login
    </div>
    <form>
      <input type='text' name="name" placeholder='Enter your name' onChange={handleChange} className={massin ? "borderRed":""}/>
      <input type='text' name='password' placeholder='Enter your password' onChange={handleChange} className={masspas ? "borderRed":""}/>
      <button type='submit' value="submit" onClick={loginbt}>Submit</button>
    </form>
    </div>
    </>
    );

}
  return (
  <>
  <Daycomplite userid={userid}/>
  </>
  );
}

export default App;
