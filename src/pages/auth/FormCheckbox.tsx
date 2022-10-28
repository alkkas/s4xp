import { useField } from 'formik'
import { FieldAttributes } from 'formik'
import { FormControlLabel, Radio } from '@mui/material'

const MyCheckbox = (props: FieldAttributes<any>) => {
  const { children, ...rest } = props
  const [field, meta] = useField({ ...props, type: 'radio' })

  return (
    <>
      <FormControlLabel control={<Radio />} {...field} {...rest} />
    </>
  )
}
export default MyCheckbox
