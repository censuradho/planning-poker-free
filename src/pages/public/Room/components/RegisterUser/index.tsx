import { memo, useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { useParams } from 'react-router-dom'

import { Modal, Button } from '@/src/components'

import { FormikTextField } from '@/src/components'

import * as Styles from './styles'
import { useBoardContext, useRoom } from '@/src/providers'
import { joinRoom } from '@/src/services/socket/gameboard'
import { createPlayer } from '@/src/services/firebase'
import { useBooleanToggle } from '@/src/hooks'

interface Payload {
	username: string;
}

function BaseRegisterUser () {
	const [isLoading, toggleIsLoading] = useBooleanToggle(false)

	const context = useRoom()

	const params = useParams<{ id: string }>()

	const [isOpen, setIsOpen] = useState(false)

	const initialValues: Payload = {
		username: ''
	}

	useEffect(() => {
		if (context?.storageRoom) return setIsOpen(false)

		setIsOpen(true)
	}, [context?.storageRoom])

	const handleSubmit = async (payload: Payload) => {
		try {
			toggleIsLoading()
			if (!params?.id) return

			const player = await createPlayer({
				name: payload.username,
				room_id: params?.id
			})
	
			context?.setStorageRoom({
				player_id: player.id,
				room_id: params?.id
			})
		} finally {
			toggleIsLoading()
		}
	}

	return (
		<Modal open={isOpen}>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form>
					<Styles.Container>
						<FormikTextField name="username" placeholder="Your display name" />
						<Button 
							isLoading={isLoading} 
							type="submit" 
							fullWidth
						>Continue to game</Button>
					</Styles.Container>
				</Form>
			</Formik>
		</Modal>
	)
}

export const RegisterUser = memo(BaseRegisterUser)