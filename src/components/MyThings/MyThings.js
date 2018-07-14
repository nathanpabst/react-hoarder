import React from 'react';

import Item from '../Item/Item';
import authRequests from '../../firebaseRequests/auth';
import stuffRequests from '../../firebaseRequests/myStuff';

import './MyThings.css';

class MyThings extends React.Component {
  state = {
    myStuff: [],
  }
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
      // const deleteClickEvent = () => {
      // this.props.history.push(`/myThings/${item.id}`);
      // };
      return (
        <Item
          key={item.id}
          details={item}
          postRequest={this.addItem}
        />
        // <button
        //   key={item.id}
        //   className="col-xs-12 btn btn-default delete-btn"
        //   // onClick={deleteClickEvent}
        // >
        // </button>
      );
    });
    return (
      <div className="myThings col-xs-12">
        <h2>My Things</h2>
        <ul className="myStuff">
          {itemComponents}
        </ul>
      </div>
    );
  }
}

export default MyThings;
