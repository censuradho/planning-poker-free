import { useBooleanToggle } from '@/src/hooks'
import { Flex } from '@/src/styles'
import { ComponentProps, forwardRef, memo, useImperativeHandle, useState } from 'react'
import { Icon } from '../..'


import * as Styles from './styles'

type RootCheckboxProps = Pick<ComponentProps<typeof Styles.Checkbox>, 'id'>

interface CheckboxProps extends RootCheckboxProps {
  label?: string;
  defaultChecked?: boolean;
  onChange?: (state: boolean) => void;
}

interface Ref {
  checked?: boolean,
}

const BaseCheckbox = forwardRef<Ref, CheckboxProps>(({ label, onChange, ...props}, ref) => {
	const [checked, toggleChecked] = useBooleanToggle(props?.defaultChecked || false)

	useImperativeHandle(ref, () => ({ checked }))

	const handleChange = () => {
		toggleChecked()
		onChange?.(!checked)
	}

	return (
		<Flex gap="sm" alignItems="center">
			<Styles.Checkbox checked={checked} onCheckedChange={handleChange} {...props}>
				<Styles.Indicator />
				{checked && <Icon name="done" />}
			</Styles.Checkbox>
			{label && <Styles.Label htmlFor={props?.id}>{label}</Styles.Label>}
		</Flex>  
	)
})

export const Checkbox = memo(BaseCheckbox)