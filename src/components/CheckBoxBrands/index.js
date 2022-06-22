import React, { Component } from 'react'


class CheckBoxBrands extends Component {
  render() {
    return (
      <>
        <div>
          <input type="checkbox" /> {this.props.brands}
        </div>
      </>
    )
  }
}

export default CheckBoxBrands