import React from 'react';
import { getExternalInfo } from '../../util/asset_api_util';
import { LineChart, Line, YAxis } from 'recharts';
import { Link } from 'react-router-dom';

class HoldingsItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { chartData: [] };
  }
  componentDidMount(){
    getExternalInfo('chart/1D', this.props.asset).then((data) => {
      let mappedData = data.map((datum) => {
        return {label: datum.label, close: datum.close };
      });
      this.setState({ chartData: mappedData });
    });
  }
  render () {
    let price;
    if (this.state.chartData.pop()){
      price = this.state.chartData.pop().close;
    }
    return(
      <li>
        <Link to={`/assets/${this.props.asset.id}`}>
          <div className="holdings-form-row">
            <div className="holdings-symbol">
              <h4 className="bold">{this.props.asset.symbol}</h4>
              <h5>{this.props.shares} shares</h5>
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

export default HoldingsItem;
