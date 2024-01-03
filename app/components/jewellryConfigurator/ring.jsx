'use client'
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export function Ring (props) {
  const { nodes, materials } = useGLTF('/models/jewellry/scene.glb')

  const goldenBase = useTexture(`/models/jewellry/gold.png`)
  goldenBase.flipY = false
  const silverBase = useTexture(`/models/jewellry/silver.jpg`)
  silverBase.flipY = false
  const redDiamond = useTexture(`/models/jewellry/red.jpg`)
  redDiamond.flipY = false
  const whiteDiamond = useTexture(`/models/jewellry/white.jpg`)
  whiteDiamond.flipY = false

  const textureMap = {
    goldenBase,
    silverBase,
    redDiamond,
    whiteDiamond
  }

  materials.Ring.setValues({
    // color: 'red',
    metalness: 1,
    roughness: 0.3
  })
  materials['Diamond Color'].setValues({
    // color: 'red',
    metalness: 1,
    roughness: 0.3
  })

  if (props.diamondTexture)
    materials['Diamond Color'].setValues({
      // color: 'red',
      map: textureMap[props.diamondTexture]
    })

  if (props.baseTexture)
    materials.Ring.setValues({
      // color: 'red',
      map: textureMap[props.baseTexture]
    })

  return (
    <group {...props} dispose={null}>
      <group scale={0.04}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2_Material_3_0.geometry}
          material={materials['Diamond Color']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\\u007f\\u007f\\u007f_MATERIAL=\\u007f\\u007f\\u007f_\\u007f'
            ].geometry
          }
          material={materials.Ring}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\\u007f\\u007f\\u007f_MATERIAL=\\u007f\\u007f\\u007f_\\u007f001'
            ].geometry
          }
          material={materials.Ring}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\\u007f\\u007f\\u007f_MATERIAL=\\u007f\\u007f\\u007f_\\u007f002'
            ].geometry
          }
          material={materials.Ring}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\\u007f\\u007f\\u007f_MATERIAL=\\u007f\\u007f\\u007f_\\u007f003'
            ].geometry
          }
          material={materials.Ring}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\\u007f\\u007f\\u007f_MATERIAL=\\u007f\\u007f\\u007f_\\u007f004'
            ].geometry
          }
          material={materials.Ring}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\\u007f\\u007f\\u007f_MATERIAL=\\u007f\\u007f\\u007f_\\u007f005'
            ].geometry
          }
          material={materials.Ring}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/jewellry/scene.glb')
