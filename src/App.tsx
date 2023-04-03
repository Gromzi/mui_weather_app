import './styles/main.scss'
import TodayView from './views/TodayView'
import NavigationBar from './components/NavigationBar'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import UpperNavBar from './components/UpperNavBar'
import { useState } from 'react'
import { accViewSetterFunctionType } from './types/types'

function App() {
  const [accessibilityView, setAccessibilityView] = useState(false)

  const accViewSetter: accViewSetterFunctionType = () => {
    setAccessibilityView(!accessibilityView)
  }

  let primaryColor: string
  let secondaryColor: string
  let textColor: string
  let secondaryTextColor: string

  if (accessibilityView) {
    primaryColor = '#ffffff'
    secondaryColor = '#cccccc'
    textColor = '#000000'
    secondaryTextColor = '#0a1929'
  } else {
    primaryColor = '#001e3c'
    secondaryColor = '#0a1929'
    textColor = '#f3f6f9'
    secondaryTextColor = '#4c76a0'
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      text: {
        primary: textColor,
        secondary: secondaryTextColor,
      },
    },
    typography: {
      allVariants: {
        color: textColor,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="appContainer"
        sx={{ backgroundColor: 'primary.main' }}
      >
        <UpperNavBar
          accViewSetter={accViewSetter}
          accView={accessibilityView}
        />

        <TodayView accView={accessibilityView} />

        <NavigationBar />
      </Box>
    </ThemeProvider>
  )
}

export default App
