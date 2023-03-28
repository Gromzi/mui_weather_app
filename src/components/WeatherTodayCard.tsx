import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Input,
  Typography,
} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import useFetch from '../hooks/useFetch'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import CurrentWeatherInfo from './CurrentWeatherInfo'
import '../styles/_todayView.scss'

const WeatherTodayCard = () => {
  const [cityNameInput, setCityNameInput] = useState('Gliwice')
  const [cityNameFetch, setCityNameFetch] = useState('Gliwice')

  const cityNameInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCityNameInput(event.target.value)
  }
  const {
    data: weatherData,
    loading: weatherLoading,
    error: weatherError,
    refetch: refetchWeather,
  } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityNameFetch}&appid=04d17285ab8ef463daa39bc709f7c313&units=metric`
  )
  // weatherError && console.log(weatherError)
  // coordsError && console.log(coordsError)
  // console.log(weatherData)
  // console.log(coordsData)

  return (
    <Card
      sx={{
        maxWidth: 345,
        ml: 2,
        mr: 2,
        mt: 2,
        backgroundColor: 'secondary.main',
      }}
      elevation={20}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          Weather Info
          <RefreshIcon className="icon" onClick={refetchWeather} />
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Input
            placeholder="Enter city name"
            onChange={cityNameInputHandler}
            value={cityNameInput}
          />
          <SearchIcon
            className="icon"
            onClick={() => {
              setCityNameFetch(cityNameInput)
            }}
          />
        </Box>

        {weatherLoading ? (
          <CircularProgress sx={{ alignSelf: 'center' }} />
        ) : (
          <CurrentWeatherInfo
            weatherData={weatherData}
            weatherError={weatherError}
          />
        )}
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
  )
}

export default WeatherTodayCard
