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

  const unixToTime = (unix_timestamp: number): String => {
    let date = new Date(unix_timestamp * 1000)
    let hours = date.getHours()
    let minutes = '0' + date.getMinutes()
    let seconds = '0' + date.getSeconds()

    // Will display time in 10:30:23 format
    let formattedTime =
      hours + ':' + minutes.slice(-2) + ':' + seconds.slice(-2)

    return formattedTime
  }

  let datetime: String = Date().slice(0, 24)

  let sunriseTime: String = unixToTime(weatherData?.sys.sunrise)
  let sunsetTime: String = unixToTime(weatherData?.sys.sunset)

  return (
    <Card
      sx={{
        maxWidth: 345,
        ml: 2,
        mr: 2,
        mt: 4,
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
          <RefreshIcon onClick={refetchWeather} />
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
            onClick={() => {
              setCityNameFetch(cityNameInput)
            }}
          />
        </Box>

        {weatherLoading ? (
          <CircularProgress sx={{ alignSelf: 'center' }} />
        ) : (
          <Box className="weatherInfoContainer">
            {weatherError ? (
              <Typography variant="body1" color="text.secondary">
                Make sure you typed the city name correctly
              </Typography>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Typography
                    variant="body2"
                    fontWeight={'bold'}
                    fontSize="font.size"
                    color={'text.secondary'}
                  >
                    Date:
                  </Typography>
                  <Typography variant="body2">{datetime}</Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography
                    variant="body2"
                    fontWeight={'bold'}
                    color={'text.secondary'}
                  >
                    Temperature:
                  </Typography>
                  <Typography variant="body2">
                    {weatherData?.main.temp}°C
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography
                    variant="body2"
                    fontWeight={'bold'}
                    color={'text.secondary'}
                  >
                    Air pressure:
                  </Typography>
                  <Typography variant="body2">
                    {weatherData?.main.pressure} hPa
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography
                    variant="body2"
                    fontWeight={'bold'}
                    color={'text.secondary'}
                  >
                    Humidity:
                  </Typography>
                  <Typography variant="body2">
                    {weatherData?.main.humidity} %
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography
                    variant="body2"
                    fontWeight={'bold'}
                    color={'text.secondary'}
                  >
                    Sunrise:
                  </Typography>
                  <Typography variant="body2">
                    {sunriseTime}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography
                    variant="body2"
                    fontWeight={'bold'}
                    color={'text.secondary'}
                  >
                    Sunset:
                  </Typography>
                  <Typography variant="body2">
                    {sunsetTime}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Typography
                    variant="body2"
                    fontWeight={'bold'}
                    fontSize="font.size"
                    color={'text.secondary'}
                  >
                    Description:
                  </Typography>
                  <Typography variant="body2">
                    {weatherData?.weather[0].description}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
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
