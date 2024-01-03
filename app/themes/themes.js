'use client'

import styled from '@emotion/styled'
import {
  AppBar,
  Box,
  Button,
  Card,
  TextField,
  Typography,
  createTheme,
  responsiveFontSizes
} from '@mui/material'

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'Signika, sans-serif'
    },
    components: {
      // MuiAppBar: {
      //   styleOverrides: {
      //     root: {
      //       backgroundColor: 'transparent',
      //       boxShadow: 'none'
      //     }
      //   }
      // },
      MuiPaper: {
        styleOverrides: {
          root: {
            transition: 'all 1s ease'
          }
        }
      }
    }
  })
)
