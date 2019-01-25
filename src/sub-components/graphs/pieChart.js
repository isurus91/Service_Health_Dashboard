import React from 'react';
import { VictoryPie } from 'victory';

class App extends React.Component {
  constructor() {
    super();
  }
  getColour(ratio) {
    var ratio = (this.props.ratio.upPods * 100 / this.props.ratio.total).toFixed(0)
    var type;
    if (ratio < 35) {
      type = "#eb2525"
    } else if (35 < ratio & ratio < 75) {
      type = "#ffe600"
    } else if (ratio >= 75) {
      type = "#12d44d"
    }
    return type
  }

  render() {
    let ratio = (this.props.ratio.upPods * 100 / this.props.ratio.total).toFixed(0)

    return (
      <div>
        <VictoryPie
          innerRadius={100}
          data={ratio}
        />
      </div>
    );
  }
}

export default App;