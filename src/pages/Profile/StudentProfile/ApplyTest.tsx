import { Box, Typography, Stack, IconButton, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Formik, Form } from 'formik'
import Question from '../Question'
import { useState } from 'react'
import HeaderWithBackBtn from 'components/Header/HeaderWithBackBtn'

export default function TestFeilds() {
  const navigate = useNavigate()
  const [isStarted, setStart] = useState(false)
  return (
    <Box>
      <HeaderWithBackBtn title="Название Теста" />
      {isStarted ? (
        <Formik
          initialValues={{ q1: '', q2: '', q3: '' }}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <Question name="q1" title="asdfasdf" />
            <Question name="q2" title="asdfasdf" />
            <Question name="q3" title="asdfasdf" />

            <Button
              variant="contained"
              type="submit"
              onClick={() => navigate('/user')}
            >
              Отправить
            </Button>
          </Form>
        </Formik>
      ) : (
        <Box textAlign="center" sx={{ mt: 3 }}>
          <Button
            variant="contained"
            onClick={() => setStart(true)}
            size="large"
          >
            Начать
          </Button>
        </Box>
      )}
    </Box>
  )
}
