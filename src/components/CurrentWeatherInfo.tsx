import { Box, Typography } from '@mui/material'

const CurrentWeatherInfo = ({ weatherData, weatherError }: any) => {
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

  let datetime: String = unixToDate(
    new Date().getTime() / 1000 + weatherData?.timezone
  )

  let sunriseTime: String = unixToTime(
    weatherData?.sys.sunrise + weatherData?.timezone
  )
  let sunsetTime: String = unixToTime(
    weatherData?.sys.sunset + weatherData?.timezone
  )

  return (
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
            <Typography variant="body2">{sunriseTime}</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography
              variant="body2"
              fontWeight={'bold'}
              color={'text.secondary'}
            >
              Sunset:
            </Typography>
            <Typography variant="body2">{sunsetTime}</Typography>
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
  )
}

export default CurrentWeatherInfo
