import React from 'react'
import { Container, CssBaseline } from '@mui/material'
import Header from 'components/Header/Header'
import { RouterProvider } from 'react-router-dom'
import router from 'routes'

function App() {
  return (
    <Container>
      <CssBaseline />
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
