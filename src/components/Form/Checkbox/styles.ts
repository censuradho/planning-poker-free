import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled } from '@/stitches.config'


export const Checkbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  width: 25,
  height: 25,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px $foreground`,
  background: '$foreground',
  // '&:hover': { backgroundColor: '$foreground' },
  '&:focus': { boxShadow: `0 0 0 2px black` },

  variants: {
    variant: {
      primary: {
        background: '$primary',
        '& svg': {
          fill: '#fff'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
});

export const Indicator = styled(CheckboxPrimitive.Indicator, {
});

export const Label = styled('label', {
  fontSize: '$xs',
  color: '$text'
})