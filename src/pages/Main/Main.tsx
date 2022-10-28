import { Box, Button, Typography } from '@mui/material'
import BoxCenter from 'components/BoxCenter/BoxCenter'
import Header from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'это обязательное поле',
  },
})

export default function Main() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
