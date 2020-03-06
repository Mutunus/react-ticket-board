import React from 'react';
import {Link} from "react-router-dom";
import { ITicket } from '../../types/ticket';
import { flexAlignCentre } from '../../styles/layout';
import { Button } from 'react-bootstrap';

export interface TicketItemProps {
    ticket: ITicket,
    deleteTicket: Function,
    boardId: string
}

const TicketItem = (props: TicketItemProps) => {
    const { ticket, deleteTicket, boardId } = props;
    return (
        <Link to={`/board/${boardId}/ticket/${ticket.id}`}>
            <div>
                    <div style={flexAlignCentre}>
                        <h5 style={{width: '25%'}}>{ ticket.name }</h5>
                        <p style={{width: '50%'}}>{ticket.description}</p>
                        <p style={{width: '25%'}}>{ticket.status}</p>
                    </div>
                <Button style={{marginTop: '5px'}} size="sm" onClick={onDeleteTicket(ticket.id, deleteTicket)}>Delete</Button>
            </div>
        </Link>
    )
}

const onDeleteTicket = (ticketId: string, deleteTicket: Function) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    deleteTicket(ticketId)
}

export default TicketItem;