import React, { Component } from 'react';
import Content from '../sub-components/Content'

class Homepage extends Component {

    render() {
        return (
            <div className="wrapper">
                {/* Page Content Holder  */}
                <div id="content">
                    <Content/>
                </div>
            </div>
        );
    }
}
export default Homepage;