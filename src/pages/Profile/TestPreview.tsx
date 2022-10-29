import { Box, TextField, Typography } from '@mui/material'
import Question from './Question'
import React from 'react'
import HeaderWithBackBtn from 'components/Header/HeaderWithBackBtn'

export default function TestPreview() {
  return (
    <Box>
      <HeaderWithBackBtn title="Превью теста" />
      <Box sx={{ pl: 4 }}>
        <Box sx={{ m: '15px 0' }}>
          <Typography variant="h5" gutterBottom>
            1. название
          </Typography>
          <TextField
            label="ваш ответ"
            type="text"
            value="aasdfa"
            sx={{ width: '100%' }}
          />
        </Box>
        <Box sx={{ m: '15px 0' }}>
          <Typography variant="h5" gutterBottom>
            1. название
          </Typography>
          <TextField
            label="ваш ответ"
            type="text"
            value="aasdfa"
            sx={{ width: '100%' }}
          />
        </Box>
        <Box sx={{ m: '15px 0' }}>
          <Typography variant="h5" gutterBottom>
            1. название
          </Typography>
          <TextField
            label="ваш ответ"
            type="text"
            value="aasdfa"
            sx={{ width: '100%' }}
          />
        </Box>
      </Box>
    </Box>
  )
}
