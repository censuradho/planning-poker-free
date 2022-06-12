import { CSSProperties, memo, ReactNode } from 'react'

type ViewStyle =  Pick<CSSProperties, 
  'alignItems' 
  | 'alignSelf'
  | 'alignContent'
  | 'justifyContent'
  | 'flex'
  | 'marginBottom'
  | 'marginRight'
  | 'marginLeft'
  | 'marginTop'
  | 'flexDirection'
  | 'backgroundColor'
> & { gap?: number }


interface FlexProps extends ViewStyle {
  children: ReactNode;
  fullWidth?: boolean
}


function BaseFlex ({ children, fullWidth, gap, ...props}: FlexProps) {
	return (
		<div style={{
			...props,
			display: 'flex',
			width: fullWidth ? '100%' : 'auto',
			gap: gap && `${gap}rem`
		}}>
			{children}
		</div>
	)
}

export const Flex = memo(BaseFlex)