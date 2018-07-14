import React from 'react';

import './Item.css';
import authRequests from '../../firebaseRequests/auth';

class Item extends React.Component {
  render () {
    const { details, postItem } = this.props;
    const addToMyThings = (e) => {
      const item = {
        uid: authRequests.getUid(),
        itemId: details.id,
        itemImage: details.itemImage,
        itemName: details.itemName,
        itemDescription: details.itemDescription,
        quantity: 1,
      };
      postItem(item);
    };

    return (
      <div className="card col-sm-4">
        <img className="card-img-top img" src={details.itemImage} alt="item"/>
        <div className="card-body">
          <h3 className="card-title">{details.itemName}</h3>
          <p className="card-text">{details.itemDescription}</p>
        </div>
        <div>
          <button className="btn btn-primary" onClick={addToMyThings}>Add</button>
        </div>
      </div>
    );
  }
}

export default Item;
