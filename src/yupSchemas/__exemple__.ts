import * as yup from 'yup'

export const validate = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
})