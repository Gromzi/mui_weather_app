import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  ThemeProvider,
  createTheme,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material'
import App from './App'

const theme = createTheme({
  palette: {
    primary: {
      main: '#001e3c',
    },
    secondary: {
      main: '#0a1929',
    },
    text: {
      primary: '#f3f6f9',
      secondary: '#4c76a0',
    },
  },
  typography: {
    allVariants: {
      color: '#f3f6f9',
    },
  },
})

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
