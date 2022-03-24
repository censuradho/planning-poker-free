import socketIoClient from 'socket.io-client'
 
export default socketIoClient(import.meta.env.VITE_APP_SOCKET_URL as string)

