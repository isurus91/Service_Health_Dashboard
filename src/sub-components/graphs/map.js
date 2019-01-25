import React, { Component } from 'react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import Highcharts from 'highcharts'

ReactChartkick.addAdapter(Chart)
ReactChartkick.addAdapter(Highcharts)
class MapContainer extends React.Component{
  render(){ 
    return(
     <LineChart download={true} download="boom" data={{"2017-05-13": 2, "2017-05-14": 15,"2017-05-13": 32, "2017-05-14": 25}} />
    );
  }
}
export default MapContainer;