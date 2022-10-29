import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/system'

const ButtonWhite = styled(Button)<ButtonProps>(() => ({
  color: '#fff',
  borderColor: '#fff',

  '&:hover': {
    borderColor: '#b0bec5',
    color: '#b0bec5',
  },
}))

export default ButtonWhite
