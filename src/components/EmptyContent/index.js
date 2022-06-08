import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './EmptyContent.module.scss';

const cx = classNames.bind(styles);

const EmptyContent = ({ type = '', message }) => {
    const handleChangeLink = () => {
        document.querySelector('#main').scrollTop = 0;
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon', { [type]: type })}></div>
            <div className={cx('text')}>{message}</div>
            {type !== 'upload' && (
                <Link to="/" onClick={handleChangeLink} className={cx('explore')}>
                    Explore now
                </Link>
            )}
        </div>
    );
};

export default EmptyContent;
