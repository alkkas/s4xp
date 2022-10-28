import { createTheme, responsiveFontSizes } from '@mui/material'
import MuiContainer from './components/Container'

const theme = createTheme({
  components: {
    MuiContainer,
  },
})
export default responsiveFontSizes(theme)
