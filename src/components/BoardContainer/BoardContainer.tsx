import React, { useState, useEffect } from 'react';
import { getBoard } from '../../graph-ql/boards/boards';
import Loading from '../Loading/Loading';
import Board from '../Board/Board';

export interface BoardContainerProps {
    organisationId: string,
    match: {
        params: {
            boardId: string
        }
    }
}

const BoardContainer = (props: BoardContainerProps) => {
    const { match, organisationId } = props;
    const { boardId } = match.params;
    const [boardState, setBoard] = useState()

    useEffect(() => {
        const request = async () => {
            const board = await getBoard(organisationId, boardId)
            setBoard(board)
        }
        request()
    }, [boardId])

    return (
        <div>
            {!boardState 
            ? <Loading />
            : <Board board={boardState} organisationId={organisationId} />}
        </div>
    )
}

export default BoardContainer;