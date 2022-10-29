import { Box, Button, IconButton, TextField } from '@mui/material'
import HeaderWithBackBtn from 'components/Header/HeaderWithBackBtn'
import { Formik, Form, FieldArray } from 'formik'
import FormField from 'components/FormField'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
const tests = [
  { title: 'asdfasd', rightAnswer: 'asdfasdf' },
  { title: 'asdfasd', rightAnswer: 'asdfasdf' },
  { title: 'asdfasd', rightAnswer: 'asdfasdf' },
]
export default function TeacherEditTest() {
  return (
    <Box>
      <HeaderWithBackBtn title="Редактировать тест" />
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <TextField
          label="название теста"
          value="Название теста"
          size="medium"
          sx={{ flexGrow: 1, margin: '15px 0' }}
        />
        <Button variant="outlined" color="error">
          Удалить тест
        </Button>
      </Stack>

      <Formik
        initialValues={{ tests: tests }}
        onSubmit={() => console.log('redux dispatch')}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="tests"
              render={(arrayHelpers) => (
                <>
                  <Box sx={{ pl: 5 }}>
                    {values.tests.map((tests, i) => (
                      <Box sx={{ m: '45px 0', position: 'relative' }}>
                        <IconButton
                          sx={{
                            position: 'absolute',
                            top: '10px',
                            left: '-50px',
                          }}
                          onClick={() => arrayHelpers.remove(i)}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <FormField
                          label="Название вопроса"
                          name={`tests[${i}].title`}
                          type="text"
                          sx={{ mb: 1 }}
                        />
                        <Box sx={{ ml: 5 }}>
                          <FormField
                            label="Правильный ответ"
                            name={`tests[${i}].rightAnswer`}
                            type="text"
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Button
                    onClick={() =>
                      arrayHelpers.push({ title: '', rightAnswer: '' })
                    }
                    variant="contained"
                    size="large"
                  >
                    Создать новый вопрос
                  </Button>
                </>
              )}
            />
            <Stack sx={{ m: '30px 0' }} direction="row" spacing={2}>
              <Link to="/user/course/123/tests/123/preview">
                <Button variant="outlined">Превью</Button>
              </Link>
              <Button color="success" variant="outlined">
                Сохранить
              </Button>
              <Button color="error" variant="outlined">
                Отменить
              </Button>
            </Stack>
          </Form>
        )}
      />
    </Box>
  )
}
