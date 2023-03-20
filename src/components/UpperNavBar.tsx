import { Box } from '@mui/material'
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward'

const UpperNavBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        height: '10%',
        top: 0,
        backgroundColor: 'secondary.main',
      }}
    >
      <AccessibleForwardIcon
        fontSize="large"
        sx={{ color: 'primary.light' }}
        onClick={() => {
          console.log('Accesibility mode')
        }}
      />
    </Box>
  )
}

export default UpperNavBar