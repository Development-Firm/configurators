'use client'
import CanvasLoader from '@/app/components/global/loader'
import {
  MeshReflectorMaterial,
  OrbitControls,
  Preload,
  Stage,
  useHelper
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { Ring } from './ring'
import {
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper
} from 'three'

const Model = ({ diamondTexture, baseTexture }) => {
  const directionalLight1 = useRef(null)
  const directionalLight2 = useRef(null)
  const directionalLight3 = useRef(null)
  const directionalLight4 = useRef(null)
  const pointLight5 = useRef(null)
  const spotLight = useRef(null)
  // useHelper(directionalLight1, DirectionalLightHelper, 1, 'red')
  // useHelper(directionalLight2, DirectionalLightHelper, 1, 'blue')
  // useHelper(directionalLight3, DirectionalLightHelper, 1, 'green')
  // useHelper(directionalLight4, DirectionalLightHelper, 1, 'yellow')
  // useHelper(pointLight5, PointLightHelper, 1, 'orange')
  // useHelper(spotLight, SpotLightHelper, 1, 'cyan')
  return (
    <mesh>
      {/* <pointLight ref={pointLight} position={[0, 4, 0]} intensity={10} /> */}

      {/* <pointLight position={[0, 5, 0]} intensity={20} />
      <directionalLight
        ref={directionalLight1}
        position={[4, 1, 6]}
        intensity={3}
      />
      <directionalLight
        ref={directionalLight2}
        position={[-4, 1, -6]}
        intensity={3}
      />
      <directionalLight
        ref={directionalLight3}
        position={[0, 1, 6]}
        intensity={3}
      />
      <directionalLight
        ref={directionalLight4}
        position={[0, 1, -6]}
        intensity={3}
      />

      <ambientLight intensity={3} />
      <pointLight ref={pointLight5} position={[0, -1, 0]} intensity={5} /> */}
      {/* <axesHelper args={[10]} /> */}
      <Ring
        scale={4}
        position={[0, -0.8, 0]}
        diamondTexture={diamondTexture}
        baseTexture={baseTexture}
      />
    </mesh>
  )
}

const ModelCanvas = ({ diamondTexture, baseTexture }) => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 6, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} enablePan={false} />
        <Stage
          scale={0.01}
          environment='city'
          intensity={0.9}
          castShadow={false}
        >
          <Model diamondTexture={diamondTexture} baseTexture={baseTexture} />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#101010'
            metalness={0.5}
          />
        </mesh>
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
const JewellryConfigurator = ({ diamondTexture, baseTexture }) => {
  return (
    <ModelCanvas diamondTexture={diamondTexture} baseTexture={baseTexture} />
  )
}

export default JewellryConfigurator
