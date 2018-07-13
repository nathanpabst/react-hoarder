import React from 'react';

import stuffRequests from '../../firebaseRequests/stuff';
import Item from '../Item/Item';

import './AllThings.css';

class AllThings extends React.Component {
  state = {
    stuff: [],
  }

  componentDidMount () {
    stuffRequests
      .getRequest()
      .then((stuff) => {
        this.setState({stuff});
      })
      .catch((error) => {
        console.error('error with stuff GET request', error);
      });
  }

  render () {
    const itemComponents = this.state.stuff.map((item) => {
      return (
        <Item
          key={item.id}
          details={item}
        />
      );
    });
    return (
      <div className="AllTheThings col-xs-12">
        <h1>All the Things</h1>
        <ul className="stuff">
          {itemComponents}
        </ul>
      </div>
    );
  }
}

export default AllThings;
