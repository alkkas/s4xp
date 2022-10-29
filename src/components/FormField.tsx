import React, { useState } from 'react'
import { useField, FieldAttributes } from 'formik'
import {
  FormHelperText,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

const FormField = (props: FieldAttributes<any>) => {
  const [field, meta] = useField(props)
  const [isVisible, setVisibility] = useState(false)
  const { label, ...rest } = props
  return (
    <>
      <FormControl variant="outlined" sx={{ width: '100%' }}>
        <InputLabel htmlFor={field.name} error={!!(meta.error && meta.touched)}>
          {label}
        </InputLabel>
        <OutlinedInput
          {...field}
          {...rest}
          variant="outlined"
          type={
            props.type === 'password'
              ? isVisible
                ? 'text'
                : 'password'
              : 'text'
          }
          id={field.name}
          label={label}
          error={!!(meta.error && meta.touched)}
          helperText={meta.error}
          endAdornment={
            props.type === 'password' && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="показать/скрыть пароль"
                  onClick={() => setVisibility((prev) => !prev)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {isVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
        <FormHelperText id={field.name} error={!!(meta.error && meta.touched)}>
          {meta.touched && meta.error}
        </FormHelperText>
      </FormControl>
    </>
  )
}
export default FormField
