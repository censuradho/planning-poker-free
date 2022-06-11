import { forwardRef, InputHTMLAttributes, memo } from 'react'

import { Icon  } from '@/src/components'
import { icons } from '@/src/components/icons/icons'

import * as Styles from './styles'
import { Flex } from '@/src/components'

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>, 
  'value' 
  | 'name' 
  | 'onChange' 
  | 'id' 
  | 'placeholder' 
  | 'type' 
  | 'onBlur' 
  | 'onFocus'
  | 'autoComplete'
  | 'autoCapitalize'
>

type IconName = keyof typeof icons

interface TextFieldProps extends RootInputProps {
  leftIcon?: IconName;
  rightIcon?: IconName;
  leftIconOnClick?: () => void;
  rightIconOnClick?: () => void;
	label?: string;
}

const BaseTextField = forwardRef<HTMLInputElement, TextFieldProps>(({ 
	leftIcon , 
	rightIcon, 
	leftIconOnClick, 
	label,
	rightIconOnClick, 
	...props}
, ref) => {

	return (
		<Styles.Container>
			{leftIcon && (
				<Styles.LeftIcon onClick={leftIconOnClick} type="button" css={{ cursor: leftIconOnClick ? 'pointer' : 'auto' }}>
					<Icon name={leftIcon} color="text" size={20} />
				</Styles.LeftIcon>
			)}
			<Flex flexDirection="column" gap={1} fullWidth>
				{label && <Styles.Label>{label}</Styles.Label>}
				<Styles.Input 
					{...props}
					ref={ref} 
					aria-label={props?.placeholder} 
					withIcon={!!leftIcon || !!rightIcon} 
				/>
			</Flex>
			{rightIcon && (
				<Styles.RightIcon onClick={rightIconOnClick} type="button" css={{ cursor: rightIconOnClick ? 'pointer' : 'auto' }}>
					<Icon name={rightIcon} color="text" size={20} />
				</Styles.RightIcon>
			)}
		</Styles.Container>
	)
})

export const TextField = memo(BaseTextField)