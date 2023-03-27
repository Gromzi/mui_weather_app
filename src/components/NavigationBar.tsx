import {
  BottomNavigation,
  BottomNavigationAction,
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
      <BottomNavigationAction
        label="Day"
        href="#today"
        // icon={<Typography variant="button">Day</Typography>}
        icon={
          <Filter1RoundedIcon
            className="icon"
            sx={{ color: 'primary.light', mb: 0.5 }}
          />
        }
      />
      <BottomNavigationAction
        label="Week"
        href="#week"
        // icon={<Typography variant="button">Week</Typography>}
        icon={
          <Filter7Icon
            className="icon"
            sx={{ color: 'primary.light', mb: 0.5 }}
          />
        }
      />
    </BottomNavigation>
  )
}

export default NavigationBar
