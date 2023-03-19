import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  withTheme,
} from '@mui/material'
import Filter1RoundedIcon from '@mui/icons-material/Filter1Rounded'
import Filter7Icon from '@mui/icons-material/Filter7'

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
            sx={{ color: 'primary.light', mb: 0.5 }}
          />
        }
      />
      <BottomNavigationAction
        label="Week"
        href="#week"
        // icon={<Typography variant="button">Week</Typography>}
        icon={
          <Filter7Icon sx={{ color: 'primary.light', mb: 0.5 }} />
        }
      />
    </BottomNavigation>
  )
}

export default NavigationBar
