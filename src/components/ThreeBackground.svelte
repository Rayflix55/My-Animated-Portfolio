<script lang="ts">
  import { T, useTask } from '@threlte/core';
  import { Float } from '@threlte/extras';
  import * as THREE from 'three';
  
  let { type = 'hero' } = $props();
  
  let time = $state(0);
  let mouse = $state({ x: 0, y: 0 });
  let targetMouse = $state({ x: 0, y: 0 });

  useTask((delta: number) => {
    time += delta;
    mouse.x += (targetMouse.x - mouse.x) * 0.05;
    mouse.y += (targetMouse.y - mouse.y) * 0.05;
  });

  const handleMouseMove = (e: MouseEvent) => {
    targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };
</script>

<svelte:window onmousemove={handleMouseMove} />

<T.PerspectiveCamera makeDefault position={[0, 0, 5]} fov={60} />

<T.AmbientLight intensity={0.2} />
<T.DirectionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
<T.PointLight position={[-5, 3, 2]} intensity={2} color="#06b6d4" />
<T.PointLight position={[5, -3, 2]} intensity={1} color="#3b82f6" />
<T.SpotLight position={[0, 10, 5]} intensity={1} color="#ffffff" angle={0.3} penumbra={1} />

{#if type === 'hero'}
  <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
    <T.Mesh
      position={[0, 0, 0]}
      rotation={[time * 0.1 + mouse.y * 0.3, time * 0.15 + mouse.x * 0.3, 0]}
    >
      <T.IcosahedronGeometry args={[1.2, 1]} />
      <T.MeshPhysicalMaterial
        color="#06b6d4"
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.85}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </T.Mesh>
  </Float>

  <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
    <T.Mesh position={[0, 0, 0]} rotation={[time * 0.05, time * 0.08, 0]}>
      <T.IcosahedronGeometry args={[1.8, 1]} />
      <T.MeshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.06} />
    </T.Mesh>
  </Float>

  <T.Mesh position={[0, 0, 0]} rotation={[Math.PI / 3, time * 0.3, 0]}>
    <T.TorusGeometry args={[2.2, 0.008, 16, 100]} />
    <T.MeshBasicMaterial color="#06b6d4" transparent opacity={0.3} />
  </T.Mesh>

  <T.Mesh position={[0, 0, 0]} rotation={[Math.PI / 5, time * -0.2, Math.PI / 4]}>
    <T.TorusGeometry args={[2.5, 0.005, 16, 100]} />
    <T.MeshBasicMaterial color="#ffffff" transparent opacity={0.1} />
  </T.Mesh>

  {#each [0, 1, 2, 3, 4] as i}
    <T.Mesh
      position={[
        Math.cos(time * 0.4 + (i * Math.PI * 2) / 5) * 2.2,
        Math.sin(time * 0.3 + (i * Math.PI * 2) / 5) * 0.8,
        Math.sin(time * 0.4 + (i * Math.PI * 2) / 5) * 1.2
      ]}
    >
      <T.OctahedronGeometry args={[0.08, 0]} />
      <T.MeshPhysicalMaterial
        color="#06b6d4"
        metalness={1}
        roughness={0}
        emissive="#06b6d4"
        emissiveIntensity={0.5}
      />
    </T.Mesh>
  {/each}

{:else if type === 'about'}
  <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
    <T.Mesh position={[0, 0, -1]} rotation={[time * 0.1, time * 0.2, Math.PI / 4]}>
      <T.TorusKnotGeometry args={[1.5, 0.3, 128, 16, 2, 3]} />
      <T.MeshPhysicalMaterial
        color="#06b6d4"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.7}
        clearcoat={1}
        emissive="#06b6d4"
        emissiveIntensity={0.1}
      />
    </T.Mesh>
  </Float>

  <T.Mesh position={[0, 0, -1]} rotation={[time * 0.05, time * 0.1, Math.PI / 4]}>
    <T.TorusKnotGeometry args={[1.8, 0.35, 64, 8, 2, 3]} />
    <T.MeshBasicMaterial color="#ffffff" wireframe transparent opacity={0.04} />
  </T.Mesh>

{:else if type === 'projects'}
  {#each [[0,0,0], [2,1,-2], [-2,-1,-2]] as pos, i}
    <Float speed={1 + i * 0.3} rotationIntensity={0.5} floatIntensity={0.4}>
      <T.Mesh
        position={pos as [number, number, number]}
        rotation={[time * (0.1 + i * 0.05), time * (0.15 + i * 0.05), 0]}
      >
        <T.BoxGeometry args={[1, 1, 1]} />
        <T.MeshPhysicalMaterial
          color={i === 0 ? "#06b6d4" : "#ffffff"}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={i === 0 ? 0.8 : 0.15}
          clearcoat={1}
          wireframe={i !== 0}
        />
      </T.Mesh>
    </Float>
  {/each}

{:else if type === 'experience'}
  <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.5}>
    <T.Mesh position={[0, 0, 0]} rotation={[time * 0.05, time * 0.1, 0]}>
      <T.SphereGeometry args={[1.5, 64, 64]} />
      <T.MeshPhysicalMaterial
        color="#06b6d4"
        metalness={1}
        roughness={0}
        transparent
        opacity={0.15}
        clearcoat={1}
      />
    </T.Mesh>
  </Float>

  <T.Mesh position={[0, 0, 0]} rotation={[time * 0.03, time * 0.06, 0]}>
    <T.SphereGeometry args={[1.8, 16, 16]} />
    <T.MeshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.08} />
  </T.Mesh>

  {#each [0, 1, 2] as i}
    <T.Mesh
      position={[0, 0, 0]}
      rotation={[
        Math.PI / (2 + i),
        time * (0.15 + i * 0.05),
        (i * Math.PI) / 3
      ]}
    >
      <T.TorusGeometry args={[2 + i * 0.4, 0.006, 16, 100]} />
      <T.MeshBasicMaterial
        color={i === 0 ? "#06b6d4" : "#ffffff"}
        transparent
        opacity={0.15 - i * 0.04}
      />
    </T.Mesh>
  {/each}

{:else if type === 'services'}
  <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.7}>
    <T.Mesh position={[0, 0, 0]} rotation={[time * 0.12, time * 0.08, time * 0.05]}>
      <T.OctahedronGeometry args={[1.5, 0]} />
      <T.MeshPhysicalMaterial
        color="#06b6d4"
        metalness={0.9}
        roughness={0.05}
        transparent
        opacity={0.75}
        clearcoat={1}
        emissive="#06b6d4"
        emissiveIntensity={0.2}
      />
    </T.Mesh>
  </Float>

  <T.Mesh position={[0, 0, 0]} rotation={[time * 0.06, time * 0.04, time * 0.02]}>
    <T.OctahedronGeometry args={[2.2, 0]} />
    <T.MeshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.06} />
  </T.Mesh>

  {#each Array(12) as _, i}
    <T.Mesh
      position={[
        Math.cos((i / 12) * Math.PI * 2) * 2.8,
        Math.sin(time * 0.5 + i) * 0.2,
        Math.sin((i / 12) * Math.PI * 2) * 2.8
      ]}
    >
      <T.SphereGeometry args={[0.04, 8, 8]} />
      <T.MeshPhysicalMaterial
        color="#06b6d4"
        emissive="#06b6d4"
        emissiveIntensity={1}
        metalness={1}
        roughness={0}
      />
    </T.Mesh>
  {/each}

{:else if type === 'process'}
  {#each [0, 1, 2, 3] as i}
    <T.Mesh
      position={[0, (i - 1.5) * 0.8, 0]}
      rotation={[Math.PI / 2, time * (0.1 + i * 0.03) * (i % 2 === 0 ? 1 : -1), 0]}
    >
      <T.TorusGeometry args={[1.5 - i * 0.15, 0.015, 16, 100]} />
      <T.MeshPhysicalMaterial
        color="#06b6d4"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.4 - i * 0.05}
        emissive="#06b6d4"
        emissiveIntensity={0.1}
      />
    </T.Mesh>
  {/each}

{:else if type === 'testimonials'}
  <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.4}>
    <T.Mesh position={[0, 0, -1]} rotation={[time * 0.08, time * 0.12, 0]}>
      <T.DodecahedronGeometry args={[1.8, 0]} />
      <T.MeshPhysicalMaterial
        color="#06b6d4"
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.4}
        clearcoat={1}
      />
    </T.Mesh>
  </Float>

  <T.Mesh position={[0, 0, -1]} rotation={[time * 0.04, time * 0.06, 0]}>
    <T.DodecahedronGeometry args={[2.4, 0]} />
    <T.MeshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.04} />
  </T.Mesh>

{:else if type === 'contact'}
  {#each [0, 1, 2] as i}
    <T.Mesh
      position={[0, 0, -i * 0.3]}
      rotation={[0, time * (0.3 - i * 0.08), 0]}
    >
      <T.TorusGeometry args={[1.2 + i * 0.3, 0.02 - i * 0.005, 16, 100]} />
      <T.MeshPhysicalMaterial
        color="#06b6d4"
        metalness={0.9}
        roughness={0}
        transparent
        opacity={0.6 - i * 0.15}
        emissive="#06b6d4"
        emissiveIntensity={0.3 - i * 0.1}
      />
    </T.Mesh>
  {/each}

  <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
    <T.Mesh position={[0, 0, 0]} rotation={[time * 0.2, time * 0.3, 0]}>
      <T.OctahedronGeometry args={[0.5, 0]} />
      <T.MeshPhysicalMaterial
        color="#06b6d4"
        metalness={1}
        roughness={0}
        clearcoat={1}
        emissive="#06b6d4"
        emissiveIntensity={0.5}
      />
    </T.Mesh>
  </Float>
{/if}