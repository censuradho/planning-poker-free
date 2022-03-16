import socketIoClient from 'socket.io-client'
 
export default socketIoClient('http://localhost:3333' as string, {
	autoConnect: false 
})

