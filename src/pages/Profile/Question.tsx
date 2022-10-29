import React from 'react'
import { Typography } from '@mui/material'
import FormField from 'components/FormField'
import { Box } from '@mui/system'

type QuestionProps = { name: string; title: string }
export default function Question({ name, title }: QuestionProps) {
  return (
    <Box sx={{ m: '15px 0' }}>
      <Typography variant="h5" gutterBottom>
        1. {title}
      </Typography>
      <FormField label="ваш ответ" name={name} type="text" />
    </Box>
  )
}
