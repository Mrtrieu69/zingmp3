import classNames from 'classnames/bind';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import styles from './ContextMenu.module.scss';
import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineReload,
    AiOutlinePlayCircle,
    AiOutlineCustomerService,
} from 'react-icons/ai';

let modalRoot = document.querySelector('#modal-root');

if (!modalRoot) {
    const modalRootDiv = document.createElement('div');
    modalRootDiv.id = 'modal-root';
    document.body.appendChild(modalRootDiv);
    modalRoot = modalRootDiv;
}

const cx = classNames.bind(styles);

const ContextMenu = ({ left, top, onCLose }) => {
    const wrapperRef = useRef();
    const navigate = useNavigate();

    const history = window.history;

    const handleBack = () => {
        history.back();
        onCLose();
    };

    const handleNext = () => {
        history.forward();
        onCLose();
    };

    const handleReload = () => {
        window.location.reload();
        onCLose();
    };

    const handleRedirect = (to) => {
        navigate(to);
        onCLose();
    };

    useEffect(() => {
        const wrapper = wrapperRef.current;

        const handleClick = (e) => {
            if (!wrapper.contains(e.target)) {
                onCLose();
            }
        };

        document.body.addEventListener('click', handleClick, true);
        document.body.addEventListener('wheel', onCLose);
        window.addEventListener('resize', onCLose);

        return () => {
            document.body.removeEventListener('click', handleClick, true);
            document.body.removeEventListener('wheel', onCLose);
            window.removeEventListener('resize', onCLose);
        };
    }, [onCLose]);

    return createPortal(
        <div ref={wrapperRef} style={{ left, top }} className={cx('wrapper')}>
            <ul className={cx('actions')}>
                <li onClick={handleBack} className={cx('action', { disable: history.state?.idx <= 0 })}>
                    <span className={cx('icon')}>
                        <AiOutlineArrowLeft />
                    </span>
                    <span className={cx('label')}>Previous</span>
                </li>
                <li
                    onClick={handleNext}
                    className={cx('action', { disable: history.state?.idx >= history.length - 2 })}
                >
                    <span className={cx('icon')}>
                        <AiOutlineArrowRight />
                    </span>
                    <span className={cx('label')}>Next</span>
                </li>
                <li onClick={handleReload} className={cx('action')}>
                    <span className={cx('icon')}>
                        <AiOutlineReload />
                    </span>
                    <span className={cx('label')}>Reload</span>
                </li>
                <li onClick={() => handleRedirect('/')} className={cx('action')}>
                    <span className={cx('icon')}>
                        <AiOutlinePlayCircle />
                    </span>
                    <span className={cx('label')}>Explore</span>
                </li>
                <li onClick={() => handleRedirect('/mymusic')} className={cx('action')}>
                    <span className={cx('icon')}>
                        <AiOutlineCustomerService />
                    </span>
                    <span className={cx('label')}>Personal music</span>
                </li>
            </ul>
        </div>,
        modalRoot,
    );
};

export default ContextMenu;
