import { memo } from 'react'

import type * as Stitches from '@stitches/react';

import { icons }  from './icons'
import { useTheme } from '@/src/providers';

import { theme as defaultTheme } from '@/stitches.config'

export type IconName = keyof typeof icons

type Colors = Pick<typeof defaultTheme, 'colors'>

interface IconProps {
  name: IconName,
  color?: keyof Colors['colors']
  customColor?: string
  size?: number
}

function BaseIcon ({ name, color = 'text', customColor, size = 24 }: IconProps) {
  const Component = icons[name]
  const { theme } = useTheme()

  return (
    <Component color={customColor || theme.colors[color].value} size={size} />
  )
}

export const Icon = memo(BaseIcon)