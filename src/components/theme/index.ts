import { createTheme, responsiveFontSizes } from '@mui/material'
import MuiContainer from './components/Container'
import typography from './components/typography'

const theme = createTheme({
  components: {
    MuiContainer,
  },
  typography,
})
export default responsiveFontSizes(theme)
