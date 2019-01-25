import React, { Component } from 'react';
import PieChart from '../graphs/pieChart'
import Response from '../graphs/Response'

class InfDev extends Component {
    constructor(props) {
        super(props)
      }
    render() {
        return (
            <div className="card-body">
                <div className="row" style={{ 'margin': '10px' }}></div>
                <div className="row">
                    <p className="card-title" style={{ 'fontSize': '12px' }}>NUMBER OF PODS DOWN</p>
                </div>
                <div className="row" style={{ 'margin': '5px' }}></div>
                <div className="row">
                    <div className="col-md-2">
                        <p style={{ 'fontSize': '75px', 'margin': '30px -15px' }}>{this.props.data.downPods}</p>
                    </div>
                    <div className="col-md-5" style={{ 'textAlign': 'right', 'margin': '-55px 0px' }}>
                        {/* <PieChart ratio={this.props.data} /> */}
                    </div>
                    <div className="col-md-5" >
                        <p className="card-title mr-3" style={{ 'fontSize': '12px', 'textAlign': 'right' }}>1 HOUR A GO</p>
                        <div className="row ml-4" style={{ 'textAlign': 'right' }}>
                            <div className="col-md-6">
                                <p style={{ 'fontSize': '15px', 'textAlign': 'right' }}>{this.props.data.downPods}</p>
                            </div>
                            <div className="triangle-down"></div>
                            <div className="col-md-5">
                                <p style={{ 'fontSize': '15px', 'color': 'red', 'textAlign': 'left' }}>{((this.props.data.downPods)*100/(this.props.data.total)).toFixed(0)}%</p>
                            </div>
                        </div>
                        <div className="row" style={{ 'margin': '1px' }} ></div>
                        <p className="card-title mr-3" style={{ 'fontSize': '12px', 'textAlign': 'right' }}>1 DAY A GO</p>
                        <div className="row ml-4" style={{ 'textAlign': 'right' }}>
                            <div className="col-md-6">
                                <p style={{ 'fontSize': '15px', 'textAlign': 'right' }}>{this.props.data.downPods}</p>
                            </div>
                            <div className="triangle-up"></div>
                            <div className="col-md-5">
                                <p style={{ 'fontSize': '15px', 'color': 'red', 'textAlign': 'left' }}>{((this.props.data.downPods)*100/(this.props.data.total)).toFixed(0)}%</p>
                            </div>
                        </div>
                        <div className="row" style={{ 'margin': '1px' }}></div>
                        <p className="card-title mr-3" style={{ 'fontSize': '12px', 'textAlign': 'right' }}>1 WEEK A GO</p>
                        <div className="row ml-4" style={{ 'textAlign': 'right' }}>
                            <div className="col-md-6">
                                <p style={{ 'fontSize': '15px', 'textAlign': 'right' }}>{this.props.data.downPods}</p>
                            </div>
                            <div className="triangle-down"></div>
                            <div className="col-md-5">
                                <p style={{ 'fontSize': '15px', 'color': 'red', 'textAlign': 'left' }}>{((this.props.data.downPods)*100/(this.props.data.total)).toFixed(0)}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ 'margin': '3px' }}></div>
                <Response/>
            </div>
        );
    }
}

export default InfDev;