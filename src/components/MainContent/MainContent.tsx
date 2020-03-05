import React from 'react';
import BoardForm from './../BoardForm/BoardForm'
import TicketList from '../TicketList/TicketList';
import BoardList from '../BoardList/BoardList';
import { ITicket } from '../../types/ticket';
import { IBoard } from '../../types/board';

export interface MainContentProps {
    boards: {
        boards: IBoard[]
        addBoard: Function 
    }
    tickets: {
        tickets: ITicket[]
        ticketDispatch: Function
    }
}

const MainContent = (props: MainContentProps) => {

    return (
        <div>
            {/* <BoardForm onSubmit={props.boards.addBoard}/>
            <TicketList tickets={props.tickets.tickets} ticketDispatch={props.tickets.ticketDispatch}/>
            <BoardList boards={props.boards.boards}/> */}
        </div>
    )

}

export default MainContent;