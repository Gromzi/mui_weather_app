import './styles/main.scss'
import TodayView from './views/TodayView'
import NavigationBar from './components/NavigationBar'
import { Box } from '@mui/material'
import UpperNavBar from './components/UpperNavBar'
import { useState } from 'react'

function App() {
  const [accessibilityView, setAccessibilityView] = useState(false)

  const accessibilityViewSetter = () => {
    setAccessibilityView(!accessibilityView)
    console.log(`Accessibility view: ${accessibilityView}`)
  }

  return (
    <Box
      className="appContainer"
      sx={{ backgroundColor: 'primary.main' }}
    >
      <UpperNavBar
        accessibilityViewSetter={accessibilityViewSetter}
      />

      <TodayView accView={accessibilityView} />

      <NavigationBar />
    </Box>
  )
}

export default App
