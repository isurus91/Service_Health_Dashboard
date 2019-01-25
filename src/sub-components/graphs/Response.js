import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, uvq: 4000, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398,  uvq: 4000,amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, uvq: 4000, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908,  uvq: 4000,amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800,  uvq: 4000,amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800,  uvq: 4000,amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300,  uvq: 4000,amt: 2100 },
];

class Response extends React.Component {

  render() {
    return (
      <LineChart width={550} height={160} data={data}
        margin={{ top: 5, right: 30, left: -10, bottom: 10 }}>
        <XAxis dataKey="name" />
        <YAxis />        
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uvq" stroke="#8884d8" />
      </LineChart>      
    )
  }
}

export default Response;