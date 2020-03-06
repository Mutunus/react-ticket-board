import React, {useState} from 'react';
import BoardItem from '../BoardItem/BoardItem'
import { IBoard } from '../../types/board';
import { titleContainer } from '../../styles/layout';
import { Button, ListGroup } from 'react-bootstrap';
import BoardForm from '../BoardForm/BoardForm';
import { putBoard } from '../../graph-ql/boards/boards';

export interface BoardListProps {
    boards: IBoard[],
    organisationId: string
}

const BoardList = (props: BoardListProps) => {
    const [show, setShow] = useState(false);
    const { boards, organisationId } = props;
    const boardComps = boards.map(board => <ListGroup.Item key={board.id}><BoardItem board={board}/></ListGroup.Item>)
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    return (
        <div style={{margin: '15px'}}>
            <div style={titleContainer}>
                <h2>Boards</h2>
                <Button onClick={showModal}>Create Board</Button>
            </div>
            {show ? <BoardForm onSubmit={addBoard(organisationId, closeModal)} onClose={closeModal}/> : null}
            <ListGroup>
                {boardComps}
            </ListGroup>
        </div>
    )
}

const addBoard = (organisationId: string, closeModal: Function) => async (newBoard: Partial<IBoard>) => {
    // TODO - update apollo cache
    await putBoard(organisationId, newBoard)
    closeModal();
}

export default BoardList;