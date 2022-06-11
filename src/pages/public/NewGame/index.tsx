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

import { useBooleanToggle } from '@/src/hooks'

interface CreateRoom {
	room_name: string;
	username: string
}

const baseDetails: CreateRoom = {
	room_name: 'teste',
	username: 'teste'
}

function BaseNewGame () {
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
				name: payload.username
			})

			navigate(resolvePath(routePaths.room, { id: room.id }))

		} finally {
			toggleIsLoading()
		}
	}


	useEffect(() => {
		// if (!context.status || !context.participant?.room_id) return

		// navigate(resolvePath(routePaths.game, { id: context.participant?.room_id }))

	}, [])

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

export const NewGame = memo(BaseNewGame)