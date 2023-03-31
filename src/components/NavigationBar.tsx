import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from '@mui/material'
import Filter1RoundedIcon from '@mui/icons-material/Filter1Rounded'
import Filter7Icon from '@mui/icons-material/Filter7'
import '../styles/_todayView.scss'

const NavigationBar = () => {
  return (
    <BottomNavigation
      showLabels
      sx={{
        backgroundColor: 'secondary.main',
      }}
      value={undefined}
      onChange={() => {}}
    >
      <Typography
        color={'text.secondary'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Michał Gierak 2023
      </Typography>
    </BottomNavigation>
  )
}

export default NavigationBar
