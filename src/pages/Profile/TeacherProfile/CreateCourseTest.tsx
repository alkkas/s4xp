import HeaderWithBackBtn from 'components/Header/HeaderWithBackBtn'
import React, { useState } from 'react'
import { Box, TextField, Typography, Stack, Button } from '@mui/material'
import TeacherTestLink from './TestLink'
import DownloadIcon from '@mui/icons-material/Download'
import EditIcon from '@mui/icons-material/Edit'
type createType = { type: 'test' | 'course' }

export default function CreateCourseTest({ type }: createType) {
  const [value, setValue] = useState<string>('')
  const name = type === 'test' ? 'тест' : 'курс'
  return (
    <Box sx={{ mt: 3, mb: 2 }}>
      <HeaderWithBackBtn title={`Создать ${name}`} />

      <Stack
        sx={{ m: '15px 0' }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={3}
      >
        <TextField
          label="название"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          sx={{ flexGrow: 1 }}
        />
        {/* TODO:  after creation redirect to new page */}
        <Button color="success" variant="outlined" size="large">
          Создать {name}
        </Button>
      </Stack>
    </Box>
  )
}
