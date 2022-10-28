import React from 'react'
import {
  AppBar,
  Typography,
  ButtonGroup,
  Button,
  ButtonProps,
  Toolbar,
  Box,
} from '@mui/material'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const StyledLink = styled(Link)(() => ({
  color: 'unset',
  textDecoration: 'unset',
  borderRadius: 0,
}))

const HeaderButton = styled(Button)<ButtonProps>(() => ({
  color: '#fff',
  borderColor: '#fff',

  '&:hover': {
    borderColor: '#b0bec5',
    color: '#b0bec5',
  },
}))

export default function Header() {
  return (
    <AppBar
      sx={{
        maxWidth: 1200,
      }}
      position="static"
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <StyledLink to="/">
          <Typography>LOGO</Typography>
        </StyledLink>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <StyledLink to="login">
            <HeaderButton variant="outlined">Войти</HeaderButton>
          </StyledLink>
          <StyledLink to="register">
            <HeaderButton variant="outlined">Регистрация</HeaderButton>
          </StyledLink>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
