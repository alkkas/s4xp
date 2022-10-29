import React from 'react'
import { Stack, Typography, Button, Box } from '@mui/material'
import theme from 'components/theme'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ButtonWhite from 'components/ButtonWhite'
import { Link } from 'react-router-dom'

export default function Course() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        background: theme.palette.secondary.light,
        color: theme.palette.common.white,
        padding: 2,
        borderRadius: 2,
        m: '10px 0',
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Название курса
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
      <Link to="courses/123/tests">
        <ButtonWhite variant="outlined">Изменить</ButtonWhite>
      </Link>
    </Stack>
  )
}
