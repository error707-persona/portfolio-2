import dark_icon from "./../assets/dark_icon.png"
import { Github, Linkedin, Mail } from "lucide-react"
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='h-34 w-full'>
      <div className='lg:mx-30 mx-2'>
        <div className='flex items-center gap-2 mb-5'>
          <div className="flex flex-col w-full">
            <div className="flex lg:flex-row flex-col gap-2 mb-4 w-full">
              <img src={dark_icon} alt="icon" height={5} width={25} />
              Areesha
              <span className="text-slate-400">areeshasayed09@gmail.com</span>
              <div className="lg:ml-auto">
                <span className="font-semibold">Contacts</span>
                
              </div>
              <div className="flex lg:hidden gap-5">
                  <Github size={20}/>
                  <Linkedin size={20}/>
                  <Mail size={20}/>
            
               </div>
            </div>
            <div className="flex items-center">
              <span className="hidden lg:flex">Full Stack Developer</span> 
               <div className="ml-auto hidden lg:flex gap-5">
                <a href="https://github.com/error707-persona"><Github size={20}/></a>  
                <a href="https://www.linkedin.com/in/areeshasayed/">  <Linkedin size={20}/> </a>
                  <Mail size={20}/>
            
               </div>
            </div>
          </div>
        </div> 
        <div className="flex text-slate-400 lg:text-md text-xs justify-center items-center mx-auto w-full">
          <hr />
          © Copyright {currentYear} Areesha Sayed. All rights reserved.
        </div>
      </div>

    </div>
  )
}

export default Footer