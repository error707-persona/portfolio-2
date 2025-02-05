import { CardSpotlightDemo } from "./CardSpotlightDemo"
import education from "../data/education"


const Education = () => {
  return (
   <div className="flex gap-5 flex-col lg:grid lg:grid-cols-2">
    {education.map((item)=> 
      <CardSpotlightDemo institute={item.institute} time={item.time} description={item.description}/>
    )}
    
   </div>
  )
}

export default Education