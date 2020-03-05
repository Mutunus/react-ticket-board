export interface ITicket {
    id: string
    name: string
    description: string
    status: TicketStatus
    visible: boolean
}

export enum TicketStatus {
    DONE = 'DONE',
    TODO = 'TODO',
    INPROGRESS = 'INPROGRESS'
}