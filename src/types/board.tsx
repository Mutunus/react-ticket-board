import { ITicket } from "./ticket";

export interface IBoard {
    id: string
    name: string
    tickets: ITicket[]
}