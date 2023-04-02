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
import AccessibilityWeatherInfo from './AccessibilityWeatherInfo'

const WeatherTodayCard = ({ accView }: any) => {
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

  const unixToTime = (unix_timestamp: number): String => {
    let date = new Date(unix_timestamp * 1000)

    let hours = date.getUTCHours()
    let minutes = '0' + date.getUTCMinutes()
    let seconds = '0' + date.getUTCSeconds()

    // Will display time in HH:MM:SS format
    let formattedTime =
      hours + ':' + minutes.slice(-2) + ':' + seconds.slice(-2)

    return formattedTime
  }

  const unixToDate = (unix_timestamp: number): String => {
    let date = new Date(unix_timestamp * 1000)

    let day = '0' + date.getUTCDate()
    let month = '0' + (date.getUTCMonth() + 1)
    let year = date.getUTCFullYear()

    let hours = date.getUTCHours()
    let minutes = '0' + date.getUTCMinutes()

    // Will display date in DD.MM.YYYY format
    let formattedDate =
      day.slice(-2) + '.' + month.slice(-2) + '.' + year + ' '

    // Will display time in HH:MM format
    let formattedTime = hours + ':' + minutes.slice(-2)

    return formattedDate + formattedTime
  }

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
            sx={{ fontSize: '18px', height: 30 }}
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
        ) : !accView ? (
          <CurrentWeatherInfo
            weatherData={weatherData}
            weatherError={weatherError}
            unixToTime={unixToTime}
            unixToDate={unixToDate}
          />
        ) : (
          <AccessibilityWeatherInfo
            weatherData={weatherData}
            weatherError={weatherError}
            unixToTime={unixToTime}
            unixToDate={unixToDate}
          />
        )}
      </CardContent>
    </Card>
  )
}

export default WeatherTodayCard
