import React from 'react';
import { IBoard } from '../../types/board';
import {Link} from "react-router-dom";

export interface BoardProps {
    board: IBoard
}

const BoardItem = (props: BoardProps) => {
    return (
        <Link to={`/board/${props.board.id}`}>
            <div>
                <h3>{ props.board.name }</h3>
                {/* <button onClick={e => setAddTicketState(!addTicket)}>Add Ticket</button>
                {addTicket ? <TicketModal onSubmit={(ticket) => addTicketToBoard(setAddTicketState, ticket, props.addTicket)}/> : null} */}
            </div>
        </Link>
        
    )
}

// const addTicketToBoard = (setAddTicketState, newTicket, addTicket) => {
//     setAddTicketState(false)
//     addTicket(newTicket)
// }

export default BoardItem;
