import { Formik } from 'formik'
import { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, FormikTextField } from '@/src/components'

import { Flex } from '@/src/styles'
import * as Styles from './styles'

import { connectSocket } from '@/src/services/socket/session'

import { resolvePath } from '@/src/utils/routes'
import { routePaths } from '@/src/constants/routes'

import { createRoom, createPlayer } from '@/src/services/firebase'

import { useBooleanToggle, useInterval, useTimeout } from '@/src/hooks'
import { useAuthContext, useRoom } from '@/src/providers'

interface CreateRoom {
	room_name: string;
	username: string
}

const baseDetails: CreateRoom = {
	room_name: 'teste',
	username: 'teste'
}

function BaseNewRoom () {
	const { user } = useAuthContext()
	const context = useRoom()

	const [isLoading, toggleIsLoading] = useBooleanToggle(false)

	const navigate = useNavigate()

	const handleSubmit = async (payload: CreateRoom) => {
		try {
			toggleIsLoading()
			const room = await createRoom({
				name: payload.room_name
			})

			await createPlayer({
				room_id: room.id,
				name: payload.username,
				isAdm: true
			}, user)

			navigate(resolvePath(routePaths.room, { id: room.id }))

		} finally {
			toggleIsLoading()
		}
	}

	return (
		<Styles.Main>
			<Formik onSubmit={handleSubmit} initialValues={baseDetails}>
				<Styles.Form>
					<Styles.Title>Choose a name for your game and username.</Styles.Title>
					<Flex flexDirection="column" gap="sm">
						<FormikTextField name="room_name" label="Game's name" />
						<FormikTextField name="username" label="Your's username" />
						<Button 
							isLoading={isLoading} 
							type="submit">Create game</Button>
					</Flex>
				</Styles.Form>
			</Formik>
		</Styles.Main>
	)
}

export const NewRoom = memo(BaseNewRoom)