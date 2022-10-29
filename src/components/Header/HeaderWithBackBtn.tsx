import React from 'react'
import { Stack, IconButton, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { useNavigate } from 'react-router-dom'

export default function HeaderWithBackBtn({ title }: { title: string }) {
  const navigate = useNavigate()
  return (
    <Stack direction="row" sx={{ p: 1, mt: 2 }} spacing={2} alignItems="center">
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4">{title}</Typography>
    </Stack>
  )
}
