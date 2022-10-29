import { Avatar, Box, Chip, Typography, TextField, Button } from '@mui/material'
import { Stack } from '@mui/system'
import Test from '../Test'
import React from 'react'
import ProfileHeader from '../ProfileHeader'

export default function StudentProfile() {
  return (
    <Box sx={{ mt: 3, mb: 2 }}>
      <ProfileHeader />
      <Box>
        <Typography variant="h5" sx={{ mt: 3 }}>
          Тесты:
        </Typography>
        <Box>
          <Test />
          <Test />
          <Test />
        </Box>
      </Box>
    </Box>
  )
}
