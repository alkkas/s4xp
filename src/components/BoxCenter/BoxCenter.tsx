import styled from '@emotion/styled'
import { Box, BoxProps } from '@mui/system'

const BoxCenter = styled(Box)<BoxProps>(() => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
}))
export default BoxCenter
