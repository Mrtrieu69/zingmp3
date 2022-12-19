import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';

import styles from './SideBar.module.scss';
import { secondaryRoutes, libraries } from '../../routes';
import { Button } from '../../components';

const cx = classNames.bind(styles);

const SecondaryLinks = () => {
    const [scroll, setScroll] = useState(false);
    const linkScroll = useRef();

    useEffect(() => {
        const handleScroll = (e) => {
            setScroll(!!e.target.scrollTop);
        };
        linkScroll.current.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={linkScroll} className={cx('links', 'scroll', { scrolling: scroll })}>
            {secondaryRoutes.map((item, id) => (
                <div key={id} onClick={() => toast.warning('Feature is being updated!')} className={cx('link')}>
                    <span className={cx('icon')}>{item.iconLeft}</span>
                    <span className={cx('title')}>{item.title}</span>
                </div>
            ))}
            <div className={cx('ad')}>
                <p className={cx('desc')}>Listen to music without ads with PRIMARY</p>
                <Button onClick={() => toast.warning('Feature is being updated!')} className={cx('primary')} primary>
                    PRIMARY
                </Button>
            </div>
            <div className={cx('library')}>Libraries</div>
            {libraries.map((item, id) => (
                <div key={id} onClick={() => toast.warning('Feature is being updated!')} className={cx('link')}>
                    <span className={cx('icon')}>{item.iconLeft}</span>
                    <span className={cx('title')}>{item.title}</span>
                </div>
            ))}
        </div>
    );
};

export default SecondaryLinks;
