import { Formik } from 'formik'
import { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, FormikTextField } from '@/src/components'

import { Flex } from '@/src/styles'
import * as Styles from './styles'

import { CreateRoom, JoinRoomResponse } from '@/src/types/boardgame'

import { createRoom } from '@/src/services/socket/gameboard'
import { connectSocket } from '@/src/services/socket/session'
import { useSocket } from '@/src/hooks/useSocket'
import { resolvePath } from '@/src/utils/routes'
import { routePaths } from '@/src/constants/routes'
import { useBoardContext } from '@/src/providers'


const baseDetails: CreateRoom = {
	room_name: 'teste',
	username: 'teste'
}

function BaseNewGame () {
	const navigate = useNavigate()
	const context = useBoardContext()

	const { data } = useSocket<JoinRoomResponse>('room:join')

	const handleSubmit = (payload: CreateRoom) => {
		connectSocket({ username: payload.username })
		createRoom(payload)
	}

	useEffect(() => {
		if (!data) return

		navigate(resolvePath(routePaths.game, { id: data._room.id }))
		context.setParticipant(data?._participant)

	}, [data])

	return (
		<Styles.Main>
			<Formik onSubmit={handleSubmit} initialValues={baseDetails}>
				<Styles.Form>
					<Styles.Title>Choose a name for your game and username.</Styles.Title>
					<Flex flexDirection="column" gap="sm">
						<FormikTextField name="room_name" placeholder="Game's name" />
						<FormikTextField name="username" placeholder="Your's username" />
						<Button type="submit">Create game</Button>
					</Flex>
				</Styles.Form>
			</Formik>
		</Styles.Main>
	)
}

export const NewGame = memo(BaseNewGame)