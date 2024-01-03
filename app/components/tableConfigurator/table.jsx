'use client'
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Table (props) {
  const { nodes, materials } = useGLTF('/models/table/scene.glb')
  const naturalOil = useTexture('/models/table/natural-oil.jpg')
  naturalOil.flipY = false
  const gray = useTexture('/models/table/gray.png')
  gray.flipY = false
  const weatherHead = useTexture('/models/table/weather-head.png')
  weatherHead.flipY = false
  const whiteWash = useTexture('/models/table/white-wash.png')
  whiteWash.flipY = false

  const textureMap = {
    naturalOil,
    gray,
    weatherHead,
    whiteWash
  }

  materials.blinn1.setValues({ map: textureMap[props.texture] })
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder6_blinn1_0.geometry}
        material={materials.blinn1}
      />
    </group>
  )
}

useGLTF.preload('/models/table/scene.glb')
