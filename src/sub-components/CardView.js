import React, { Component } from 'react';
import ServicePef from './card-view/servicePerformance'
import InfDev from './card-view/infDev'
import InfDev2 from './card-view/InfDev2'
import ServicePef2 from './card-view/ServPef2'
import Map from '../sub-components/graphs/map'

class CardView extends Component {
  constructor(props) {
    super(props)
  }

  getToggleDataTarget(appName,clusterName) {
    var n=0
    if(appName!==""){
      n=n++
    }
    appName = appName.replace(/[^A-Z0-9]/ig, "")
    appName = "#".concat(appName).concat(n).concat(clusterName)
    console.log("id :",appName)
    return appName
}
getToggleID(appName,clusterName) {
  var n=0
  if(appName!==""){
    n=n++
  }
    appName = appName.replace(/[^A-Z0-9]/ig, "")
    appName = appName.concat(n).concat(clusterName)
    return appName
  }


getToggleID2(appName,clusterName) {
  var n=0
  if(appName!==""){
    n=n++
  }
    appName = appName.replace(/[^A-Z0-9]/ig, "")
    appName = "".concat(n).concat(appName).concat(clusterName)
    return appName
}
getToggleDataTarget2(appName,clusterName) {
  var n=0
  if(appName!==""){
    n=n++
  }
  appName = appName.replace(/[^A-Z0-9]/ig, "")
  appName = "#".concat("").concat(n).concat(appName).concat(clusterName)
  console.log("id2 :",appName)
  return appName
}

getToggleID3(appName,clusterName) {
  var n=0
  if(appName!==""){
    n=n++
  }
    appName = appName.replace(/[^A-Z0-9]/ig, "")
    appName = "".concat(n).concat(appName).concat(n).concat(clusterName)
    return appName
}
getToggleDataTarget3(appName,clusterName) {
  var n=0
  if(appName!==""){
    n=n++
  }
  appName = appName.replace(/[^A-Z0-9]/ig, "")
  appName = "#".concat("").concat(n).concat(appName).concat(n).concat(clusterName)
  console.log("id3 :",appName)
  return appName
}

  render() {
    let num=this.props.data
    let clust=this.props.clust
    console.log('num1:',num)
    console.log('num:',clust.clusterName)

    console.log('time:',this.props.date)
    return (
      <div className="card-deck">
        <div className="card" style={{ 'width': '300px', 'height': '400px' }}>
          <div className style={{ 'margin': '5px' }}></div>
          <h3 className="card-title" style={{ 'textAlign': 'center' }}> Service Performance</h3>
          <div className style={{ 'margin': '-5px' }}></div>
          <div id={this.getToggleID(num.appName,clust.clusterName)} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ServicePef />
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="carousel-item">
                <div className style={{ 'margin': '10px' }}></div>
                <ServicePef2 />
                <div className="card-footer">
                  <small className="text-muted">Last updated 4 mins ago</small>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href={this.getToggleDataTarget(num.appName,clust.clusterName)} role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={this.getToggleDataTarget(num.appName,clust.clusterName)} role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
         <div className="card" style={{ 'width': '300px', 'height': '400px' }}>
          <div className style={{ 'margin': '5px' }}></div>
          <h3 className="card-title" style={{ 'textAlign': 'center' }}> Infrastructure Development</h3>
          <div className style={{ 'margin': '-20px' }}></div>
          <div id={this.getToggleID2(num.appName,clust.clusterName)} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <InfDev data={this.props.data}/>
                <div className style={{ 'margin': '-22px' }}></div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="carousel-item">
                <div className style={{ 'margin': '-5px' }}></div>
                <InfDev2 data={this.props.data} />
                <div className style={{ 'margin': '-20px' }}></div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 4 mins ago</small>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href={this.getToggleDataTarget2(num.appName,clust.clusterName)} role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={this.getToggleDataTarget2(num.appName,clust.clusterName)} role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="card" style={{ 'width': '300px', 'height': '400px' }}>
          <div className style={{ 'margin': '5px' }}></div>
          <h3 className="card-title" style={{ 'textAlign': 'center' }}> Service Performance</h3>
          <div className style={{ 'margin': '-5px' }}></div>
          <div id={this.getToggleID3(num.appName,clust.clusterName)} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ServicePef />
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="carousel-item">
                <div className style={{ 'margin': '-105px' }}></div>
                <ServicePef2/>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href={this.getToggleDataTarget3(num.appName,clust.clusterName)} role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={this.getToggleDataTarget3(num.appName,clust.clusterName)} role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a> 
          </div>
        </div> 
      </div>
    );
  }
}
export default CardView;