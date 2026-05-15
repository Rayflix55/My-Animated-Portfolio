port { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Cone, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// 01 // About Background - Floating Nodes/Graph
function AboutScene() {
  const count = 30;
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
        pos.push([
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5 - 5
        ]);
    }
    return pos;
  }, []);

  return (
    <group>
      {positions.map((pos, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1} position={pos as any}>
          <Sphere args={[0.05, 16, 16]}>
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={3} transparent opacity={0.8} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export function About3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-70">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <AboutScene />
      </Canvas>
    </div>
  );
}

// 02 // Projects Background - Abstract Geometry
function ProjectsScene() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <group ref={meshRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Torus args={[3, 0.02, 16, 100]} position={[0, 0, -2]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.5} />
        </Torus>
      </Float>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
        <Torus args={[2, 0.015, 16, 100]} position={[0, 0, -1]} rotation={[-Math.PI / 4, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.6} />
        </Torus>
      </Float>
    </group>
  );
}

export function Projects3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-80">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <ProjectsScene />
      </Canvas>
    </div>
  );
}

// 03 // Experience Background - Floating Cubes/Chronology
function ExperienceScene() {
  const count = 15;
  const cubes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [(Math.random() - 0.5) * 8, (i - count / 2) * 1.5, (Math.random() - 0.5) * 5 - 8],
      size: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.5 + 0.5
    }));
  }, []);

  return (
    <group>
      {/* Background Cubes - Reduced Opacity */}
      {cubes.map((cube, i) => (
        <Float key={i} speed={cube.speed} position={cube.position as any} rotationIntensity={2}>
          <Box args={[cube.size, cube.size, cube.size]}>
            <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.15} />
          </Box>
        </Float>
      ))}
      
      {/* Primary Emissive Highlight Box */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[2, 0, -4]}>
        <Box args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial 
            color="#06b6d4" 
            emissive="#06b6d4" 
            emissiveIntensity={2} 
            wireframe 
            transparent 
            opacity={0.8} 
          />
        </Box>
      </Float>
    </group>
  );
}

export function Experience3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-70">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 10, 0]} intensity={1.5} />
        <ExperienceScene />
      </Canvas>
    </div>
  );
}

// 04 // Services Background - Modules
function ServicesScene() {
  return (
    <group>
      <Float speed={3} rotationIntensity={2} floatIntensity={2} position={[-3, 2, -2]}>
        <Cone args={[0.5, 1, 4]}>
          <meshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.7} />
        </Cone>
      </Float>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5} position={[3, -2, -3]}>
        <Box args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.5} />
        </Box>
      </Float>
      <Float speed={4} rotationIntensity={1} floatIntensity={2} position={[2, 3, -4]}>
          <Sphere args={[0.6, 16, 16]}>
             <MeshDistortMaterial color="#06b6d4" distort={0.5} speed={2} transparent opacity={0.6} />
          </Sphere>
      </Float>
    </group>
  );
}

export function Services3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-90">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <ServicesScene />
      </Canvas>
    </div>
  );
}

// 05 // Contact Background - Waves/Pulse
function ContactScene() {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 500;
    
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for(let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const radius = 2 + Math.random() * 2;
            pos[i * 3 + 0] = Math.cos(angle) * radius;
            pos[i * 3 + 1] = Math.sin(angle) * radius;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;
        const time = state.clock.getElapsedTime();
        pointsRef.current.rotation.z = time * 0.1;
        const s = 1 + Math.sin(time * 0.5) * 0.1;
        pointsRef.current.scale.set(s, s, s);
    });

    return (
        <points ref={pointsRef} position={[0, 0, -2]}>
            <bufferGeometry>
          <bufferAttribute
  attach="attributes-position"
  // args takes [array, itemSize]
  args={[positions, 3]}
/>
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#06b6d4" transparent opacity={0.8} />
        </points>
    );
}

export function Contact3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-80">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <ContactScene />
      </Canvas>
    </div>
  );
}

// 06 // Testimonials Background - Starfield/Beams
function TestimonialsScene() {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 300;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for(let i = 0; i < count; i++) {
            pos[i * 3 + 0] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
            <bufferAttribute
  attach="attributes-position"
  // args takes [array, itemSize]
  args={[positions, 3]}
/>
            </bufferGeometry>
            <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.7} />
        </points>
    );
}

export function Testimonials3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-70">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <TestimonialsScene />
      </Canvas>
    </div>
  );
}

// 07 // Pipeline/WorkProcess Background - Flow
function WorkProcessScene() {
    const meshRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1} position={[0, 0, -5]}>
                <Torus args={[4, 0.01, 16, 100]}>
                    <meshStandardMaterial color="#06b6d4" transparent opacity={0.5} />
                </Torus>
            </Float>
            <Float speed={3} rotationIntensity={1} floatIntensity={1} position={[0, 0, -7]}>
                <Torus args={[5, 0.01, 16, 100]}>
                    <meshStandardMaterial color="#ffffff" transparent opacity={0.4} />
                </Torus>
            </Float>
        </group>
    );
}

export function WorkProcess3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-80">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <WorkProcessScene />
      </Canvas>
    </div>
  );
}
