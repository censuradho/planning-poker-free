import {  useRoom } from '@/src/providers'
import { memo, ReactNode } from 'react'


interface AdminViewProps {
  children: ReactNode,
  isAdmin?: boolean
}

function BaseAdminView ({ children }: AdminViewProps) {
	const context = useRoom()

	if (!context?.player?.isAdm) return null
  
	return (
		<>{children}</>
	)
}

export const AdminView = memo(BaseAdminView)