import React, { Component } from 'react';
import Response from '../graphs/Response'
import '../../css/styles.css';

class ServicePef extends Component {

    render() {
        return (
            <div className="card-body">
                <div className="row" style={{ 'margin': '-8px' }}></div>
                <div className="row">
                    <p className="card-title" style={{ 'fontSize': '12px' }}>SESSIONS (NOW)</p>
                </div>
                <div className="row" style={{ 'margin': '5px' }}></div>
                <div className="row">
                    <div className="col-md-2">
                        <p style={{ 'fontSize': '75px', 'margin': '30px -15px' }}>15</p>
                    </div>
                    <div className="col-md-10">
                        <p className="card-title mr-5" style={{ 'fontSize': '12px', 'textAlign': 'right' }}>1 HOUR A GO</p>
                        <div className="row" style={{ 'alignSelf': 'right' }} >
                            <div className="col-md-8 ml-4">
                                <p style={{ 'fontSize': '15px', 'textAlign': 'right' }}>15</p>
                            </div>
                            <div className="triangle-down"></div>
                            <div className="col-md-3">
                                <p style={{ 'fontSize': '15px', 'color': 'red', 'textAlign': 'left' }}>15.25%</p>
                            </div>
                        </div>
                        <div className="row" style={{ 'margin': '1px' }} ></div>
                        <p className="card-title mr-5" style={{ 'fontSize': '12px', 'textAlign': 'right' }}>1 DAY A GO</p>
                        <div className="row" style={{ 'textAlign': 'right' }}>
                            <div className="col-md-8 ml-4">
                                <p style={{ 'fontSize': '15px', 'textAlign': 'right' }}>15</p>
                            </div>
                            <div className="triangle-up"></div>
                            <div className="col-md-3">
                                <p style={{ 'fontSize': '15px', 'color': 'red', 'textAlign': 'left' }}>15.25%</p>
                            </div>
                        </div>
                        <div className="row" style={{ 'margin': '1px' }}></div>
                        <p className="card-title mr-5" style={{ 'fontSize': '12px', 'textAlign': 'right' }}>1 WEEK A GO</p>
                        <div className="row" style={{ 'textAlign': 'right' }}>
                            <div className="col-md-8 ml-4">
                                <p style={{ 'fontSize': '15px', 'textAlign': 'right' }}>15</p>
                            </div>
                            <div className="triangle-down"></div>
                            <div className="col-md-3">
                                <p style={{ 'fontSize': '15px', 'color': 'red', 'textAlign': 'left' }}>15.25%</p>
                            </div>
                        </div>
                        <div className="row" style={{ 'margin': '5px -25px' }}></div>
                    </div>
                </div>
                <div className style={{ 'margin': '-20px' }}></div>
                <div className="row">
                    <Response />
                </div>
            </div>
        );
    }
}

export default ServicePef;