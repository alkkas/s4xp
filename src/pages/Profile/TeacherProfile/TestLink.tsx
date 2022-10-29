import { Button, Stack, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import theme from 'components/theme'
import React from 'react'
import ButtonWhite from 'components/ButtonWhite'
import { Link } from 'react-router-dom'

export default function TeacherTestLink() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: 2,
        borderRadius: 2,
        m: '10px 0',
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Название теста
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>10.05.22</p>
          <CalendarMonthIcon sx={{ ml: 1 }} />
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Link to="123/statistics">
          <ButtonWhite variant="outlined">Статистика</ButtonWhite>
        </Link>
        <Link to="123/edit">
          <ButtonWhite variant="outlined">Изменить</ButtonWhite>
        </Link>
        <Link to="123/preview">
          <ButtonWhite variant="outlined">Превью</ButtonWhite>
        </Link>
      </Stack>
    </Stack>
  )
}
