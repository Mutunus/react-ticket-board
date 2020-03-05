import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { ITicket } from '../../types/ticket';
import { flexAlignCentre } from '../../styles/layout';

export interface TicketItemProps {
    ticket: ITicket
}

const TicketItem = (props: TicketItemProps) => {
    const { ticket } = props;
    return (
        <Link to={`/ticket/${ticket.id}`}>
            <div style={{...flexAlignCentre, }}>
                <h5 style={{width: '25%'}}>{ ticket.name }</h5>
                <p style={{width: '50%'}}>{ticket.description}</p>
                <p style={{width: '25%'}}>{ticket.status}</p>
            </div>
        </Link>
    )
}

export default TicketItem;