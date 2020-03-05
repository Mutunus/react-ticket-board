import React, {useState} from 'react';
import { titleContainer } from '../../styles/layout';
import { Button, ListGroup, Modal } from 'react-bootstrap';
import { ITicket } from '../../types/ticket';
import TicketItem from '../TicketItem/TicketItem'
import TicketForm from '../TicketForm/TicketForm';
import { putTicket } from '../../graph-ql/ticket/ticket';

export interface TicketListProps {
    tickets: ITicket[],
    organisationId: string,
    boardId: string
}

const TicketList = (props: TicketListProps) => {
    const [show, setShow] = useState(false);
    const { tickets, organisationId, boardId } = props;
    const ticketComps = tickets.map(ticket => <ListGroup.Item key={ticket.id}><TicketItem ticket={ticket}/></ListGroup.Item>)
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    return (
        <div style={{margin: '15px'}}>
            <div style={titleContainer}>
                <h2>Tickets</h2>
                <Button onClick={showModal}>Create Ticket</Button>
            </div>
            {show ? <TicketForm onSubmit={createTicket(organisationId, boardId, closeModal)} onClose={closeModal}/> : null}
            <ListGroup>
                {ticketComps}
            </ListGroup>
        </div>
    )
}

const createTicket = (organisationId: string, boardId: string, closeModal: Function) => async (newTicket: Partial<ITicket>, ticketId?: string) => {
    // TODO - update apollo cache
    await putTicket(organisationId, newTicket, boardId, ticketId)
    closeModal()
}


export default TicketList;
