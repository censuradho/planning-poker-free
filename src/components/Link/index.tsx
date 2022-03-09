import { memo, ReactNode } from 'react'
import { LinkProps as LinkPropsNative } from 'react-router-dom'
import type * as Stitches from '@stitches/react';

import * as Styles from './styles'

interface LinkProps extends Omit<LinkPropsNative, 'color'> {
  children: ReactNode;
  color?: Stitches.VariantProps<typeof Styles.Anchor>['color']
}

function BaseLink ({ children, ...props }: LinkProps) {
  return (
    <Styles.Anchor {...props}>{children}</Styles.Anchor>
  )
}

export const Link = memo(BaseLink)