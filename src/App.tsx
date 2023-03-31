import './styles/main.scss'
import TodayView from './views/TodayView'
import NavigationBar from './components/NavigationBar'
import { Box } from '@mui/material'
import UpperNavBar from './components/UpperNavBar'
import { useState } from 'react'
import { accViewSetterFunctionType } from './types/types'

function App() {
  const [accessibilityView, setAccessibilityView] = useState(false)

  const accViewSetter: accViewSetterFunctionType = () => {
    setAccessibilityView(!accessibilityView)
  }

  return (
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
  )
}

export default App
