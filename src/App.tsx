import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from '@mui/material'
import './styles/main.scss'
import TodayView from './views/TodayView'
import WeekView from './views/WeekView'

function App() {
  return (
    <div className="appContainer">
      <TodayView />
      <WeekView />

      <BottomNavigation
        sx={{
          bgcolor: '#0a1929',
          '& .Mui-selected': {
            '& .MuiBottomNavigationAction-label': {
              fontSize: (theme) => theme.typography.caption,
              transition: 'none',
              fontWeight: 'bold',
              lineHeight: '20px',
            },
            '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label':
              {
                color: (theme) => theme.palette.secondary.main,
              },
          },
        }}
        value={undefined}
        onChange={() => {}}
      >
        <BottomNavigationAction
          href="#today"
          icon={<Typography variant="button">Day</Typography>}
        />
        <BottomNavigationAction
          href="#week"
          icon={<Typography variant="button">Week</Typography>}
        />
      </BottomNavigation>
    </div>
  )
}

export default App
