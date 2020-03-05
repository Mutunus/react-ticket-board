import { IBoard } from "./board";

export interface IOrganisation {
    id: string
    name: string
    boards: IBoard[]
}