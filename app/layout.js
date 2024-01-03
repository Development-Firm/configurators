import { Inter } from 'next/font/google'
import './globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './themes/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '3d Configurators Prototype',
  description: '3d Configurators Prototype'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
