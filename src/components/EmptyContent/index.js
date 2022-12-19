import React from 'react';
import { useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './EmptyContent.module.scss';

const cx = classNames.bind(styles);

const EmptyContent = ({ type = '', message }) => {
    const handleChangeLink = () => {
        document.querySelector('#main').scrollTop = 0;
    };

    const inputRef = useRef();

    const handleClick = () => {
        if (type !== 'upload') return;
        inputRef.current.click();
    };

    return (
        <div className={cx('wrapper')}>
            <div onClick={handleClick} className={cx('icon', { [type]: type })}></div>
            <div className={cx('text')}>{message}</div>
            {type === 'upload' ? (
                <input ref={inputRef} type="file" className={cx('input')} accept="audio/mp3" />
            ) : (
                <Link to="/" onClick={handleChangeLink} className={cx('explore')}>
                    Explore now
                </Link>
            )}
        </div>
    );
};

export default EmptyContent;
