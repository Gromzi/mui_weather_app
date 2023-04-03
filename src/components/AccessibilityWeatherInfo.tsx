import {
  Box,
  Card,
  CardContent,
  Divider,
  Icon,
  Typography,
} from '@mui/material'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import AirIcon from '@mui/icons-material/Air'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import WbTwilightIcon from '@mui/icons-material/WbTwilight'

const AccessibilityWeatherInfo = ({
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
        <Typography
          variant="body1"
          color="text.secondary"
          fontSize="larger"
        >
          Make sure you typed the city name correctly
        </Typography>
      ) : (
        <Box
          sx={{
            // display: 'flex',
            // flexDirection: 'column',
            minHeight: '250px',
            maxHeight: '310px',
            overflow: 'auto',
          }}
        >
          <Typography variant="body1" fontSize="30px">
            {datetime}
          </Typography>

          <Divider />

          <Card
            sx={{
              maxWidth: 345,
              ml: 2,
              mr: 2,
              mt: 2,
              backgroundColor: 'secondary.main',
              borderRadius: 5,
            }}
            elevation={5}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Icon
                sx={{
                  width: '100%',
                  height: '100%',
                  transform: 'scale(2)',
                }}
              >
                <img src={iconPath} />
              </Icon>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <DeviceThermostatIcon
                  sx={{
                    fontSize: '50px',
                    width: '25%',
                    color: 'red',
                  }}
                />

                <Typography variant="body1" fontSize={'35px'}>
                  {weatherData?.main.temp}°C
                </Typography>
              </Box>

              <Typography
                variant="body1"
                fontSize={'26px'}
                textAlign="center"
              >
                {weatherData?.weather[0].description}
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 345,
              ml: 2,
              mr: 2,
              mt: 2,
              backgroundColor: 'secondary.main',
              borderRadius: 5,
            }}
            elevation={5}
          >
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <AirIcon sx={{ fontSize: '50px', color: 'blue' }} />

              <Typography variant="body1" fontSize={'30px'}>
                {weatherData?.main.pressure} hPa
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 345,
              ml: 2,
              mr: 2,
              mt: 2,
              backgroundColor: 'secondary.main',
              borderRadius: 5,
            }}
            elevation={5}
          >
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <WbSunnyIcon
                  sx={{ fontSize: '60px', color: 'orange' }}
                />
                <Typography variant="body1" fontSize="24px">
                  {sunriseTime}
                </Typography>
              </Box>

              <Divider orientation="vertical" />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <WbTwilightIcon
                  sx={{ fontSize: '60px', color: 'orange' }}
                />
                <Typography variant="body1" fontSize="24px">
                  {sunsetTime}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  )
}

export default AccessibilityWeatherInfo
