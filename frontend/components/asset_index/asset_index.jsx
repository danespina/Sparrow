import React from 'react';
import { Link } from 'react-router-dom';

class AssetIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { assets: {} };
  }
  componentDidMount() {
    this.props.fetchAssets().then((data) => {
      this.setState({ assets: data.assets });
    });
  }
  render () {
    let theAssets;
    if (this.props.assets){
      theAssets = Object.values(this.state.assets).map((el) => {
        return (
          <li key={el.id}>
            <Link to={`/assets/${el.id}`}>{el.symbol}</Link>
          </li>);
      });
    }
  return (
    <ul>{theAssets}</ul>
  );
  }
}

export default AssetIndex;
