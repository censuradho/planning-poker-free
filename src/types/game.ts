import { string } from 'yup'

export interface PlayerSchema {
  name: string;
  id: string;
  vote: string;
  room_id: string;
}

export type Players = Record<string, PlayerSchema>

export type CreatePlayer = Pick<PlayerSchema, 
  'name' | 
  'room_id'
>

export type UpdatePlayer = Partial<Pick<PlayerSchema,
  'name'
  | 'vote'
>>

export interface RoomSchema {
  id: string;
  players?: Players;
  name?: string;
}

export type CreateRoom = Pick<RoomSchema, 
  'name'
>

export type UpdateRoom = Partial<Pick<RoomSchema, 
  'name' 
  | 'players'>
>

export interface StorageRoom {
  room_id: string;
  player_id: string;
}