import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, YAxis } from 'recharts';
import { getExternalInfo } from '../../util/asset_api_util';

class WatchlistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chartData: [] };
  }
  cleanIncoming(arr) {
    let lastVals = arr.map((el) => {
      return el.close;
    });
    for (let i = lastVals.length; i >= 0; i--) {
      if (!lastVals[i]) {
        let j = i;
        while (!lastVals[j] && j > 0) {
          j--;
        }
        lastVals[i] = lastVals[j];
      }
    }
    return arr.map((el, idx) => {
      return {label: el.label, close: lastVals[idx]};
    });
  }
  componentDidMount(){
    getExternalInfo('chart/1D', this.props.asset).then((data) => {
      let mappedData = data.map((datum) => {
        return {label: datum.label, close: datum.close };
      });
      mappedData = this.cleanIncoming(mappedData);
      this.setState({ chartData: mappedData });
    });
  }
  render () {
    let price;
    if (this.state.chartData.pop()){
      price = this.state.chartData.pop().close;
    }
    return(
      <li key={this.props.asset.id}>
        <Link to={`/assets/${this.props.asset.id}`}>
          <div className="holdings-form-row">
            <div className="holdings-symbol">
              <h4 className="bold">{this.props.asset.symbol}</h4>
            </div>
            <LineChart width={80} height={40} data={this.state.chartData}>
              <Line type="linear" dataKey="close" stroke="#21ce99" strokeWidth={1} dot={false} animationDuration={0}/>
              <YAxis domain={['auto', 'auto']} hide={true}/>
            </LineChart>
            <h3>${price}</h3>
          </div>
        </Link>
      </li>
    );
  }
}

export default WatchlistItem;
