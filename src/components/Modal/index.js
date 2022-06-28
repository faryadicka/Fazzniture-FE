import React, { Component } from 'react'
import {Modal} from 'react-bootstrap';
import BlackButton from "../Black-Button";
import withHOC from "../../helpers/withHOC"
import "./Modal.css"

export class showModal extends Component {
    render() {
        const { modalHandler, title, message, button, close, navigateTo, navigate } = this.props
        return (
            <div>
                <Modal show={title} size="s" centered className="modal">
                    <Modal.Title className="modal-title">
                        {title}
                    </Modal.Title>
                    <Modal.Body className="modal-body">
                        <p>
                        {message}
                        </p>
                    </Modal.Body>
                    <Modal.Footer className="modal-footer">
                        <div onClick={() => {
                            navigate(navigateTo)
                        }}>
                            <BlackButton text={button}/>
                        </div>
                        {close === "true" ?
                        <div onClick={() => {
                            modalHandler()
                        }}>
                            <BlackButton text="Close"/>
                        </div>:
                        <></>
                        }
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default withHOC(showModal)