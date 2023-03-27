import { Box, Typography } from '@mui/material'
import WeatherTodayCard from '../components/WeatherTodayCard'
import '../styles/_todayView.scss'

const TodayView = () => {
  return (
    <Box
      className="container"
      id="today"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" align="center" sx={{ pt: 10 }}>
        TodayView
      </Typography>

      <WeatherTodayCard />
    </Box>
  )
}

export default TodayView
