import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from '@mui/material'

const NavigationBar = () => {
  return (
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
          '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
            color: (theme) => theme.palette.secondary.main,
          },
        },
      }}
      value={undefined}
      onChange={() => {}}
    >
      <BottomNavigationAction
        label="Test"
        href="#today"
        icon={<Typography variant="button">Day</Typography>}
      />
      <BottomNavigationAction
        href="#week"
        icon={<Typography variant="button">Week</Typography>}
      />
    </BottomNavigation>
  )
}

export default NavigationBar
