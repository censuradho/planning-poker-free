import { useBoardContext } from '@/src/providers'
import { memo, ReactNode } from 'react'


interface AdminViewProps {
  children: ReactNode,
  isAdmin?: boolean
}

function BaseAdminView ({ children, isAdmin }: AdminViewProps) {
	if (!isAdmin) return null
  
	return (
		<>{children}</>
	)
}

export const AdminView = memo(BaseAdminView)