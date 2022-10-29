import React from 'react'
import {
  Stack,
  Avatar,
  Typography,
  TextField,
  Button,
  Chip,
} from '@mui/material'

export default function ProfileHeader() {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="space-between"
      sx={{ borderBottom: '1px solid black', paddingBottom: 2 }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar
          alt="фото пользователя"
          src="img"
          sx={{ width: 70, height: 70, mr: 2 }}
        />
        <Typography variant="h6">Имя Фамилия</Typography>
        <Chip label="ученик" />
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField size="small" variant="outlined" label="id курса" />
        <Button variant="contained">Записаться</Button>
      </Stack>
    </Stack>
  )
}
