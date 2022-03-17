import { memo, useState } from 'react'
import { Form, Formik } from 'formik'
import { useParams } from 'react-router-dom'

import { Modal, Button } from '@/src/components'

import { FormikTextField } from '@/src/components'

import * as Styles from './styles'

interface Payload {
	username: string;
}

function BaseRegisterUser () {
	const params = useParams<{ id: string }>()

	const [isOpen, setIsOpen] = useState(false)

	const initialValues: Payload = {
		username: ''
	}

	const handleSubmit = (payload: Payload) => {}

	return (
		<Modal open={isOpen}>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form>
					<Styles.Container>
						<FormikTextField name="username" placeholder="Your display name" />
						<Button type="submit" fullWidth>Continue to game</Button>
					</Styles.Container>
				</Form>
			</Formik>
		</Modal>
	)
}

export const RegisterUser = memo(BaseRegisterUser)