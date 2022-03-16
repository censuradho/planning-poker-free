interface Room {
  id: string
  room: string
  created_at: string
}

export interface Participant {
  id: string;
  username: string;
  vote: string;
  room_id: string;
  created_at: Date;
}

export interface CreateRoom {
  room_name: string;
  username: string
}

export interface JoinRoom {
  room_id: string;
  username: string
}

export interface JoinRoomResponse {
  _room: Room
  _participant: Participant
}