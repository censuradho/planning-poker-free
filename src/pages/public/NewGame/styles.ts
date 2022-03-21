import { styled } from '@/stitches.config'
import { Form as FormikForm } from 'formik'

export const Main = styled('main', {
	width: '100%',
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})

export const Form = styled(FormikForm, {
	width: '100%',
	maxWidth: '40rem',
	display: 'flex',
	flexDirection: 'column',
	gap: '3rem'
})

export const Title = styled('span', {
	color: '$title',
	textAlign: 'center',
	fontSize: '$sm'
})