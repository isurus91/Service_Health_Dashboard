import React, { Component } from 'react';
import '../css/styles.css';
import axios from 'axios';
import TableData from './TableData';
import Navigation from './Navigation';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
        };
    };

    getToggleDataTarget(serviceName) {
        serviceName = serviceName.replace(/[^A-Z0-9]/ig, "")
        serviceName = "#".concat(serviceName)
        return serviceName
    }
    getToggleID(serviceName) {
        serviceName = serviceName.replace(/[^A-Z0-9]/ig, "")
        return serviceName
    }
    getButtonType(status) {
        var type;
        if (status === 'critical') {
            type = "danger"
        } else if (status === 'warning') {
            type = "warning"
        } else if (status === 'success') {
            type = "success"
        }
        return type
    }

    getBGButtonType(status) {
        var type;
        if (status === 'critical') {
            type = "table-danger"
        }
        return type
    }
    componentDidMount() {
        axios.get('http://www.mocky.io/v2/5c47d5643100002d008a1ed1')
            .then(res => {
                console.log("getting response");
                try {
                    this.setState({
                        tableData: res.data
                    });
                } catch (error) {
                    console.error(error)
                }
            })
            .catch((error) => {
                console.error(error)
            });
    }
    render() {
        return (
            <div>
                <Navigation tableData={this.state.tableData} />
                <TableData tableData={this.state.tableData} date={this.state.curTime} />
            </div>
        );
    }
}
export default App;
