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
import ButtonWhite from 'components/ButtonWhite'
import logo from 'assets/img/logo.png'

const StyledLink = styled(Link)(() => ({
  color: 'unset',
  textDecoration: 'unset',
  borderRadius: 0,
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
          <img src={logo} alt="логотип" width="64" />
        </StyledLink>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <StyledLink to="login">
            <ButtonWhite variant="outlined">Войти</ButtonWhite>
          </StyledLink>
          <StyledLink to="register">
            <ButtonWhite variant="outlined">Регистрация</ButtonWhite>
          </StyledLink>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
