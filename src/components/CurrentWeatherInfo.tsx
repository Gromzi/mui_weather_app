import { Box, Icon, Typography } from '@mui/material'

const CurrentWeatherInfo = ({
  weatherData,
  weatherError,
  unixToTime,
  unixToDate,
}: any) => {
  let datetime: String = unixToDate(
    new Date().getTime() / 1000 + weatherData?.timezone
  )

  let sunriseTime: String = unixToTime(
    weatherData?.sys.sunrise + weatherData?.timezone
  )
  let sunsetTime: String = unixToTime(
    weatherData?.sys.sunset + weatherData?.timezone
  )

  let iconPath: string = `./icons/${weatherData?.weather[0].icon}.svg`

  return (
    <Box className="weatherInfoContainer">
      {weatherError ? (
        <Typography variant="body1" color="text.secondary">
          Make sure you typed the city name correctly
        </Typography>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
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

          <Icon sx={{ width: '100%', height: '100%' }}>
            <img src={iconPath} />
          </Icon>

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
