import {
  Typography,
  Button,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/system'
import BoxCenter from 'components/BoxCenter/BoxCenter'
import { Formik, Form, FormikProps } from 'formik'
import FormField from 'components/FormField'
import RegSchema from './RegisterSchema'
import React from 'react'
import theme from 'components/theme'
import RouterLink from 'components/RouterLink'
import MyCheckbox from '../FormCheckbox'

export interface RegisterTypes {
  type: 'teacher' | 'student'
  name: string
  surname: string
  email: string
  password: string
}
const RegInitialValues: RegisterTypes = {
  type: 'student',
  name: '',
  surname: '',
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
          Зарегистрируйтесь
        </Typography>
        <Formik
          initialValues={RegInitialValues}
          validationSchema={RegSchema}
          onSubmit={(values) => console.log('redux dispatch', values)}
        >
          {({ values, setFieldValue }: FormikProps<RegisterTypes>) => (
            <Form>
              <Box
                sx={{
                  display: 'grid',
                  alignItems: 'center',
                  justifyItems: 'center',
                  gap: 2,
                }}
              >
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="type"
                    name="type"
                    value={values.type}
                    onChange={(event) => {
                      setFieldValue('type', event.currentTarget.value)
                    }}
                  >
                    <FormControlLabel
                      control={<Radio />}
                      value="student"
                      label="ученик"
                    />
                    <FormControlLabel
                      control={<Radio />}
                      value="teacher"
                      label="учитель"
                    />
                  </RadioGroup>
                </FormControl>

                <FormField label="Имя" name="name" type="text" />
                <FormField label="Фамилия" name="surname" type="text" />
                <FormField label="Email" name="email" type="email" />
                <FormField label="Пароль" name="password" type="password" />
                <Typography align="center" variant="body2">
                  Уже есть аккаунт? <RouterLink to="/login">Войдите</RouterLink>
                </Typography>
                <Button variant="outlined" size="large" type="submit">
                  Зарегистрироваться
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </BoxCenter>
  )
}
