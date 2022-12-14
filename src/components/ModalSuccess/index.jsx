import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ModalSuccess extends Component {
  render() {
    const { showModal, hideModal, success, message } = this.props;
    return (
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body
          className={`text-center ${
            success ? "text-success" : "text-warning"
          } fw-bold text-center`}
        >
          {message}
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalSuccess;
