import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const {
      children,
      redirectTo = "/",
      isRouteReplaced = true,
      extraData = null,
      token = "",
    } = this.props;
    if (!token) {
      return (
        <Navigate to={redirectTo} replace={isRouteReplaced} state={extraData} />
      );
    }
    return children;
  }
}

const mapStateToProps = (state) => {
  const {
    user: {
      loginData: { token },
    },
  } = state;
  return {
    token,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
