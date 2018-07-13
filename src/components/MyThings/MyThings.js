import React from 'react';

import './MyThings.css';

class MyThings extends React.Component {
  // saveItem = () => {
  //   this.props.saveNewItem();
  // };

  renderItem = (key) => {
    const item = this.props.items.find(x => x.id === key);
    const xClickFunction = () => {
      this.props.removeFromItems(key);
    };
    return (
      <li
        key={key}
      >
        <div className="thumbnail">
          <img className="img" src="item.itemImage" alt="item"/>
          <div className="caption">
            <h3>{item.itemName}</h3>
            <p>{item.itemDescription}</p>
          </div>
          <button className="btn btn-default" onClick={xClickFunction}>&times;</button>
        </div>
      </li>
    );
  }
  render () {

    return (
      <div className="Order">
        <h2>Order</h2>
        <ul>
          {orderIds.map(this.renderItem)}
        </ul>
        <div className="total">Total: <strong>{formatPrice(total)}</strong></div>
        {
          orderExists ? (
            <button className="btn btn-default" onClick={this.saveOrder}>Save Order</button>
          ) : (
            <div>Add inventory to your order</div>
          )
        }
      </div>
    );
  }
}

export default MyThings;
