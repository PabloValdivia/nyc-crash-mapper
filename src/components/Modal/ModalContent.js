import React, { Component } from 'react';

// Higher Order Component (HOC) that wraps modal content's children
// see https://facebook.github.io/react/docs/higher-order-components.html
const ModalContent = (WrappedComponent, config) => {
  const { modalType, closeModal } = config;

  return class MC extends Component {
    render() {
      const title = {
        about: 'About NYC Crash Mapper',
        copyright: 'Copyright',
        disclaimer: 'Disclaimer',
        'download-data': 'Download Data',
        'share-fb': 'Share on Facebook',
        'share-tw': 'Share on Twitter',
        'share-url': 'Share URL',
      };

      return (
        <div>
          <button className="btn-modal-close" onClick={() => closeModal()} />
          <h5 className="modal-title">{title[modalType]}</h5>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default ModalContent;
