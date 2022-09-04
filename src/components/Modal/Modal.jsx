import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.closeModal();
        }
    };

    handleBackdropClick = event => {
        console.log('кликнули в бэкдроп');
        if (event.currentTarget === event.target) {
            this.props.closeModal();
        }
    };

    render() {
        return createPortal(
            <Overlay  onClick={this.handleBackdropClick}>
                <ModalContainer>
                    <ModalImg src={this.props.url} alt="" />
                </ModalContainer>
            </Overlay>,
            modalRoot
        );
    };
};

export default Modal;

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
};