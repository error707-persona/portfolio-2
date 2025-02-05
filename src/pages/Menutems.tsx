import  {useState} from 'react'

const Menutems = () => {
  const [select, setselect] = useState("home");
  return (
    <div className='text-white p-10'>
     <a href="/#home">
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
  )
}

export default Menutems