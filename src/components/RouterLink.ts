import { Link } from 'react-router-dom'
import { styled } from '@mui/system'
import theme from './theme'

const RouterLink = styled(Link)(() => ({
  color: theme.palette.primary.light,
  '&:visited': {
    color: theme.palette.primary.light,
  },
}))

export default RouterLink
