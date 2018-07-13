import React from 'react';

import stuffRequests from '../../firebaseRequests/myStuff';

import './SingleItem.css';

class SingleItem extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount () {
    const firebaseId = this.props.match.params.id;
    stuffRequests
      .getSingleItem(firebaseId)
      .then((item) => {
        this.setState({item});
      })
      .catch(((err) => {
        console.error('error with get single item request', err);
      }));
  }

  render () {
    const {itemName, itemDescription, itemImage} = this.state;
    return (
      <div className="SingleItem col-xs-12 text-center">
        <img src={itemImage} alt={itemName}/>
        <h2>{itemName}</h2>
        <p>{itemDescription}</p>
      </div>
    );
  }
};

export default SingleItem;
