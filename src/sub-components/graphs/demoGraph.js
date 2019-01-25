import React from 'react';
import { Tooltip, AreaChart, Area } from 'recharts';
import axios from 'axios';

class Example extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data02: []
    }
  }
  
  componentDidMount() {
    axios.get('http://www.mocky.io/v2/5c46a9d1310000883305f3ed')
    .then(res => {
        console.log("getting response");
        try {
          this.setState({
            data02: res.data
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
      <div className="recharts-wrapper" style={{ display: 'flex' }}>
        <AreaChart width={350} height={35} data={this.state.data02}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>           
          </defs>
          <Tooltip />
          <Area type="monotone" dataKey="errorRatio" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </div>
    );
  }
}

export default Example;