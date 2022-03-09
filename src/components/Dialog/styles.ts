import { styled, keyframes } from '@/stitches.config'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});


export const Overlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: '$foregroundTransparent',
  position: 'fixed',
  backdropFilter: 'blur(12px)',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});


export const Content = styled(AlertDialogPrimitive.Content, {
  backgroundColor: '$background',
  borderRadius: '$sm',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});

export const Root = AlertDialogPrimitive.Root

export const Portal = AlertDialogPrimitive.Portal

export const Description = styled(AlertDialogPrimitive.Description, {
  color: '$text'
})

export const Title = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: '$title',
  fontSize: '$md',
  fontWeight: 500,
});
