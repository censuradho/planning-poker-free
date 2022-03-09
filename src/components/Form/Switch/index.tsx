import { Flex } from "@/src/styles";
import { forwardRef } from "@chakra-ui/react";
import { ComponentProps } from "@stitches/react";
import { memo } from "react";

import * as Styles from './styles'

type SwitchRootProps = Pick<ComponentProps<typeof Styles.Root>, 
  'checked' 
  | 'onCheckedChange' 
  | 'disabled' 
  | 'name' 
  | 'value'
>

interface SwitchProps extends SwitchRootProps {
  label?: string;
  column?: boolean;
  id?: string;
}

const BaseSwitch = forwardRef(({ label, column, ...props }: SwitchProps, ref) => {
  return (
    <Flex flexDirection={column ? 'column' : 'row'} gap="sm" alignItems="center">
      <Styles.Root {...props} ref={ref}>
        <Styles.Thumb />
      </Styles.Root>
      {label && <Styles.Label htmlFor={props.id}>{label}</Styles.Label>}
    </Flex>
  )
})

export const Switch = memo(BaseSwitch)