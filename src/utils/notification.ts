import { theme } from '@/stitches.config';
import { ReactNode } from 'react';
import { ToastOptions, Bounce, toast, Slide,  } from 'react-toastify';

type TNotificationVariants = 'info' | 'success' | 'warn' | 'error';

interface IOpenNotification {
  (
    message: string | ReactNode,
    variant?: TNotificationVariants,
    duration?: number,
    toastConfig?: ToastOptions,
  ): void;
}

export const openNotification: IOpenNotification = (
  message,
  variant = 'success',
  duration = 5000,
  toastConfig = {},
) =>
  toast[variant](message, {
    autoClose: duration,
    theme: 'light',
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    closeButton: true,
    transition: Slide,
    style: {
      color: '#fff !important'
    },
    ...toastConfig,
  });
