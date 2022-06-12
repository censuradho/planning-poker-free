export interface PlayerSchema {
  name: string;
  id: string;
  vote: string;
  room_id: string;
  isAdm?: boolean;
  isSpectator?: boolean
}

export type Players = Record<string, PlayerSchema>

export type CreatePlayer = Pick<PlayerSchema, 
  'name' 
  | 'room_id'
  | 'isAdm'
>

export type UpdatePlayer = Partial<Omit<PlayerSchema,
  'id'
  | 'room_id'
>>

export interface RoomSchema {
  id: string;
  players?: Players;
  isPlaying?: boolean;
  isReveal?: boolean;
  name?: string;
}

export type CreateRoom = Pick<RoomSchema, 
  'name'
>

export type UpdateRoom = Partial<Omit<RoomSchema, 'id'>>

export interface StorageRoom {
  room_id: string;
  player_id: string;
}