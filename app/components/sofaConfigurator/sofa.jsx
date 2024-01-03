import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Sofa (props) {
  const { nodes, materials } = useGLTF('/models/sofa/scene.glb')

  const blue = useTexture('/models/sofa/blue.png')
  blue.flipY = false
  const gray = useTexture('/models/sofa/gray.png')
  gray.flipY = false
  const brown = useTexture('/models/sofa/brown.jpeg')
  brown.flipY = false
  const orange = useTexture('/models/sofa/orange.png')
  orange.flipY = false

  const textureMap = {
    blue,
    gray,
    brown,
    orange
  }

  materials['Material.001'].setValues({ map: textureMap[props.texture] })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial003.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial002.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial001.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/models/sofa/scene.glb')
