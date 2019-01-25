import React, { Component } from 'react';
import TableBoday from '../sub-components/TableBody'
import '../css/styles.css';

class TableData extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <table className="table table-hover" id="myTable">
                <thead style={{ 'backgroundColor': '#f5f2f2' }}>
                    <tr>
                        <th width='30%'>Service Name</th>
                        <th width='15%'>Up Pods</th>
                        <th width='20%'>Status</th>
                        <th width='15%'>Heartbeat</th>
                        <th width='50%' style={{ 'text-align': 'center' }}>Outages</th>
                    </tr>
                </thead>
                <TableBoday data={this.props.tableData}/>                  
            </table>
                   
        );
    }
}
export default TableData;