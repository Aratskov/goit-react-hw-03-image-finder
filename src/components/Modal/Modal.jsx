import { Component } from 'react';
import { Backdrop, ModalWindows } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModalByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModalByEsc);
  }

  handleCloseModalByEsc = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleCloseModal = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL } = this.props.imgModal;

    return createPortal(
      <Backdrop onClick={this.handleCloseModal}>
        <ModalWindows>
          <img src={largeImageURL} alt="" />
        </ModalWindows>
      </Backdrop>,
      modalRoot
    );
  }
}
