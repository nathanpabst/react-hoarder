import React from 'react';

import './Item.css';

class Item extends React.Component {
  addClickEvent = () => {
    this.props.addToMyStuff(this.props.details.id);
  };

  render () {
    const { details } = this.props;

    return (
      <li className="Item">
        <img src={details.itemImage} alt={details.itemName}/>
        <h3 className="name">
          {details.itemName}
        </h3>
        <p>{details.itemDescription}</p>
        <button
          onClick={this.addClickEvent}
        >
          Add To My Stuff
        </button>
      </li>
    );
  }
}

export default Item;
