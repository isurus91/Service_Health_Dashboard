import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from  '../components/Homepage';
import AllTickets from '../sub-components/Tickets/allTickets';
import NewTickets from '../sub-components/Tickets/newTickets';
import PendingTickets from '../sub-components/Tickets/pendingTickets';
import SolvedTickets from '../sub-components/Tickets/solvedTickets';

export const Routes = () => (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/allTickets' component={AllTickets} />
      <Route path='/newTickets' component={NewTickets}/>
      <Route path='/pendingTickets' component={PendingTickets}/>
      <Route path='/solvedTickets' component={SolvedTickets}/>
    </Switch>
);

export default Routes;