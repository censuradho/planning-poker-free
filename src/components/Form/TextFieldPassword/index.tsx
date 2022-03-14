import { ComponentProps, forwardRef, memo } from 'react'

import { TextField } from '@/src/components'
import { useBooleanToggle } from '@/src/hooks'


type RootInputProps = Omit<ComponentProps<typeof TextField>, 'leftIcon' | 'rightIcon'>


type TextFieldPasswordProps = RootInputProps

const BaseTextFieldPassword = forwardRef<HTMLInputElement, TextFieldPasswordProps>((props, ref) => {
	const [isPasswordType, toggleIsPasswordType] = useBooleanToggle(true)
  
	return (
		<TextField
			type={isPasswordType ? 'password' : 'text'}
			leftIcon="key" 
			rightIcon={isPasswordType ? 'eye' : 'eyeClosed'}
			rightIconOnClick={toggleIsPasswordType} 
			{...props} 
		/>
	)
})

export const TextFieldPassword = memo(BaseTextFieldPassword)