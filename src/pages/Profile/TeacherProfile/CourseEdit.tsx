import HeaderWithBackBtn from 'components/Header/HeaderWithBackBtn'
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, TextField, Typography, Stack, Button } from '@mui/material'
import TeacherTestLink from './TestLink'
import DownloadIcon from '@mui/icons-material/Download'
import EditIcon from '@mui/icons-material/Edit'
export default function CourseEdit() {
  return (
    <Box sx={{ mt: 3, mb: 2 }}>
      <HeaderWithBackBtn title="Редактировать Курс" />
      <Stack
        sx={{ m: '15px 0' }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={3}
      >
        <TextField
          label="название"
          value="Название курса"
          sx={{ flexGrow: 1 }}
        />
        <Button color="error" variant="outlined" size="large">
          Удалить курс
        </Button>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h5">
          Методичка: <strong>document.txt</strong>
        </Typography>
        <Button variant="contained">
          Скачать <DownloadIcon sx={{ ml: 1 }} />
        </Button>
        <Button variant="contained">
          Изменить <EditIcon sx={{ ml: 1 }} />
        </Button>
      </Stack>
      <Box>
        <Typography variant="h5" sx={{ mt: 3 }}>
          Тесты:
        </Typography>
        <Box>
          <TeacherTestLink />
          <TeacherTestLink />
          <TeacherTestLink />
        </Box>
        <Link to="createTest">
          <Button variant="contained">Создать тест</Button>
        </Link>
      </Box>
    </Box>
  )
}
