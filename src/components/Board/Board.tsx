import React from 'react';
import { IBoard } from '../../types/board';
import { flexColumn, centreTitle } from '../../styles/layout';
import TicketList from '../TicketList/TicketList';

export interface BoardProps {
    board: IBoard
    organisationId: string
}

const Board = (props: BoardProps) => {
    const { board, organisationId } = props
    return (
        <div style={flexColumn}>
            <h1 style={centreTitle}>{board.name}: {`${board.tickets.length} Tickets`}</h1>
            <TicketList boardId={board.id} tickets={board.tickets} organisationId={organisationId}/>
        </div>
    )
}

export default Board;