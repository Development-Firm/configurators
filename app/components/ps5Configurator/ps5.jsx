'use client'
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export function PS5 (props) {
  const { nodes, materials } = useGLTF('/models/ps5/scene.glb')

  const spiderman = useTexture(`/models/ps5/spiderman.jpg`)
  spiderman.flipY = false
  const lastofus = useTexture(`/models/ps5/lastofus.jpg`)
  lastofus.flipY = false
  const rdr2 = useTexture(`/models/ps5/rdr2.jpg`)
  rdr2.flipY = false
  const gta = useTexture(`/models/ps5/gta.jpg`)
  gta.flipY = false
  const base = useTexture(`/models/ps5/base.png`)
  base.flipY = false

  const textureMap = {
    spiderman,
    lastofus,
    rdr2,
    gta,
    base
  }

  materials['PS5 Skin'].setValues({
    // color: 'red',
    map: textureMap[props.texture]
  })

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PS5_PS5_0.geometry}
          material={materials['PS5 Skin']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PS5_PSLOGO_0.geometry}
          material={materials.PSLOGO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['HDMIPORT_ports_(black)_0'].geometry}
          material={materials.ports_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['HDMIPORT_ports_(gold)_0'].geometry}
          material={nodes['HDMIPORT_ports_(gold)_0'].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['HDMIPORT_ports_(silver)_0'].geometry}
          material={materials.ports_silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.POWERBUTTON_POWERBUTTON_0.geometry}
          material={materials.POWERBUTTON}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['POWERPORT_ports_(silver)_0'].geometry}
          material={materials.ports_silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.POWERPORT_powerport_0.geometry}
          material={materials.powerport}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.POWERPORT2_powerport_0.geometry}
          material={materials.powerport}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['PS_Bottom_PS_Body_(matte)_0'].geometry}
          material={materials.PS_Body_matte}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PS_STAND_PS_Stand_0.geometry}
          material={materials.PS_Stand}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PS5BODY_PS_Light_0.geometry}
          material={materials.PS_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['PS5BODY_PS_Body_(plastic)_0_1'].geometry}
          material={materials.PS_Body_plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['PS5BODY_PS_Body_(plastic)_0_2'].geometry}
          material={materials.ports_silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['PS5BODY_PS_Body_(plastic)_0_3'].geometry}
          material={materials.PS_Fan}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['PS5BODY_PS_Body_(plastic)_0_4'].geometry}
          material={materials.PS_Body_matte}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['USB_Port_ports_(black)_0'].geometry}
          material={materials.ports_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['USB_Port_ports_(blue)_0'].geometry}
          material={nodes['USB_Port_ports_(blue)_0'].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['USB_Port_ports_(silver)_0'].geometry}
          material={materials.ports_silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['USB_PORT2_ports_(black)_0'].geometry}
          material={materials.ports_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['USB_PORT2_ports_(blue)_0'].geometry}
          material={nodes['USB_PORT2_ports_(blue)_0'].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['USB_PORT2_ports_(silver)_0'].geometry}
          material={materials.ports_silver}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/ps5/scene.glb')
