import { Box, Typography } from '@mui/material'
import WeatherTodayCard from '../components/WeatherTodayCard'
import '../styles/_todayView.scss'

const TodayView = ({ accView }: any) => {
  return (
    <Box
      className="container"
      id="today"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" align="center" sx={{ pt: '15%' }}>
        MUI Weather App
      </Typography>

      <WeatherTodayCard accView={accView} />
    </Box>
  )
}

export default TodayView
