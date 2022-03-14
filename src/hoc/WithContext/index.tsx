import { ComponentType } from 'react'

export function withContext<T = any>(Component: ComponentType<T>, Context: ComponentType<any>) {
	return (props: T) => (
		<Context>
			<Component {...props} />
		</Context>
	)
}
