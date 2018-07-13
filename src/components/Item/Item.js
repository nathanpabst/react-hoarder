import React from 'react';

import './Item.css';

class Item extends React.Component {
  addClickEvent = () => {
    this.props.addToMyStuff(this.props.details.id);
  };

  render () {
    const { details } = this.props;

    return (
      <div className="card col-sm-4">
        <img className="card-img-top img" src={details.itemImage} alt="item"/>
        <div className="card-body">
          <h3 className="card-title">{details.itemName}</h3>
          <p className="card-text">{details.itemDescription}</p>
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.addToMyStuff}>Add</button>
        </div>
      </div>
    );
  }
}

export default Item;
