import  { useState } from 'react'
import dark_icon from "./../assets/dark_icon.png"
import { Menu } from 'lucide-react';
// import Menutems from '../pages/Menutems';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [select, setselect] = useState("home");
    const navigate = useNavigate(); 
    console.log(select);
    const handleNavigate = () => {
      // Navigate to the specified route
      navigate('/menu');  // Replace '/target-page' with the desired route
    };
  
  return (
    <div className='h-20 fixed top-0 z-50 bg-black px-4 w-full lg:px-30 flex justify-center items-center'>
        <div className='flex gap-2'>
            <img src={dark_icon} alt="icon" height={5} width={25}/>
            Areesha
        </div>
        <div className='ml-auto gap-5 lg:flex hidden'>
        <a href="#home">
            <div className={(select==="home")?"rainbow-text cursor-pointer underline":"text-white cursor-pointer"} onClick={()=>setselect("home")}><span className='text-purple-700'>#</span>home</div>
           </a>
           <a href="#projects">
            <div className={(select==="works")?"rainbow-text cursor-pointer underline":"text-white cursor-pointer"} onClick={()=>setselect("works")}><span className='text-purple-700'>#</span>projects</div></a>
            <a href="#experience">
            <div className={(select==="experience")?"rainbow-text cursor-pointer underline":"text-white cursor-pointer"} onClick={()=>setselect("experience")}><span className='text-purple-700'>#</span>experience</div></a>
            <a href="#education">
            <div className={(select==="education")?"rainbow-text cursor-pointer underline":"text-white cursor-pointer"} onClick={()=>setselect("education")}><span className='text-purple-700'>#</span>education</div></a>
            <a href="#contact-me">
            <div className={(select==="contact-me")?"rainbow-text cursor-pointer underline":"text-white cursor-pointer"} onClick={()=>setselect("contact-me")}><span className='text-purple-700'>#</span>contact-me</div></a>
            
        </div>
        <div className='lg:hidden ml-auto' onClick={handleNavigate}>
          
          <Menu />
        </div>
    </div>
  )
}

export default Navbar