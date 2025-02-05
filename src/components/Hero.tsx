
import { TypeAnimation } from 'react-type-animation'
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls,  } from '@react-three/drei'
import { useRef } from 'react';
import * as THREE from "three";

// const StarShape = () => {
//     const shapeRef = useRef<THREE.Mesh>(null);
  
//     // Function to create a star shape
//     const createStarShape = () => {
//       const shape = new THREE.Shape();
//       const outerRadius = 1;
//       const innerRadius = 0.5;
//       const spikes = 5; // Number of star points
  
//       for (let i = 0; i < spikes * 2; i++) {
//         const angle = (i * Math.PI) / spikes;
//         const radius = i % 2 === 0 ? outerRadius : innerRadius;
//         const x = Math.cos(angle) * radius;
//         const y = Math.sin(angle) * radius;
  
//         if (i === 0) {
//           shape.moveTo(x, y);
//         } else {
//           shape.lineTo(x, y);
//         }
//       }
  
//       shape.closePath();
//       return shape;
//     }; return (
//       <mesh ref={shapeRef}>
//         <shapeGeometry args={[createStarShape()]} />
//         <meshStandardMaterial color="gold" side={THREE.DoubleSide} />
//       </mesh>
//     );
//   }

const RotatingCube = () => {
    const meshRef = useRef();
    useFrame(()=>{
      if (meshRef.current) {
        // @ts-expect-error
        meshRef.current.rotation.y += 0.01
        // @ts-expect-error
        meshRef.current.rotation.x += 0.01
      }
    })
    
      return (
        // @ts-expect-error
        <mesh ref={meshRef} style={{ background: 'transparent' }}>
            <icosahedronGeometry args={[1.3,0]}/>
            <meshLambertMaterial color="#6c00ff" emissive="#6c00ff"/>
            
            {/* <Sparkles count={100} scale={1} size={6} speed={0.0002} noise={0.2} color="orange"/> */}
        </mesh>
      )
    
  }

  function OrbitingSpheres() {
    const groupRef = useRef<THREE.Group>(null);
    const numSpheres = 20; // Number of orbiting objects
    const radius = 3; // Orbit radius
  
    useFrame(({ clock }) => {
      if (groupRef.current) {
        const time = clock.getElapsedTime();
        groupRef.current.children.forEach((child, index) => {
          const angle = (index / numSpheres) * Math.PI * 2 + time * 0.5;
          child.position.set(Math.sin(angle) * radius, Math.cos(angle) * radius, 0);
        });
      }
    });
  
    return (
      <group ref={groupRef}>
        {Array.from({ length: numSpheres }).map((_, index) => (
          <mesh key={index}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshToonMaterial color="white" />
          </mesh>
        ))}
      </group>
    );
  }

  function SlantedOrbitingSpheres() {
    const groupRef = useRef<THREE.Group>(null);
    const numSpheres = 20; // Number of orbiting spheres
    const radiusX = 3; // Orbit radius along X-axis
    const radiusY = 1.5; // Orbit radius along Y-axis (ellipse effect)
  
    useFrame(({ clock }) => {
      if (groupRef.current) {
        const time = clock.getElapsedTime();
        groupRef.current.children.forEach((child, index) => {
          const angle = (index / numSpheres) * Math.PI * 2 + time * 0.5;
          child.position.set(
            Math.cos(angle) * radiusX,  // X-axis
            Math.sin(angle) * radiusY,  // Y-axis (ellipse effect)
            Math.sin(angle) * 2         // Z-axis (gives 3D orbit effect)
          );
        });
      }
    });
  
    return (
      <group ref={groupRef} rotation={[Math.PI / 4, Math.PI / 6, 0]}> {/* 🔄 Tilted Plane */}
        {Array.from({ length: numSpheres }).map((_, index) => (
          <mesh key={index}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshStandardMaterial color="white" />
          </mesh>
        ))}
      </group>
    );
  }

  function LeftSlantedOrbitingSpheres() {
    const groupRef = useRef<THREE.Group>(null);
    const numSpheres = 20; // Number of orbiting spheres
    const radiusX = 3; // Orbit radius along X-axis
    const radiusY = 1.5; // Orbit radius along Y-axis (ellipse effect)
  
    useFrame(({ clock }) => {
      if (groupRef.current) {
        const time = clock.getElapsedTime();
        groupRef.current.children.forEach((child, index) => {
          const angle = (index / numSpheres) * Math.PI * 2 + time * 0.5;
          child.position.set(
            Math.sin(angle) * radiusX,  // X-axis
            Math.cos(angle) * radiusY,  // Y-axis (ellipse effect)
            Math.sin(angle) * 2         // Z-axis (gives 3D orbit effect)
          );
        });
      }
    });
  
    return (
      <group ref={groupRef} rotation={[Math.PI / 4, Math.PI / 6, 0]}> {/* 🔄 Tilted Plane */}
        {Array.from({ length: numSpheres }).map((_, index) => (
          <mesh key={index}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshStandardMaterial color="white" />
          </mesh>
        ))}
      </group>
    );
  }

  function SparkleOrbitingSpheres() {
    const groupRef = useRef<THREE.Group>(null);
    const numSpheres = 20; // Number of orbiting spheres
    const radiusX = 3; // Orbit radius along X-axis
    const radiusY = 1.5; // Orbit radius along Y-axis (ellipse effect)
  
    useFrame(({ clock }) => {
      if (groupRef.current) {
        const time = clock.getElapsedTime();
        groupRef.current.children.forEach((child, index) => {
          const angle = (index / numSpheres) * Math.PI * 2 + time * 0.5;
          child.position.set(
            Math.tan(angle) * radiusX,  // X-axis
            Math.cos(angle) * radiusY,  // Y-axis (ellipse effect)
            Math.sin(angle) * 2         // Z-axis (gives 3D orbit effect)
          );
        });
      }
    });
  
    return (
      <group ref={groupRef} rotation={[Math.PI / 4, Math.PI / 6, 0]}> {/* 🔄 Tilted Plane */}
        {Array.from({ length: numSpheres }).map((_, index) => (
          <mesh key={index}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshStandardMaterial color="white" />
          </mesh>
        ))}
      </group>
    );
  }

const Hero = () => {
    return (
        <div id="home" className='flex lg:justify-start items-center lg:flex-row flex-col text-xl gap-2 min-h-[50vh]'>
            <div className='flex flex-col justify-center mt-10 lg:mt-0 items-center lg:items-baseline lg:text-left text-center  min-h-[50vh]  lg:w-1/2 px-2 gap-2'>
                <div>
                    Hi I'm Areesha Sayed
                </div>

                <div className='flex gap-2 lg:justify-normal justify-center'>
                    I'm a

                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Software Engineer",
                            1000,
                            "Software Development Engineer",
                            1000,
                            "Full Stack Developer",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                        className='text-xl text-purple-700'
                    />
                </div>
                <div className='text-xs text-gray-400'>I design, develop, and maintain software applications, focusing on clean code, scalability, and user experience. Passionate about problem-solving, I build reliable and efficient solutions using modern technologies.</div>
                <button className='border-2 border-purple-700 max-w-fit mt-2 p-2 text-sm'>Contact me!!</button>
            </div>
            <div className='min-h-[50vh]  lg:w-1/2 w-full flex justify-center'>
                <Canvas style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    {/* <Suspense fallback={<CanvasLoader />}> */}
                    <OrbitControls enableZoom={false} enablePan enableRotate />
                    <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
                    {/* <color attach="background" args={['#F0F0F0']} /> */}
                    <RotatingCube />
                    <OrbitingSpheres />
                    <SlantedOrbitingSpheres />
                    <LeftSlantedOrbitingSpheres/>
                    <SparkleOrbitingSpheres/>
                    {/* <StarShape />  */}
                    {/* </Suspense> */}
                </Canvas>

                {/* <div className='border-1 px-2 text-xs border-gra mt-auto max-w-fit'>Current working at <span className='text-red-500'>Oracle</span></div> */}
            </div>
        </div>
    )
}

export default Hero