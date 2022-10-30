import React from 'react'
import { Typography, Button } from '@mui/material'
import BoxCenter from 'components/BoxCenter/BoxCenter'

export default function MainContent() {
  return (
    <BoxCenter>
      <Typography variant="h1" sx={{ mb: 1 }}>
        S4xp
      </Typography>
      {/* <Typography variant="subtitle1" sx={{ mb: 4 }}>
        
      </Typography> */}
      <Button variant="contained" size="large">
        Вперед
      </Button>
    </BoxCenter>
  )
}
