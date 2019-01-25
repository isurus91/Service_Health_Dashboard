import React, { Component } from 'react';
import Clock from 'react-live-clock';

class Navigation extends Component {
    constructor(props) {
        super(props);
    };

    getToggleID(clusterName) {
        clusterName = clusterName.replace(/[^A-Z0-9]/ig, "")
        return clusterName
    }

    render() {
        return (
            <nav className="navbar  navbar-expand-lg navbar-light" style={{ 'backgroundColor': '#f5f2f2', 'textAlign': 'center', 'borderBottom': '3px  gray' }}>
                <div className="col-md-2">
                    <a href="#/"><img width="50%" src={require('../media/cognite.png')} style={{ 'float': 'left' }} className="img-responsive center-block" alt="Responsive"/></a>                    
                </div>
                <div className="col-md-6" style={{ 'fontSize': '32px', 'fontFamily': 'Museo Slab 500', 'color': '#4e4c4c' }} >
                    <b><h1>SERVICE  HEALTH  DASHBOARD</h1></b>
                </div>
                <div className="col-md-2" >
                    <nav className="navbar navbar-expand-lg" style={{ 'backgroundColor': '#f5f2f2', 'fontSize': '18px' }}>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="#/">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="https://www.cognite.com/">Use-Cases</a>
                                <a className="nav-item nav-link" href="#/AllTickets">Alert</a>
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
                        {this.props.tableData.map((item,index) => (
                            <select id="inputState" className="form-control" key={item.index}>  
                                {item.cluster.map((cluster,i) => (
                                <option value={this.getToggleID(cluster.clusterName)} key={cluster.i}>{cluster.clusterName}</option>
                                ))}
                            </select>
                        ))}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;