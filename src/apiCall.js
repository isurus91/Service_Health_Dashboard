import React, { Component } from 'react';
import '../css/styles.css';
import { Button } from 'react-bootstrap';
import Clock from 'react-live-clock';

class App extends Component {
    
    render() {
        return (
            <div>
                         
                <nav className="navbar navbar-expand-lg navbar-light" style={{'background-color': '#cdd0d3' }}>
                    <img width="200px" src={require('../media/cognite.png')} style={{ 'float': 'left' }} className="img-responsive center-block" alt="Responsive image" />
                    <h1 className="text-center" >&ensp;&emsp;&emsp;&ensp;&emsp;&emsp;SERVICE  HEALTH  DASHBOARD</h1>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div align="right" className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        </ul>
                        
                        <form className="form-inline my-2 my-lg-0">
                            <input classNameName="form-control mr-sm-1 " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div  className="navbar" style={{'background-color': '#cdd0d3' ,'font-size':'22px','display': 'inline-block','display':'flex', 'flex-direction':'row'}}>                
                    <b><Clock className="text-left" format={'DD-MM-YYYY, h:mm a'} ticking={true} timezone={'CET'}/><br/><p style={{'font-size':'12px'}}>Oslo, Norway (GMT+1)</p></b>     
                    <b><Clock className="text-right" format={'DD-MM-YYYY, h:mm a'} ticking={true} timezone={'IST'}/><br/><p style={{'font-size':'12px' ,'text-align':'right'}}>Colombo, Sri Lanka (GMT+5:30)</p></b>                    
                </div> 
                <table className="table table-hover">
                    <thead style={{'background-color': '#e2eefa'}}>
                        <tr>
                            <th>Service Name</th>
                            <th>Protocol</th>
                            <th>Uptime</th>
                            <th>Status</th>
                            <th>Heartbeat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr data-toggle="collapse" data-target="#accordion" className="clickable">
                            <td>cognite.api</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="success" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="accordion" className="collapse">
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameborder="0"></iframe>
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameborder="0"></iframe>

                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion1" className="clickable">
                            <td>bigtable.raw</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="warning" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="accordion1" className="collapse">
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameborder="0"></iframe>
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameborder="0"></iframe>                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion2" className="table-danger">
                            <td>bigtable.tsdb</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="danger" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="accordion2" className="collapse">
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameborder="0"></iframe>
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameborder="0"></iframe>                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion3" className="clickable">
                            <td>3Dserive</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="success" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="accordion3" className="collapse">
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameborder="0"></iframe>
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameborder="0"></iframe>                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion4" className="clickable">
                            <td>pubsub.topics</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="warning" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="accordion4" className="collapse">
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameborder="0"></iframe>
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameborder="0"></iframe>                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>



        );
    }
}
export default App;