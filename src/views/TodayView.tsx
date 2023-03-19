import { Box, Typography } from '@mui/material'
import '../styles/_todayView.scss'

const TodayView = () => {
  return (
    <Box className="container" id="today">
      <Typography variant="h4" align="center" sx={{ pt: 10 }}>
        TodayView
      </Typography>
    </Box>
  )
}

export default TodayView
