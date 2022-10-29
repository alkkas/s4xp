import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import ProfileHeader from '../ProfileHeader'
import Course from './Course'
import { Link } from 'react-router-dom'

export default function TeacherProfile() {
  return (
    <Box sx={{ mt: 3, mb: 2 }}>
      <ProfileHeader />
      <Box>
        <Typography variant="h5" sx={{ mt: 3 }}>
          Курсы:
        </Typography>
        <Box>
          <Course />
          <Course />
          <Course />
        </Box>
      </Box>
      <Link to="courses/createCourse">
        <Button color="secondary" variant="contained" size="large">
          Создать новый курс
        </Button>
      </Link>
    </Box>
  )
}
