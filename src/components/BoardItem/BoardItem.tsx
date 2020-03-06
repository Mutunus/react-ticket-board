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
            </div>
        </Link>
        
    )
}

export default BoardItem;
