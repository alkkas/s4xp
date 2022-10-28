import React from 'react'
import { Typography, Button } from '@mui/material'
import BoxCenter from 'components/BoxCenter/BoxCenter'

export default function MainContent() {
  return (
    <BoxCenter>
      <Typography variant="h1" sx={{ mb: 1 }}>
        Заголовок ребята!
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Здесь надо будет потом написать что-то об проекте
      </Typography>
      <Button variant="contained" size="large">
        кнопка
      </Button>
    </BoxCenter>
  )
}
