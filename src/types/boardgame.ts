
export interface Participant {
  id: string;
  socket_id: string;
  isAdmin: boolean;
  username: string;
  vote: string;
  room_id: string;
  created_at: Date;
}

export interface Room {
  id: string
  name: string
  created_at: string
  participants: Participant[]
}


export interface CreateRoom {
  room_name: string;
  username: string
}

export interface ParticipantRoom {
  participant: Participant;
  room: Room
}

