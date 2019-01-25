import React, { Component } from 'react';

class Tickets extends Component {
    getToggleID(serviceName) {
        serviceName = serviceName.replace(/[^A-Z0-9]/ig, "")
        return serviceName
    }
    render() {
        return (
            <div>
                <nav className="navbar  navbar-expand-lg navbar-light" style={{ 'backgroundColor': '#f5f2f2', 'textAlign': 'center', 'borderBottom': '3px  gray' }}>
                    <div className="col-md-2">
                       <a href="#/"><img width="50%" src={require('../../media/cognite.png')} style={{ 'float': 'left' }} className="img-responsive center-block" alt="Responsive"/></a> 
                    </div>
                    <div className="col-md-5" style={{ 'fontSize': '32px', 'fontFamily': 'Museo Slab 500', 'color': '#4e4c4c' }} >
                        <b><h1>ALERT  MANAGER</h1></b>
                        <b><h2>SOLVED TICKETS</h2></b>
                    </div>
                    <div className="col-md-3" >
                        <nav className="navbar navbar-expand-lg" style={{ 'backgroundColor': '#f5f2f2', 'fontSize': '18px','float': 'right'  }}>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-item nav-link" href="#/">Home</a>
                                    <a className="nav-item nav-link" href="#/allTickets">Tickets</a>
                                    <a className="nav-item nav-link" href="#/newTickets">New</a>
                                    <a className="nav-item nav-link" href="#/pendingTickets">Pending</a>
                                    <a className="nav-item nav-link" href="#/solvedTickets">Solved<span className="sr-only">(current)</span></a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-2" >
                        {/* <div className="row">
                        <Clock format={'YYYY-MM-DD   h:mm:ss A'} ticking={true} timezone={'CET'} style={{ 'fontSize': '22px', 'fontFamily': 'Orbitron', 'align': 'right' }} />
                        <p style={{ 'fontSize': '16px', 'fontFamily': 'Orbitron' }}>Oslo, Norway (GMT+1)</p>
                    </div> */}
                        <div className="row">
                            <div className="col-md-12" style={{ 'align': 'left' }}>
                            <select id="inputState" class="form-control">
                                    <option value=""selected>Last Hour</option>
                                    <option value="3">Last Day</option>
                                    <option value="3">Last Week</option>
                                    <option value="3">Last 30 Days</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </nav>
                <table className="table table-hover">
                    <thead style={{ 'backgroundColor': '#f5f2f2' }}>
                        <tr>
                            <th width='20%'>Atert Name</th>
                            <th width='15%'>Atert Type</th>
                            <th width='15%'>Recieved Time</th>
                            <th width='15%'>Solved Time</th>
                            <th width='15%'>Team</th>
                            <th width='20%'>Cluster</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr data-toggle="collapse" data-target="#a" className="accordion-toggle" style={{'height':'10px'}}>
                                <td height="100" >Atert 3</td>
                                <td>critical</td>
                                <td>2019-01-15 15:12:12</td>
                                <td>2019-01-16 15:12:12</td>
                                <td>Team C</td>
                                <td>multitenant</td>
                            </tr>
                            <tr className="hiddenRow">
                                <td colSpan='12'>
                                    <div className="accordian-body collapse" id="a">
                                    <img width="20%" src={require('../../media/cognite.png')} style={{ 'float': 'left' }} className="img-responsive center-block" alt="Responsive" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    
                </table>
            </div>
        )
    }
}

export default Tickets;