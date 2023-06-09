import { Box, IconButton } from '@mui/material'
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward'
import '../styles/_upperNavBar.scss'
import { accViewSetterFunctionType } from '../types/types'

type PropTypes = {
  accViewSetter: accViewSetterFunctionType
  accView: boolean
}

const UpperNavBar = ({ accViewSetter, accView }: PropTypes) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        height: '40px',
        top: 0,
        backgroundColor: 'secondary.main',
      }}
    >
      <IconButton
        onClick={accViewSetter}
        sx={{ color: accView ? 'red' : 'primary.light' }}
      >
        <AccessibleForwardIcon
          className="acc-icon"
          fontSize="large"
        />
      </IconButton>
    </Box>
  )
}

export default UpperNavBar
