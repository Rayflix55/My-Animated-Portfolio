<script lang="ts">
  import { T, useTask } from '@threlte/core';
  import * as THREE from 'three';

  let { type = 'hero' } = $props<{
    type?: 'hero' | 'experience' | 'services' | 'contact' | 'work' | 'about' | 'projects' | 'testimonials';
  }>();

  // ── Scroll tracking ───────────────────────────────────────────────────────
  let scrollVelocity = 0;
  let lastScrollY = 0;
  let velocityDecay = 0;

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      scrollVelocity = Math.abs(sy - lastScrollY);
      lastScrollY = sy;
      velocityDecay = 1.0;
    }, { passive: true });
  }

  // ── Star field ────────────────────────────────────────────────────────────
  const STAR_COUNT = 400;
  const DEPTH  = 60;
  const SPREAD = 22;

  const starColors = [
    new THREE.Color('#ffffff'),
    new THREE.Color('#cce8ff'),
    new THREE.Color('#fff4cc'),
    new THREE.Color('#ccf5ff'),
    new THREE.Color('#ffd6f0'),
    new THREE.Color('#b8d4ff'),
  ];

  const starData = new Float32Array(STAR_COUNT * 7);
  for (let i = 0; i < STAR_COUNT; i++) {
    const b = i * 7;
    starData[b]     = (Math.random() - 0.5) * SPREAD;
    starData[b + 1] = (Math.random() - 0.5) * SPREAD;
    starData[b + 2] = (Math.random() - 0.5) * DEPTH;
    starData[b + 3] = 0.06 + Math.random() * Math.random() * 0.18;
    starData[b + 4] = Math.random() * Math.PI * 2;
    starData[b + 5] = 0.3 + Math.random() * 1.0;
    starData[b + 6] = Math.floor(Math.random() * starColors.length);
  }

  const starPositions = new Float32Array(STAR_COUNT * 3);
  const starSizes     = new Float32Array(STAR_COUNT);
  const starAlphas    = new Float32Array(STAR_COUNT);
  const starColorArr  = new Float32Array(STAR_COUNT * 3);

  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position',  new THREE.BufferAttribute(starPositions, 3));
  starGeo.setAttribute('size',      new THREE.BufferAttribute(starSizes, 1));
  starGeo.setAttribute('alpha',     new THREE.BufferAttribute(starAlphas, 1));
  starGeo.setAttribute('starColor', new THREE.BufferAttribute(starColorArr, 3));

  for (let i = 0; i < STAR_COUNT; i++) {
    const ci = starData[i * 7 + 6];
    const c  = starColors[ci];
    starColorArr[i * 3]     = c.r;
    starColorArr[i * 3 + 1] = c.g;
    starColorArr[i * 3 + 2] = c.b;
  }
  (starGeo.attributes.starColor as THREE.BufferAttribute).needsUpdate = true;

  const streakPositions = new Float32Array(STAR_COUNT * 2 * 3);
  const streakGeo = new THREE.BufferGeometry();
  const streakPosAttr = new THREE.BufferAttribute(streakPositions, 3);
  streakGeo.setAttribute('position', streakPosAttr);

  const starMaterial = new THREE.ShaderMaterial({
    vertexShader: `
      attribute float size;
      attribute float alpha;
      attribute vec3 starColor;
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        vAlpha = alpha;
        vColor = starColor;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (500.0 / -mvPos.z);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        vec2 uv = gl_PointCoord - vec2(0.5);
        float d = length(uv);
        if (d > 0.5) discard;
        float core = smoothstep(0.5, 0.0, d);
        float halo = smoothstep(0.5, 0.15, d) * 0.5;
        gl_FragColor = vec4(vColor, (core + halo) * vAlpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  // ── Reactive planet + sun state (Threlte reads these as props) ────────────
  // Sun
  let sunScale     = $state(1.0);
  let sunGlow1Scale = $state(1.0);
  let sunGlow2Scale = $state(1.0);
  let sunGlow2Rot   = $state(0);
  let sunGlow3Scale = $state(1.0);

  // Planet 1 — gas giant, orbits sun
  const SUN = [6, -3, -10] as const;
  let p1x = $state(SUN[0] + 2.5);
  let p1y = $state(SUN[1]);
  let p1z = $state(SUN[2]);
  let p1rotY = $state(0);
  let p1ringRotZ = $state(0);

  // Planet 2 — rocky, wider orbit
  let p2x = $state(SUN[0] + 4.5);
  let p2y = $state(SUN[1]);
  let p2z = $state(SUN[2]);
  let p2rotY = $state(0);

  // Planet 3 — tiny, fastest orbit
  let p3x = $state(SUN[0] + 6.5);
  let p3y = $state(SUN[1]);
  let p3z = $state(SUN[2]);
  let p3rotY = $state(0);
  let p3rotX = $state(0);

  // Stars
  let starsRotZ = $state(0);
  let starsRotX = $state(0);
  let warpSmooth = 0;

  let pointsRef: THREE.Points       | undefined = $state();
  let streakRef: THREE.LineSegments | undefined = $state();

  let time = 0;

  const accentHex = $derived(
    type === 'services'   ? '#e879f9' :
    type === 'experience' ? '#60a5fa' :
    type === 'contact'    ? '#34d399' :
    type === 'about'      ? '#f59e0b' : '#06b6d4'
  );

  // ── Animation loop ────────────────────────────────────────────────────────
  useTask((delta) => {
    const dt = Math.min(delta, 0.05);
    time += dt;

    // Warp
    const rawWarp = Math.min(scrollVelocity / 18, 1.0);
    warpSmooth += (rawWarp - warpSmooth) * 0.12;
    if (velocityDecay > 0) {
      velocityDecay -= dt * 3;
      if (velocityDecay <= 0) { velocityDecay = 0; scrollVelocity *= 0.8; }
    } else {
      scrollVelocity *= 0.75;
    }

    // ── Stars ───────────────────────────────────────────────────────────────
    const sp  = starGeo.attributes.position.array as Float32Array;
    const sz  = starGeo.attributes.size.array     as Float32Array;
    const al  = starGeo.attributes.alpha.array    as Float32Array;
    const str = streakPosAttr.array               as Float32Array;
    const maxStreak = warpSmooth * 9.0;

    for (let i = 0; i < STAR_COUNT; i++) {
      const b = i * 7; const p = i * 3; const s = i * 6;
      let x = starData[b], y = starData[b+1], z = starData[b+2];
      const baseSize = starData[b+3], twinkPhase = starData[b+4], twinkSpeed = starData[b+5];

      if (warpSmooth > 0.02) {
        const depth = (z + DEPTH * 0.5) / DEPTH;
        z += warpSmooth * 14 * dt * (0.4 + depth);
        starData[b+2] = z;
        if (z > DEPTH * 0.5) {
          starData[b+2] = -DEPTH * 0.5;
          starData[b]   = (Math.random() - 0.5) * SPREAD;
          starData[b+1] = (Math.random() - 0.5) * SPREAD;
        }
      }

      const idle = 1 - warpSmooth;
      sp[p]   = x + Math.sin(time * 0.035 * twinkSpeed + twinkPhase) * 0.12 * idle;
      sp[p+1] = y + Math.cos(time * 0.028 * twinkSpeed + twinkPhase * 1.6) * 0.12 * idle;
      sp[p+2] = z;

      const twinkle = 0.5 + 0.5 * Math.sin(time * twinkSpeed + twinkPhase);
      al[i] = Math.min(0.55 + twinkle * 0.45 + warpSmooth * 0.3, 1.0);
      sz[i] = baseSize * (1.0 + twinkle * 0.35) * (1.0 - warpSmooth * 0.5);

      str[s]=sp[p]; str[s+1]=sp[p+1]; str[s+2]=sp[p+2];
      const df = 0.3 + (z + DEPTH*0.5) / DEPTH * 0.7;
      str[s+3]=sp[p]; str[s+4]=sp[p+1]; str[s+5]=sp[p+2] - maxStreak*df;
    }

    (starGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (starGeo.attributes.size     as THREE.BufferAttribute).needsUpdate = true;
    (starGeo.attributes.alpha    as THREE.BufferAttribute).needsUpdate = true;
    streakPosAttr.needsUpdate = true;

    starsRotZ = time * 0.006;
    starsRotX = Math.sin(time * 0.004) * 0.04;

    // ── Sun ──────────────────────────────────────────────────────────────────
    sunScale      = 1.0 + Math.sin(time * 0.8) * 0.03;
    sunGlow1Scale = 1.0 + Math.sin(time * 0.6) * 0.06;
    sunGlow2Scale = 1.0 + Math.sin(time * 0.4 + 1.0) * 0.1;
    sunGlow2Rot   = time * 0.05;
    sunGlow3Scale = 1.0 + Math.sin(time * 0.25 + 2.0) * 0.15;

    // ── Planet 1 — slow close orbit ──────────────────────────────────────────
    const o1 = time * 0.35;
    p1x = SUN[0] + Math.cos(o1) * 2.5;
    p1y = SUN[1] + Math.sin(o1) * 0.6;
    p1z = SUN[2] + Math.sin(o1 * 0.5) * 0.8;
    p1rotY += dt * 0.8;
    p1ringRotZ += dt * 0.15;

    // ── Planet 2 — medium orbit ───────────────────────────────────────────────
    const o2 = time * 0.2 + 2.1;
    p2x = SUN[0] + Math.cos(o2) * 4.5;
    p2y = SUN[1] + Math.sin(o2) * 1.2;
    p2z = SUN[2] + Math.sin(o2 * 0.7) * 1.2;
    p2rotY += dt * 1.2;

    // ── Planet 3 — wide fast orbit ────────────────────────────────────────────
    const o3 = time * 0.12 + 4.5;
    p3x = SUN[0] + Math.cos(o3) * 6.5;
    p3y = SUN[1] + Math.sin(o3) * 2.0;
    p3z = SUN[2] + Math.sin(o3 * 0.4) * 1.5;
    p3rotY += dt * 2.0;
    p3rotX += dt * 0.4;
  });
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 10]} fov={70} />

<T.AmbientLight intensity={0.08} />
<T.PointLight position={[SUN[0], SUN[1], SUN[2] + 2]} intensity={4.0} color="#fff4cc" distance={40} decay={1.5} />
<T.PointLight position={[SUN[0], SUN[1], SUN[2] + 2]} intensity={1.2} color="#ff9933" distance={22} decay={2} />

<!-- ── SUN ── -->
<T.Mesh position={[SUN[0], SUN[1], SUN[2]]} scale={sunScale}>
  <T.SphereGeometry args={[0.9, 32, 32]} />
  <T.MeshBasicMaterial color="#fff5cc" />
</T.Mesh>
<T.Mesh position={[SUN[0], SUN[1], SUN[2]]} scale={sunGlow1Scale}>
  <T.SphereGeometry args={[1.1, 16, 16]} />
  <T.MeshBasicMaterial color="#ffdd66" transparent opacity={0.35}
    blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.BackSide} />
</T.Mesh>
<T.Mesh position={[SUN[0], SUN[1], SUN[2]]} scale={sunGlow2Scale} rotation={[0, 0, sunGlow2Rot]}>
  <T.SphereGeometry args={[1.5, 16, 16]} />
  <T.MeshBasicMaterial color="#ff8800" transparent opacity={0.15}
    blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.BackSide} />
</T.Mesh>
<T.Mesh position={[SUN[0], SUN[1], SUN[2]]} scale={sunGlow3Scale}>
  <T.SphereGeometry args={[2.2, 12, 12]} />
  <T.MeshBasicMaterial color="#ff4400" transparent opacity={0.06}
    blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.BackSide} />
</T.Mesh>

<!-- ── PLANET 1 — gas giant ── -->
<T.Mesh position={[p1x, p1y, p1z]} rotation={[0, p1rotY, 0]}>
  <T.SphereGeometry args={[0.55, 24, 24]} />
  <T.MeshStandardMaterial color="#1a3a5c" emissive="#0a1a3a"
    emissiveIntensity={0.2} roughness={0.8} metalness={0.1} />
</T.Mesh>
<T.Mesh position={[p1x, p1y, p1z]}>
  <T.SphereGeometry args={[0.65, 16, 16]} />
  <T.MeshBasicMaterial color="#3a6aac" transparent opacity={0.1}
    blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.BackSide} />
</T.Mesh>
<T.Mesh position={[p1x, p1y, p1z]} rotation={[Math.PI / 2.8, 0.3, p1ringRotZ]}>
  <T.RingGeometry args={[0.82, 1.35, 48]} />
  <T.MeshBasicMaterial color="#4a7aac" transparent opacity={0.22}
    side={THREE.DoubleSide} blending={THREE.AdditiveBlending} depthWrite={false} />
</T.Mesh>

<!-- ── PLANET 2 — rocky ── -->
<T.Mesh position={[p2x, p2y, p2z]} rotation={[0, p2rotY, 0]}>
  <T.SphereGeometry args={[0.32, 20, 20]} />
  <T.MeshStandardMaterial color="#2d1a4a" emissive="#1a0a2a"
    emissiveIntensity={0.15} roughness={0.9} metalness={0.05} />
</T.Mesh>
<T.Mesh position={[p2x, p2y, p2z]}>
  <T.SphereGeometry args={[0.38, 12, 12]} />
  <T.MeshBasicMaterial color="#8855cc" transparent opacity={0.08}
    blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.BackSide} />
</T.Mesh>

<!-- ── PLANET 3 — tiny distant ── -->
<T.Mesh position={[p3x, p3y, p3z]} rotation={[p3rotX, p3rotY, 0]}>
  <T.SphereGeometry args={[0.18, 16, 16]} />
  <T.MeshStandardMaterial color="#1a3a2a" emissive="#0a2015"
    emissiveIntensity={0.2} roughness={0.85} metalness={0.1} />
</T.Mesh>

<!-- Stars -->
<T.Points bind:ref={pointsRef} geometry={starGeo} material={starMaterial}
  rotation={[starsRotX, 0, starsRotZ]} />

<!-- Warp streaks -->
<T.LineSegments bind:ref={streakRef} geometry={streakGeo}
  rotation={[starsRotX, 0, starsRotZ]}>
  <T.LineBasicMaterial color={accentHex} transparent opacity={warpSmooth * 0.9}
    blending={THREE.AdditiveBlending} depthWrite={false} />
</T.LineSegments>