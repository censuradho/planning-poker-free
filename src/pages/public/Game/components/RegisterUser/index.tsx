import { memo, useEffect, useState } from 'react'
import { Form, Formik } from 'formik'

import { Modal, Button } from '@/src/components'


import { FormikTextField } from '@/src/components'


import * as Styles from './styles'
import { useLocalStorage } from '@/src/hooks'
import { USER_REGISTER } from '@/src/constants/user'
import socket from '@/src/lib/socket'
import { LOCAL_STORAGE } from '@/src/constants/localStorage'
import { connectSocket } from '@/src/services/socket/session'

interface RegisterUserProps {}

interface Payload {
  username: string
}

function BaseRegisterUser (props: RegisterUserProps) {
	const [user, setUser] = useLocalStorage<Payload | undefined>(LOCAL_STORAGE.user, undefined)
	const [isOpen, setIsOpen] = useState(false)

	const initialValues: Payload = {
		username: ''
	}

	const handleSubmit = (payload: Payload) => {
		setUser(payload)
		setIsOpen(false)

		connectSocket(payload)
	}

	useEffect(() => {
		if (user) return

		setIsOpen(true)
	}, [isOpen, user])

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