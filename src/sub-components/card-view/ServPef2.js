import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="card-columns mr-4">
                <a href="#/newTickets">
                    <div className="card p-3">
                        <p className="card-title" style={{ 'fontSize': '15px' }}>New Tickets</p>
                        <p style={{ 'fontSize': '75px', 'margin': '45px -10px' }}>15</p>
                    </div>
                </a>
                <div className="card p-3">
                    <p className="card-title" style={{ 'fontSize': '15px' }}>Average Reply Time</p><p> (Last 1 Hour)</p>
                    <p style={{ 'fontSize': '33px', 'margin': '45px 5px' }}>15m 12s</p>
                </div>
                <a href="#/pendingTickets">
                    <div className="card p-3">
                        <p className="card-title" style={{ 'fontSize': '15px' }}>Pending Tickets</p>
                        <p style={{ 'fontSize': '75px', 'margin': '45px -10px' }}>8</p>
                    </div>
                </a>
                <div className="card p-3">
                    <p className="card-title" style={{ 'fontSize': '15px' }}>Average Reply Time</p><p> (Last 24 Hours)</p>
                    <p style={{ 'fontSize': '33px', 'margin': '45px 5px' }}>15m 12s</p>
                </div>
                <a href="#/solvedTickets">
                    <div className="card p-3">
                        <p className="card-title" style={{ 'fontSize': '15px' }}>Solved Tickets</p>
                        <p style={{ 'fontSize': '75px', 'margin': '45px -10px' }}>22</p>
                    </div>
                </a>
                <div className="card p-3">
                    <p className="card-title" style={{ 'fontSize': '15px' }}>Average Reply Time</p><p> (Last Week)</p>
                    <p style={{ 'fontSize': '33px', 'margin': '45px 5px' }}>15m 12s</p>
                </div>                
            </div>
        )
    }
}

export default App;
