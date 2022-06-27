import React, { Component } from 'react'
import { connect } from "react-redux";
import withHOC from '../../helpers/withHOC';


class CheckBoxBrands extends Component {
  render() {
    const { brand, id, setSearchParams } = this.props
    return (
      <>
        <div>
          <input
            onChange={() => {
              if (id === 1) {
                setSearchParams({ brand: "ikea" })
              }
              if (id === 2) {
                setSearchParams({ brand: "mr+royal" })
              }
              if (id === 3) {
                setSearchParams({ brand: "sweet+house" })
              }
              if (id === 4) {
                setSearchParams({ brand: "north+oxford" })
              }
              if (id === 5) {
                setSearchParams({ brand: "mr+poppin" })
              }
            }}
            type="checkbox" id={id} name='brand' value={brand} /> {brand}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { searchParamsRedux } = state
  return {
    searchParamsRedux
  }
}

export default connect(mapStateToProps)(withHOC(CheckBoxBrands))