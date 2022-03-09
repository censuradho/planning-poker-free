import { ComponentProps, memo } from 'react'
import { useField, ErrorMessage } from 'formik'

import { TextFieldPassword } from '@/src/components';

import * as Styles from '../styles'
import { Flex } from '@/src/styles';

type RootTextFieldProps = ComponentProps<typeof TextFieldPassword>

interface FormikTextFieldPasswordProps extends RootTextFieldProps {
  name: string;
}

function BaseFormikTextFieldPassword ({ fullWidth, ...props}: FormikTextFieldPasswordProps) {
  const [field, meta, helpers] = useField(props);

  return (
    <Flex 
      flexDirection="column" 
      gap="xs" 
      fullWidth
    >
      <TextFieldPassword {...field} {...props} />
      <ErrorMessage name={props.name}>
        {msg => <Styles.Error>{msg}</Styles.Error>}
      </ErrorMessage>
    </Flex>
  )
}

export const FormikTextFieldPassword = memo(BaseFormikTextFieldPassword)