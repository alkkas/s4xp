import { object, string } from 'yup'
import { setLocale } from 'yup'
setLocale({
  mixed: {
    required: 'это обязательное поле',
  },
})
const loginSchema = object({
  email: string().email('введите корректный email').required(),
  password: string().min(8, 'минимум 8 символом').required(),
})
export default loginSchema
