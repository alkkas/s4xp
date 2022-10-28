import React from 'react'
import { AppBar, Typography, ButtonGroup, Button, Toolbar } from '@mui/material'

export default function Header() {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography>LOGO</Typography>
        <ButtonGroup>
          <Button color="secondary">Войти</Button>
          <Button color="secondary">Регистрация</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}
