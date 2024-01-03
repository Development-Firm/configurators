'use client'
import Image from 'next/image'
import styles from './page.module.css'
import TableConfigurator from './components/tableConfigurator/configurator'
import { useState } from 'react'
import PlaystationConfigurator from './components/ps5Configurator/configurator'
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography
} from '@mui/material'
import SofaConfigurator from './components/sofaConfigurator/configurator'
import JewellryConfigurator from './components/jewellryConfigurator/configurator'

export default function Home () {
  const [ps5Texture, setPs5Texture] = useState('base')
  const [tableTexture, setTableTexture] = useState('weatherHead')
  const [sofaTexture, setSofaTexture] = useState('brown')
  const [diamondTexture, setDiamondTexture] = useState('')
  const [baseTexture, setBaseTexture] = useState('')
  const [furnitureCategory, setFurnitureCategory] = useState('table')
  const [configuratorType, setConfiguratorType] = useState('FURNITURE')

  const ps5TextureHandler = texture => setPs5Texture(texture)

  const tableTextureHandler = texture => setTableTexture(texture)

  const sofaTextureHandler = texture => setSofaTexture(texture)

  const diamondTextureHandler = texture => setDiamondTexture(texture)

  const baseTextureHandler = texture => setBaseTexture(texture)

  const handleFurnitureCategory = cat => setFurnitureCategory(cat)

  const handleChange = event => {
    setConfiguratorType(event.target.value)
  }

  const ps5_configurator = [
    {
      name: 'Last of us',
      imageSlug: '/images/configurators/lastofus.jpg',
      texture: 'lastofus'
    },
    {
      name: 'RDR 2',
      imageSlug: '/images/configurators/rdr2.jpg',
      texture: 'rdr2'
    },
    {
      name: 'GTA VI',
      imageSlug: '/images/configurators/gta.jpg',
      texture: 'gta'
    },
    {
      name: 'Spider man',
      imageSlug: '/images/configurators/spiderman.jpg',
      texture: 'spiderman'
    }
  ]

  const furniture_configurator = {
    table: [
      {
        name: 'Gray',
        imageSlug: '/images/configurators/gray.jpg',
        texture: 'gray'
      },
      {
        name: 'Weather Head',
        imageSlug: '/images/configurators/weather-head.jpg',
        texture: 'weatherHead'
      },
      {
        name: 'White wash',
        imageSlug: '/images/configurators/white-wash.jpg',
        texture: 'whiteWash'
      },
      {
        name: 'Natural Oil',
        imageSlug: '/images/configurators/natural-oil.jpg',
        texture: 'naturalOil'
      }
    ],
    sofa: [
      {
        name: 'Gray',
        imageSlug: '/images/configurators/gray.png',
        texture: 'gray'
      },
      {
        name: 'Blue',
        imageSlug: '/images/configurators/blue.png',
        texture: 'blue'
      },
      {
        name: 'Brown',
        imageSlug: '/images/configurators/brown.jpeg',
        texture: 'brown'
      },
      {
        name: 'Orange',
        imageSlug: '/images/configurators/orange.png',
        texture: 'orange'
      }
    ]
  }

  const jewellry_configurator = {
    diamond: [
      {
        name: 'Transparent White',
        imageSlug: '/images/configurators/white.jpg',
        texture: 'whiteDiamond'
      },
      {
        name: 'Red',
        imageSlug: '/images/configurators/red.jpg',
        texture: 'redDiamond'
      }
    ],
    base: [
      {
        name: 'Golden',
        imageSlug: '/images/configurators/gold.png',
        texture: 'goldenBase'
      },
      {
        name: 'Silver',
        imageSlug: '/images/configurators/silver.jpg',
        texture: 'silverBase'
      }
    ]
  }

  return (
    <Grid container columns={16} spacing={3}>
      <Grid item xs={11}>
        <Box sx={{ height: '100vh' }}>
          {configuratorType === 'PLAYSTATION 5' && (
            <PlaystationConfigurator texture={ps5Texture} />
          )}
          {configuratorType === 'FURNITURE' &&
            (furnitureCategory === 'table' ? (
              <TableConfigurator texture={tableTexture} />
            ) : (
              <SofaConfigurator texture={sofaTexture} />
            ))}
          {configuratorType === 'JEWELRY' && (
            <JewellryConfigurator
              baseTexture={baseTexture}
              diamondTexture={diamondTexture}
            />
          )}
        </Box>
      </Grid>
      <Grid item xs={5} pr={2}>
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Vertically center the content
            alignItems: 'center', // Horizontally center the content
            height: '100vh'
          }}
        >
          <Paper
            sx={{
              width: '90%',
              height: '90vh',
              borderRadius: '30px'
            }}
          >
            <Box py={2} px={3}>
              <Typography sx={{}}>{configuratorType}</Typography>
              <Typography variant='h4' sx={{ fontWeight: 'bold' }} mb={2}>
                Configure your own
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>
                    Category
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={configuratorType}
                    label='Category'
                    onChange={handleChange}
                  >
                    <MenuItem value={'FURNITURE'}>Furniture</MenuItem>
                    <MenuItem value={'PLAYSTATION 5'}>Playstation 5</MenuItem>
                    <MenuItem value={'JEWELRY'}>Jewelry</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/******************************* PLAYSTATION CONFIGURATOR CARD ******************************/}
              {configuratorType === 'PLAYSTATION 5' && (
                <>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: 'bold' }}
                    mb={2}
                    mt={2}
                  >
                    Choose skins
                  </Typography>
                  <Box>
                    <Grid container columns={16}>
                      {ps5_configurator.map((cat, i) => (
                        <Grid item xs={8} key={i} px={2} mb={2}>
                          <Box
                            sx={{
                              '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.05)',
                                transition: 'all 0.3s ease-in-out'
                              }
                            }}
                          >
                            <Image
                              src={cat.imageSlug}
                              alt={cat.name}
                              width={0}
                              height={0}
                              sizes='100vw'
                              style={{
                                width: '100%',
                                height: 'auto',
                                cursor: 'pointer'
                              }}
                              onClick={() => ps5TextureHandler(cat.texture)}
                            />
                          </Box>
                          <Typography
                            sx={{ textAlign: 'center', fontWeight: 'bold' }}
                          >
                            {cat.name}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </>
              )}

              {/******************************* FURNITURE CONFIGURATOR CARD ******************************/}
              {configuratorType === 'FURNITURE' && (
                <>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: 'bold' }}
                    mb={2}
                    mt={2}
                  >
                    Select Type
                  </Typography>
                  <Box mb={3}>
                    <Grid container columns={16}>
                      <Grid item xs={8}>
                        <Box
                          sx={{
                            textAlign: 'center',
                            '&:hover': {
                              cursor: 'pointer',
                              transform: 'scale(1.05)',
                              transition: 'all 0.3s ease-in-out'
                            }
                          }}
                        >
                          <Image
                            src={'/images/configurators/sofa.png'}
                            alt={'sofa'}
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{
                              width:
                                furnitureCategory === 'sofa' ? '30%' : '20%',
                              height: 'auto',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleFurnitureCategory('sofa')}
                          />
                        </Box>
                        <Typography
                          sx={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                          {'Sofa'}
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Box
                          sx={{
                            textAlign: 'center',

                            '&:hover': {
                              cursor: 'pointer',
                              transform: 'scale(1.05)',
                              transition: 'all 0.3s ease-in-out'
                            }
                          }}
                        >
                          <Image
                            src={'/images/configurators/table.png'}
                            alt={'table'}
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{
                              width:
                                furnitureCategory === 'table' ? '30%' : '20%',
                              height: 'auto',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleFurnitureCategory('table')}
                          />
                        </Box>
                        <Typography
                          sx={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                          {'Table'}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }} mb={2}>
                    Choose material
                  </Typography>
                  <Box>
                    <Grid container columns={16}>
                      {furniture_configurator[furnitureCategory].map(
                        (cat, i) => (
                          <Grid item xs={8} key={i} px={2} mb={2}>
                            <Box
                              sx={{
                                '&:hover': {
                                  cursor: 'pointer',
                                  transform: 'scale(1.05)',
                                  transition: 'all 0.3s ease-in-out'
                                }
                              }}
                            >
                              <Image
                                src={cat.imageSlug}
                                alt={cat.name}
                                width={0}
                                height={0}
                                sizes='100vw'
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  cursor: 'pointer'
                                }}
                                onClick={() => {
                                  if (furnitureCategory === 'table')
                                    tableTextureHandler(cat.texture)
                                  else sofaTextureHandler(cat.texture)
                                }}
                              />
                            </Box>
                            <Typography
                              sx={{ textAlign: 'center', fontWeight: 'bold' }}
                            >
                              {cat.name}
                            </Typography>
                          </Grid>
                        )
                      )}
                    </Grid>
                  </Box>
                </>
              )}
              {/******************************* JEWELRY CONFIGURATOR CARD ******************************/}
              {configuratorType === 'JEWELRY' && (
                <>
                  <Box p={2}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }} mb={2}>
                      Choose Diamond color
                    </Typography>
                    <Box>
                      <Grid container columns={16}>
                        {jewellry_configurator.diamond.map((cat, i) => (
                          <Grid item xs={8} key={i} px={2} mb={2}>
                            <Box
                              sx={{
                                '&:hover': {
                                  cursor: 'pointer',
                                  transform: 'scale(1.05)',
                                  transition: 'all 0.3s ease-in-out'
                                }
                              }}
                            >
                              <Image
                                src={cat.imageSlug}
                                alt={cat.name}
                                width={0}
                                height={0}
                                sizes='100vw'
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  cursor: 'pointer'
                                }}
                                onClick={() =>
                                  diamondTextureHandler(cat.texture)
                                }
                              />
                            </Box>
                            <Typography
                              sx={{ textAlign: 'center', fontWeight: 'bold' }}
                            >
                              {cat.name}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>

                  <Box p={2} mt={2}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }} mb={2}>
                      Choose Ring Base Color
                    </Typography>
                    <Box>
                      <Grid container columns={16}>
                        {jewellry_configurator.base.map((cat, i) => (
                          <Grid item xs={8} key={i} px={2} mb={2}>
                            <Box
                              sx={{
                                '&:hover': {
                                  cursor: 'pointer',
                                  transform: 'scale(1.05)',
                                  transition: 'all 0.3s ease-in-out'
                                }
                              }}
                            >
                              <Image
                                src={cat.imageSlug}
                                alt={cat.name}
                                width={0}
                                height={0}
                                sizes='100vw'
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  cursor: 'pointer'
                                }}
                                onClick={() => baseTextureHandler(cat.texture)}
                              />
                            </Box>
                            <Typography
                              sx={{ textAlign: 'center', fontWeight: 'bold' }}
                            >
                              {cat.name}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}
