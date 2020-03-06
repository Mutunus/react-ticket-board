import React, { useState, useEffect } from 'react';
import { getTicket, putTicket } from '../../graph-ql/ticket/ticket';
import { Card, Button } from '../../../node_modules/react-bootstrap';
import { ticketContainerStyle } from './TicketStyles';
import { ITicket } from '../../types/ticket';
import Loading from '../Loading/Loading';
import TicketForm from '../TicketForm/TicketForm';

export interface TicketProps {
    organisationId: string,
    match: {
        params: {
            boardId: string,
            ticketId: string
        }
    }
}

const Ticket = (props: TicketProps) => {
    const { match, organisationId } = props;
    const { ticketId, boardId } = match.params;
    const [ticketState, setTicketState] = useState()
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    useEffect(() => {
        const request = async () => {
            const ticket = await getTicket(organisationId, ticketId)
            setTicketState(ticket)
        }
        request()
    }, [organisationId, ticketId])
    
    return (
        <div>
            {
                !ticketState ? <Loading/>
                : <div style={ticketContainerStyle}>
                    <Card style={{ width: '75%' }}>
                        <Card.Body>
                            <Card.Title>{ticketState.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{ticketState.status}</Card.Subtitle>
                            <Card.Text>{ticketState.description}</Card.Text>
                            <Button onClick={showModal} style={{marginTop: '15px'}} variant="primary">Edit Ticket</Button>
                        </Card.Body>
                    </Card>
                    {show ? <TicketForm ticket={ticketState} onSubmit={createTicket(organisationId, boardId, closeModal)} onClose={closeModal}/> : null}
                </div>
            }
        </div>
    )
}

const createTicket = (organisationId: string, boardId: string, closeModal: Function) => async (newTicket: Partial<ITicket>, ticketId?: string) => {
    // TODO - update apollo cache
    await putTicket(organisationId, newTicket, boardId, ticketId)
    closeModal()
}

export default Ticket