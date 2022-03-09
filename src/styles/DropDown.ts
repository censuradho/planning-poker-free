import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { styled, keyframes  } from '@/stitches.config'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});


export const Content = styled(DropdownMenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: '$foreground',
  borderRadius: '$sm',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const itemStyles = {
  all: 'unset',
  fontSize: '$xs',
  lineHeight: 1,
  color: '$text',
  borderRadius: '$sm',
  padding: '.4rem 1rem',
  display: 'flex',
  alignItems: 'center',
  minHeight: 25,
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',
  cursor: 'pointer',

  '&[data-disabled]': {
    color: '$foregroundTransparent',
    pointerEvents: 'none',
  },

  '&:hover': {
    backgroundColor: '$foregroundHover',
    color: '$title',
  },

  '&:focus': {
    backgroundColor: 'foregroundHover',
    color: '$title',
  },
};

export const Item = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
export const TiggreItem = styled(DropdownMenuPrimitive.DropdownMenuTriggerItem, { ...itemStyles });
export const Tigger = DropdownMenuPrimitive.Trigger

export const Label = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: '$background',
});

export const Separator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: '$text',
  margin: 5,
});

export const ItemIndicator = styled(DropdownMenuPrimitive.Arrow, {
  fill: '$foreground',
});

export const Root = DropdownMenuPrimitive.Root;
