import './styles/main.scss'
import TodayView from './views/TodayView'
import WeekView from './views/WeekView'
import NavigationBar from './components/NavigationBar'
import { Box } from '@mui/material'
import UpperNavBar from './components/UpperNavBar'

function App() {
  return (
    <Box
      className="appContainer"
      sx={{ backgroundColor: 'primary.main' }}
    >
      <UpperNavBar />

      <TodayView />

      <NavigationBar />
    </Box>
  )
}

export default App
