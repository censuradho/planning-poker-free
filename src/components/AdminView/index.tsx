import { useBoardContext } from '@/src/providers'
import { memo, ReactNode } from 'react'


interface AdminViewProps {
  children: ReactNode,
  isAdmin?: boolean
}

function BaseAdminView ({ children }: AdminViewProps) {
	const context = useBoardContext()

	if (!context?.participant?.isAdmin) return null
  
	return (
		<>{children}</>
	)
}

export const AdminView = memo(BaseAdminView)