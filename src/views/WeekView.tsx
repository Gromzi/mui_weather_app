import { Box, Typography } from '@mui/material'
import '../styles/_weekView.scss'

const WeekView = () => {
  return (
    <Box className="container" id="week">
      <Typography variant="h4" align="center" sx={{ pt: 10 }}>
        WeekView
      </Typography>
    </Box>
  )
}

export default WeekView
