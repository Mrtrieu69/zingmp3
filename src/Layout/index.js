import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Layout.module.scss';
import SideBar from './SideBar';
import Header from './Header';
import Footer from './Footer';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
    const [isScroll, setScroll] = useState(false);
    const { isFirstStartApp } = useSelector((state) => state.music);

    const mainRef = useRef();

    useEffect(() => {
        const handleScroll = (e) => {
            setScroll(!!e.target.scrollTop);
        };
        mainRef.current.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={cx('container', { 'has-player': !isFirstStartApp })}>
            <div className={cx('wrapper')}>
                <SideBar />
                <div id="main" ref={mainRef} className={cx('main')}>
                    <div className={cx('header', { scroll: isScroll })}>
                        <Header />
                    </div>
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
