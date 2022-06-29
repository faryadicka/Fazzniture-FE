import React, { Component } from 'react';
import BlackButton from '../../components/Black-Button';

export class Table extends Component {
  render() {
    const { wishlist } = this.props;
    return (
      <div className="table-container">
        <div className="table-title">
          <div className="table-1">Product</div>
          <div className="table-2">Stock Status</div>
          <div className="table-3">Price</div>
        </div>
        {wishlist.map((item) => {
          return (
            <div className="table-row">
              <div className="table-1">
                <img src={item.image} alt="product" className='image-wishlist'></img>
                <div>{item.name}</div>
              </div>
              <div className="table-2">{item.stock}</div>
              <div className="table-3 table-3-row">
                <div>Rp {item.price}</div>
                <div>
                  <BlackButton text="Add to cart" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Table;
