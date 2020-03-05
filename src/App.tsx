import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent'
import { IBoard } from './types/board';
import {getBoard} from './graph-ql/boards/boards'
import {
  Switch,
  Route,
} from "react-router-dom";
import OrganisationContainer from './components/OrganisationContainer/OrganisationContainer';
import BoardContainer from './components/BoardContainer/BoardContainer';

export enum TicketActions {
  DELETE = 'delete',
  ADD = 'add',
  EDIT = 'edit'
}

function App() {
  
  // TODO - get organisation with its boards

  // useEffect(async () => {
  //   const board = getBoard("806fb7b1-64fb-4ec1-853b-f4ac7554cc64", "ac07246f-d903-408f-8506-80a3f67327d0")
  // })

  
  const [boards, setBoards] = useState([{ name: 'nice board', id: '1111' } as IBoard])
  const [tickets, ticketDispatch] = useReducer(ticketReducer, [{ visible: false, name: 'ticket one', description: 'asdasd asdsad sadsdasda', id: '1' }, { visible: true, name: 'ticket two', description: 'asdasd dsdsdssdasad adssdsda sadsdasda', id: '2' }])
  // const boardProps = { boards, addBoard: addBoard(boards, setBoards) };
  const ticketProps = { tickets, ticketDispatch };

  return (
    <main className="App">
      <Switch>
        <Route exact path='/' render={(props) => <OrganisationContainer {...props} organisationId={`806fb7b1-64fb-4ec1-853b-f4ac7554cc64`} />} />
        <Route exact path='/board/:boardId' render={(props) => <BoardContainer {...props} organisationId={`806fb7b1-64fb-4ec1-853b-f4ac7554cc64`} />} />
      </Switch>
    </main>
  );
}

const ticketReducer = (state, action) => {
  switch (action.type) {
      case TicketActions.ADD:
      return [ ...state, action.payload ];
      case TicketActions.EDIT:
      return state.map(ticket => ticket.id === action.payload.id ? { ...ticket, ...action.payload } : ticket);
      case TicketActions.DELETE:
      return state.filter(ticket => ticket.id !== action.payload)
      default:
      throw new Error();
  }
}

export default App;
