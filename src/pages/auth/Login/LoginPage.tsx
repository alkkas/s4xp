import { Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'
import BoxCenter from 'components/BoxCenter/BoxCenter'
import { Formik, Form } from 'formik'
import FormField from 'components/FormField'
import loginSchema from './loginSchema'
import React from 'react'
import theme from 'components/theme'
import RouterLink from 'components/RouterLink'

export interface loginTypes {
  email: string
  password: string
}
const loginInitialValues: loginTypes = {
  email: '',
  password: '',
}

export default function LoginPage() {
  return (
    <BoxCenter>
      <Box
        sx={{
          maxWidth: 550,
          padding: 3,
          borderRadius: 2,
          border: `1px solid ${theme.palette.primary.light}`,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }} align="center">
          Войдите в аккаунт
        </Typography>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginSchema}
          onSubmit={(values) => console.log('redux dispatch', values)}
        >
          <Form>
            <Box
              sx={{
                display: 'grid',
                alignItems: 'center',
                justifyItems: 'center',
                gap: 2,
              }}
            >
              <FormField label="email" name="email" type="email" />
              <FormField label="пароль" name="password" type="password" />
              <Typography align="center" variant="body2">
                Нет аккаунта?{' '}
                <RouterLink to="/register">Зарегистрируйтесь</RouterLink>
              </Typography>
              <Button variant="outlined" size="large" type="submit">
                Войти
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </BoxCenter>
  )
}
