import { Suspense, useState } from 'react'
import projects from '../data/projects'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import DemoComputer from './DemoComputer';
import { Meteors } from './ui/meteors';
const Projects = () => {
    const [index, setindex] = useState(0);
    const handleDecrement = () => {
        setindex((index-1>=0)?index-1:projects.length-1)
    }
    const handleIncrement = () => {
        setindex((index + 1)%projects.length)
    }
    return (
        <>
            {<section className='p-5 flex flex-col lg:flex-row shadow-2xl shadow-black rounded lg:h-[28rem] w-full'>
                <div className='w-full h-full lg:w-1/2 flex gap-5 flex-col'>
                    <div><img src={projects[index].icon} alt="" height={35} width={35} className='lg:flex hidden rounded' /></div>
                    <div className='text-2xl'>{projects[index].title}</div>
                    <div className='text-md text-slate-400'>{projects[index].description}</div>
                    <div className='flex gap-5'>
                        {projects[index].tech.map((img) =>
                            <img src={img} alt="" height={35} width={35} className=' rounded bg-slate-900' />
                        )}
                        <div className='ml-auto flex gap-3 border-1 px-1 rounded-lg'>
                            <a href={projects[index].link}>
                            <button className='text-[0.7rem] cursor-pointer p-1 flex gap justify-center items-center'>live site<ArrowUpRight/></button>
                            </a>
                            <a href={projects[index].repolink}>
                            <button className='text-[0.7rem] cursor-pointer p-1 flex gap justify-center items-center'>repo link<ArrowUpRight/></button>
                            </a>
                            
                        </div>
                    </div>
                    <div className='flex w-full mt-auto'>
                        <div className='mr-auto cursor-pointer py-1 px-2 rounded-full shadow-[inset_5px_0_10px_rgba(255,255,255,0.4)] ' onClick={handleDecrement}><ArrowLeft /></div>
                        <div>{index+1}/{projects.length}</div>
                        <div className='ml-auto cursor-pointer py-1 px-2 rounded-full shadow-[inset_-5px_0_10px_rgba(255,255,255,0.4)]' onClick={handleIncrement}><ArrowRight /></div>
                    </div>
                    <Meteors number={20} />  
                </div>
                <div className='lg:w-1/2 w-full lg:p-5'>
                    <Canvas>
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight position={[10,10,5]}/>
                        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader/>}>
                            <group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                                <DemoComputer texture={projects[index].texture}/>
                            </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
                    </Canvas>
            </div>

            </section>}</>
    )
}

export default Projects