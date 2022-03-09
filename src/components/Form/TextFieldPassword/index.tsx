import { ComponentProps, forwardRef, InputHTMLAttributes, memo, useState } from "react";

import { Icon, TextField } from '@/src/components'
import { icons } from '@/src/components/icons/icons'
import useBooleanToggle from "@/src/hooks/useBooleanToggle";


type RootInputProps = Omit<ComponentProps<typeof TextField>, 'leftIcon' | 'rightIcon'>


interface TextFieldPasswordProps extends RootInputProps {}

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