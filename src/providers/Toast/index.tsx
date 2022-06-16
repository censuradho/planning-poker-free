import { ButtonIcon, Toast } from '@/src/components'
import { Provider, Viewport } from '@/src/components/Toast/styles'
import { ComponentProps } from '@stitches/react'
import { createContext, ReactNode, useContext, useState } from 'react'

interface ToastProps {
  children: ReactNode
}

interface Notification {
	title?: string;
	description?: string;
	icon?: ComponentProps<typeof ButtonIcon>['icon']
}

interface Toast {
  isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	openNotification: (options: Notification) => void;
	context: Notification;
}

const ToastContext = createContext({} as Toast)

export function ToastProvider ({ children }: ToastProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [context, setContent] = useState<Notification>({})

	const openNotification = (options: Notification) => {
		setContent(options)
		setIsOpen(true)
	}

	return (
		<ToastContext.Provider
			value={{
				isOpen,
				setIsOpen,
				context,
				openNotification
			}}
		>
			<Provider>
				{children}
				<Toast />
				<Viewport />
			</Provider>
		</ToastContext.Provider>
	)
}

export const useToast = () => useContext(ToastContext)