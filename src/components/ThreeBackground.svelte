<script>
  import { T, useTask } from '@threlte/core';
  import { Float } from '@threlte/extras';
  import * as THREE from 'three';
  
  let { type = 'hero' } = $props();
  
  let rotation = $state({ x: 0, y: 0 });
  let mouse = $state({ x: 0, y: 0 });

  useTask((delta) => {
    rotation.x += delta * 0.1;
    rotation.y += delta * 0.15;
  });

  const handleMouseMove = (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };
</script>

<svelte:window onmousemove={handleMouseMove} />

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 5]}
  fov={75}
/>

<T.AmbientLight intensity={0.8} />
<T.PointLight position={[10, 10, 10]} intensity={1.5} />

{#if type === 'hero'}
  <Float speed={2} rotationIntensity={1} floatIntensity={1}>
    <T.Mesh position={[0, 0, 0]} rotation={[rotation.x, rotation.y, 0]}>
      <T.IcosahedronGeometry args={[1, 0]} />
      <T.MeshStandardMaterial color="#ffffff" wireframe transparent opacity={0.1} />
    </T.Mesh>
  </Float>
  
  <T.Points position={[mouse.x, mouse.y, 0]}>
    <T.BufferGeometry>
      <!-- Subtle points -->
    </T.BufferGeometry>
    <T.PointsMaterial size={0.02} color="#06b6d4" transparent opacity={0.3} />
  </T.Points>
{:else if type === 'about'}
  <T.Mesh position={[-2, 0, -2]} rotation={[rotation.x * 0.5, 0, 0]}>
    <T.TorusGeometry args={[2, 0.01, 16, 100]} />
    <T.MeshStandardMaterial color="#06b6d4" transparent opacity={0.1} />
  </T.Mesh>
  <T.Mesh position={[-2, 0, -2]} rotation={[0, rotation.y * 0.5, 0]}>
    <T.TorusGeometry args={[1.5, 0.005, 16, 100]} />
    <T.MeshStandardMaterial color="#ffffff" transparent opacity={0.05} />
  </T.Mesh>
{:else if type === 'projects'}
  <T.Mesh position={[2, 1, -3]} rotation={[rotation.x, rotation.y * 0.5, 0]}>
    <T.BoxGeometry args={[2, 2, 2]} />
    <T.MeshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.1} />
  </T.Mesh>
{:else if type === 'experience'}
  <T.Mesh position={[0, 0, -4]} rotation={[0, rotation.y, 0]}>
    <T.SphereGeometry args={[3, 32, 32]} />
    <T.MeshStandardMaterial color="#ffffff" wireframe transparent opacity={0.05} />
  </T.Mesh>
{:else if type === 'services'}
  <T.Mesh position={[0, 0, -2]} rotation={[rotation.x, 0, rotation.y]}>
    <T.OctahedronGeometry args={[2, 0]} />
    <T.MeshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.08} />
  </T.Mesh>
{:else if type === 'process'}
  <T.Mesh position={[0, 0, -3]} rotation={[rotation.x * 0.2, rotation.y * 0.2, 0]}>
    <T.CylinderGeometry args={[2, 2, 0.1, 32]} />
    <T.MeshStandardMaterial color="#ffffff" wireframe transparent opacity={0.05} />
  </T.Mesh>
{:else if type === 'testimonials'}
  <T.Mesh position={[0, 0, -5]} rotation={[rotation.x, rotation.y, rotation.x]}>
    <T.DodecahedronGeometry args={[4, 0]} />
    <T.MeshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.03} />
  </T.Mesh>
{:else if type === 'contact'}
  <T.Mesh position={[0, 0, -2]} rotation={[0, rotation.y * 2, 0]}>
    <T.RingGeometry args={[1, 1.05, 32]} />
    <T.MeshStandardMaterial color="#06b6d4" transparent opacity={0.2} />
  </T.Mesh>
{/if}
