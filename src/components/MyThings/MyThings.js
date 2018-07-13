import React from 'react';

import Item from '../Item/Item';
import authRequests from '../../firebaseRequests/auth';
import stuffRequests from '../../firebaseRequests/myStuff';

import './MyThings.css';

class MyThings extends React.Component {
  state = {
    myStuff: [],
  };

  componentDidMount () {
    stuffRequests
      .getMyStuff(authRequests.getUid())
      .then((myStuff) => {
        this.setState({myStuff});
      })
      .catch((error) => {
        console.error('error with myStuff GET request', error);
      });
  }

  render () {
    const itemComponents = this.state.myStuff.map((item) => {
      return (
        <Item
          key={item.id}
          details={item}
          addItem={this.addItem}
        />
      );
    });
    return (
      <div className="myThings col-xs-12">
        <h1>My Things</h1>
        <ul className="myStuff">
          {itemComponents}
        </ul>
      </div>
    );
  }
}

export default MyThings;
