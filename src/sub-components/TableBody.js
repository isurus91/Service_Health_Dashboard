import React, { Component } from 'react';
import DemoGraph from '../sub-components/graphs/demoGraph';
import CardView from '../sub-components/CardView';
import '../css/styles.css';

class TableBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };

        this.getToggleDataTarget = this.getToggleDataTarget.bind(this);
        this.getToggleID = this.getToggleID.bind(this);
        this.getButtonType = this.getButtonType.bind(this);
        this.getRowColor = this.getRowColor.bind(this);
    }
    getToggleDataTarget(appName,clustername) {
        appName = appName.replace(/[^A-Z0-9]/ig, "")
        clustername=clustername.replace(/[^A-Z0-9]/ig, "")
        appName = "#".concat(appName).concat(clustername)
        return appName
    }
    getToggleID(appName,clustername) {
        appName = appName.replace(/[^A-Z0-9]/ig, "")
        clustername=clustername.replace(/[^A-Z0-9]/ig, "")
        appName = appName.concat(clustername)
        return appName
    }

    getButtonType(total,upPods) {
        var type;
        if ((upPods/total)*100<35) {
            type = "btn btn-sm btn-danger btn-circle"
        } else if (35<(upPods/total)*100 & (upPods/total)*100<75) {
            type = "btn btn-sm btn-warning btn-circle"
        } else if ((upPods/total)*100 >=75) {
            type = "btn btn-sm btn-success btn-circle"
        }
        return type
    }

    getRowColor(upPods,total) {
        var type;
        if ((upPods/total)*100<35) {
            type = "table-danger"
        }
        return type
    }
    createTable() {
        let table = []
        let item = this.props.data;
        // console.log('data : ', item)
        // console.log('item : ', item[0])
        
        for (let i = 0; i < item.length; i++) {
            //  console.log('inner : ', i, ':', item[i]);
            //  console.log('inner 1: ', i, ':', item[i].cluster[i]);
            for (let j = 0; j < item[i].cluster.length; j++) {                
            // console.log('inner 2 : ', i, ':', item[i]);
                // console.log('inner 3: ', j, ':', item[i].cluster[j]);
                for (let k = 0; k < item[i].cluster[j].app.length; k++) {                
                    // console.log('inner 4 : ', i, ':', item[i]);
                    // console.log('inner 5: ', j, ':', item[i].cluster[j].app[k]);
            
            table.push(
                    <tbody>
                    <tr className="clickable" data-toggle="collapse" aria-expanded="false" aria-controls="group-of-rows-1" data-target={this.getToggleDataTarget(item[i].cluster[j].app[k].appName,item[i].cluster[j].clusterName)} className="accordion-toggle" className={this.getRowColor(item[i].cluster[j].app[k].upPods,item[i].cluster[j].app[k].total)}>
                    <td >{item[i].cluster[j].app[k].appName}</td> 
                    <td>{item[i].cluster[j].app[k].upPods}</td>
                    <td><button className={this.getButtonType(item[i].cluster[j].app[k].total,item[i].cluster[j].app[k].upPods)}></button></td>
                    <td>{((item[i].cluster[j].app[k].upPods)*100/(item[i].cluster[j].app[k].total)).toFixed(0)}%</td>
                    <td ><DemoGraph/></td>
                </tr>
                
                <tr>
                    <td colSpan='12'>
                        <div className="collapse" id={this.getToggleID(item[i].cluster[j].app[k].appName,item[i].cluster[j].clusterName)}>
                             <CardView data={item[i].cluster[j].app[k]} clust={item[i].cluster[j]}/> 
                        </div>
                    </td>
                </tr>               
                </tbody>                  
            );
        }  
                    
    }
}       
        return table
    }
    render() {
        return (
            this.createTable() 
        );
    }
}

export default TableBody;