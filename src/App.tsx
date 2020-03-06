import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import OrganisationContainer from './components/OrganisationContainer/OrganisationContainer';
import BoardContainer from './components/BoardContainer/BoardContainer';
import Ticket from './components/Ticket/Ticket';

export enum TicketActions {
  DELETE = 'delete',
  ADD = 'add',
  EDIT = 'edit'
}

function App() {
  const organisationId = '806fb7b1-64fb-4ec1-853b-f4ac7554cc64'
  
  return (
    <main className="App">
      <Switch>
        <Route exact path='/' render={(props) => <OrganisationContainer {...props} organisationId={organisationId} />} />
        <Route exact path='/board/:boardId' render={(props) => <BoardContainer {...props} organisationId={organisationId} />} />
        <Route exact path='/board/:boardId/ticket/:ticketId' render={(props) => <Ticket {...props} organisationId={organisationId} />} />        
      </Switch>
    </main>
  );
}

export default App;
