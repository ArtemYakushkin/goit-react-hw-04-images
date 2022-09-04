import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onModalClose, url }) => {
    
    useEffect(() => {

        const handleKeyDown = event => {
            if (event.code === 'Escape') {
                onModalClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, [onModalClose]);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onModalClose();
        }
    };

    return createPortal(
        <Overlay  onClick={handleBackdropClick}>
            <ModalContainer>
                <ModalImg src={url} alt="" />
            </ModalContainer>
        </Overlay>,
        modalRoot
    );
};

export default Modal;

Modal.propTypes = {
    onModalClose: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
};