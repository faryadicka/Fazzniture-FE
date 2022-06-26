import React, { Component } from 'react'
import { connect } from "react-redux";
import withHOC from '../../helpers/withHOC';


class CheckBoxBrands extends Component {
  render() {
    const { searchParamsRedux, brand, id, setSearchParams } = this.props
    return (
      <>
        <div>
          <input
            onChange={() => {
              if (id === 1) {
                setSearchParams({ ...searchParamsRedux, brand: "ikea" })
              }
              if (id === 2) {
                setSearchParams({ ...searchParamsRedux, brand: "mr+royal" })
              }
              if (id === 3) {
                setSearchParams({ ...searchParamsRedux, brand: "sweet+house" })
              }
              if (id === 4) {
                setSearchParams({ ...searchParamsRedux, brand: "north+oxford" })
              }
              if (id === 5) {
                setSearchParams({ ...searchParamsRedux, brand: "mr+poppin" })
              }
            }}
            type="radio" id={id} name='brand' /> {brand}
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