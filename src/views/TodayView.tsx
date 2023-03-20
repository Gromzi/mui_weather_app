import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import '../styles/_todayView.scss'
import useFetch from '../hooks/useFetch'
import { textAlign } from '@mui/system'

const TodayView = () => {
  const { data, loading, error, refetch } = useFetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=04d17285ab8ef463daa39bc709f7c313'
  )
  error && console.log(error)
  console.log(data)

  return (
    <Box
      className="container"
      id="today"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant="h4" align="center" sx={{ pt: 10 }}>
        TodayView
      </Typography>

      <Card
        sx={{
          maxWidth: 345,
          ml: 2,
          mr: 2,
          mt: 8,
          backgroundColor: 'secondary.main',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather Info
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            {loading ? <CircularProgress /> : data?.main.feels_like}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: 'text.secondary' }}>
            Share
          </Button>
          <Button size="small" sx={{ color: 'text.secondary' }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default TodayView
