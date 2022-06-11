import { memo, useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { useParams } from 'react-router-dom'

import { Modal, Button } from '@/src/components'

import { FormikTextField } from '@/src/components'

import * as Styles from './styles'
import { useBoardContext } from '@/src/providers'
import { joinRoom } from '@/src/services/socket/gameboard'

interface Payload {
	username: string;
}

function BaseRegisterUser () {
	const context = useBoardContext()

	const params = useParams<{ id: string }>()

	const [isOpen, setIsOpen] = useState(false)

	const initialValues: Payload = {
		username: ''
	}

	useEffect(() => {
		if (context.status) return setIsOpen(false)
		
		
		if (context.participant) {
			setIsOpen(false)
			joinRoom(context.participant)
			return 
		}

		setIsOpen(true)
	}, [context.status, context.participant])

	const handleSubmit = (payload: Payload) => {
		if (!params?.id) return

		joinRoom({
			room_id: params?.id,
			username: payload.username
		})
	}

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