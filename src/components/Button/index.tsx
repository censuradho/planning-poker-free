import { ButtonHTMLAttributes, ComponentProps, memo, ReactNode } from 'react'

import * as Styles from './styles'
import { CircularLoading } from '..';

import { darkTheme } from '@/src/theme'

type StylesButtonProps =  Pick<ComponentProps<typeof Styles.Button>, 'color' | 'fullWidth'>
type RootButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'id' | 'type' | 'disabled'>

interface ButtonProps extends RootButtonProps, StylesButtonProps {
  children: ReactNode,
  variant?: StylesButtonProps['color'];
  isLoading?: boolean;
}

function BaseButton ({ 
  children, 
  variant, 
  type = 'button',
  isLoading,
  disabled,
  ...props }: ButtonProps) {
  
  return (
    <Styles.Button
      className={darkTheme}
      disabled={isLoading || disabled} 
      color={variant} 
      type={type} 
      {...props}
    >{isLoading ? <CircularLoading /> : children}</Styles.Button>
  )
}

export const Button = memo(BaseButton)