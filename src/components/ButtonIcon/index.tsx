import { ButtonHTMLAttributes, ComponentProps, memo } from 'react'

import { Icon } from '@/src/components'

import * as Styles from './styles'

type IconProps = ComponentProps<typeof Icon>
type RootButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onFocus' | 'id' | 'type'>

interface ButtonIconProps extends RootButtonProps {
  icon: IconProps;
  label: string
}

function BaseButtonIcon ({ icon, label, ...props}: ButtonIconProps) {
  return (
    <Styles.Button {...props} aria-label={label}>
      <Icon {...icon} />
    </Styles.Button>
  )
}

export const ButtonIcon = memo(BaseButtonIcon)