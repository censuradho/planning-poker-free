import { memo } from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { Button } from '@/src/components'

import * as Styles from './styles'
import { Flex } from '@/src/styles';

interface DialogProps {
  title?: string;
  description: string;
  cancelLabel?: string,
  confirmLabel?: string
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose?: () => void;
  open?: boolean
}

function BaseDialog ({ 
    title, 
    description, 
    onCancel, 
    onConfirm,
    onClose,
    open,
    confirmLabel,
    cancelLabel
}: DialogProps) {

  const handleConfirm = () => {
    onConfirm?.()
  }

  return (
    <Styles.Root open={open}>
      <Styles.Portal>
        <Styles.Overlay/>
        <Styles.Content>
          <Flex flexDirection="column" gap="lg">
            <Flex gap="xs" flexDirection="column">
              <Styles.Title>{title}</Styles.Title>
              <Styles.Description>{description}</Styles.Description>
            </Flex>
            <Flex gap="md" justifyContent="flex-end">
              {onCancel && <Button onClick={onCancel} variant="base">{cancelLabel || 'Cancel'} </Button>}
              <Button onClick={handleConfirm}>{confirmLabel || 'Confirm'}</Button>
            </Flex>
          </Flex>
        </Styles.Content>

      </Styles.Portal>
    </Styles.Root>
  )
}

export const Dialog = memo(BaseDialog)