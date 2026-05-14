import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1200;

const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3); // Added colors array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      // Random white/grey colors
      cols[i * 3 + 0] = 1;
      cols[i * 3 + 1] = 1;
      cols[i * 3 + 2] = 1;
    }
    return [pos, cols];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Subtle rotation based on time
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;

    // React to mouse
    const targetX = state.mouse.x * 0.5;
    const targetY = state.mouse.y * 0.5;
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.05;
    pointsRef.current.position.y += (-targetY - pointsRef.current.position.y) * 0.05;
  });

  return (
    <points ref={pointsRef}>
    <bufferGeometry>
    <bufferAttribute
      attach="attributes-position"
      args={[positions, 3]} // Changed from 'pos' to 'positions'
    />
    <bufferAttribute
      attach="attributes-color"
      args={[colors, 3]} // Now 'colors' is defined
    />
  </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingShape() {
  const meshRef = useRef<THREE.Group>(null);
  const materialLowRef = useRef<THREE.MeshStandardMaterial>(null);
  const materialHighRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Mouse proximity calculation
    const mouseDistance = Math.sqrt(state.mouse.x ** 2 + state.mouse.y ** 2);
    const proximity = Math.max(0, 1 - mouseDistance * 1.2);
    
    // Rotation logic - speeds up as mouse nears
    meshRef.current.rotation.x = time * (0.1 + proximity * 0.3);
    meshRef.current.rotation.y = time * (0.15 + proximity * 0.4);
    
    // Pulsing scale logic
    const pulse = Math.sin(time * 3) * 0.08 * proximity;
    const baseScale = 1.2 + (proximity * 0.3);
    meshRef.current.scale.setScalar(baseScale + pulse);
    
    // Density cross-fade
    if (materialLowRef.current && materialHighRef.current) {
      materialLowRef.current.opacity = 0.15 * (1 - proximity);
      materialHighRef.current.opacity = 0.4 * proximity;
    }
    
    // Enhanced Parallax
    const targetX = state.mouse.x * 2.5; // Stronger parallax push
    const targetY = -state.mouse.y * 2.5;
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    
    // Suble vertical drift
    meshRef.current.position.y += Math.sin(time * 0.8) * 0.15;
  });

  return (
    <group ref={meshRef} position={[0, 0, -2]}>
      {/* Low Poly Base */}
      <mesh>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          ref={materialLowRef}
          color="#ffffff"
          wireframe
          transparent
          opacity={0.04}
        />
      </mesh>
      {/* High Poly Detail Layer */}
      <mesh>
        <icosahedronGeometry args={[1.02, 2]} />
        <meshStandardMaterial
          ref={materialHighRef}
          color="#ffffff"
          wireframe
          transparent
          opacity={0}
        />
      </mesh>
    </group>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-30 pointer-events-none opacity-80">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Particles />
        <FloatingShape />
      </Canvas>
    </div>
  );
}
