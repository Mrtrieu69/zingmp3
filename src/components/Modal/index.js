import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

// icons
import { MdOutlineClose } from 'react-icons/md';

const cx = classNames.bind(styles);

let modalRoot = document.querySelector('#modal-root');

if (!modalRoot) {
    const modalRootDiv = document.createElement('div');
    modalRootDiv.id = 'modal-root';
    document.body.appendChild(modalRootDiv);
    modalRoot = modalRootDiv;
}

const Modal = ({ onClose, children, size = '' }) => {
    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleKeydown);
        };
    });

    return createPortal(
        <div className={cx('wrapper')}>
            <div onClick={onClose} className={cx('layout')}></div>
            <div onClick={(e) => e.stopPropagation()} className={cx('content', { [size]: size })}>
                <span onClick={onClose} className={cx('close')}>
                    <MdOutlineClose />
                </span>
                {children}
            </div>
        </div>,
        modalRoot,
    );
};

export default Modal;
