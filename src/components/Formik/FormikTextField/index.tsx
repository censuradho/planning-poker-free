import { ComponentProps, memo } from 'react'
import { useField, ErrorMessage } from 'formik'

import { TextField } from '@/src/components';

import * as Styles from '../styles'
import { Flex } from '@/src/styles';

type RootTextFieldProps = ComponentProps<typeof TextField>

interface FormikTextFieldProps extends RootTextFieldProps {
  name: string
}

function BaseFormikTextField (props: FormikTextFieldProps) {
  const [field, meta, helpers] = useField(props);

  return (
    <Flex flexDirection="column" gap="xs" fullWidth="true">
      <TextField {...field} {...props} />
      <ErrorMessage name={props.name}>
        {msg => <Styles.Error>{msg}</Styles.Error>}
      </ErrorMessage>
    </Flex>
  )
}

export const FormikTextField = memo(BaseFormikTextField)