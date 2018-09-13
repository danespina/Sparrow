import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render () {
    return (
      <Link to='/assets/1'>Peep the only asset!</Link>
    );
  }
}

export default Dashboard;
