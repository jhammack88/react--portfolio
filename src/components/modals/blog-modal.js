import React, { Component } from 'react';
import ReactModal from "react-modal";

ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "50%", 
                left: "50%", 
                right: "auto", 
                marginRight: "-50%", 
                transform: "translate(-50%, -50%", 
                width: "800px", 
                border: "5px dashed gray",
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, .75)"
            }
        }
    }

    render() {
        return (
            <ReactModal
            style={this.customStyles}
            onRequestClose={() => {
                this.props.handleModalClose();
            }}
             isOpen={this.props.modalIsOpen}>
                <h1>You've opened this dope modal</h1>
            </ReactModal>

        );
    }
}