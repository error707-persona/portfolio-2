import { Link, CodeXml } from "lucide-react";
// @ts-expect-error
const Card = ({ tech, title, description }) => {
  return (
        <div className='border-1 bg-[#282C33] duration-100 ease-in hover:scale-105 transform transitionflex flex-col w-full h-full lg:h-[20rem] lg:w-[90rem] border-red'>
          <div className='lg:h-1/2 h-[200px] border-1'></div>
          <div className='border-1 max-h-fit p-2 text-gray-400 text-xs'>{tech}</div>
          <div className='flex flex-col p-3'>
            <div className='font-bold'>{title}</div>
            <div className='text-gray-400 text-xs'>{description}</div>
          </div>
          <div className='flex gap-5 pb-3 pl-3 mt-auto'>
            <button className='border-2 border-purple-700  text-xs p-1 flex gap-2 cursor-pointer'>Live <Link size={15} /></button>
            <button className="border-2 border-gray-400  text-xs p-1 flex gap-2 cursor-pointer ">Code <CodeXml size={15} /></button>
          </div>
        </div>
  )
}

export default Card