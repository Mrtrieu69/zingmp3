import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Layout.module.scss';
import SideBar from './SideBar';
import Header from './Header';
import Footer from './Footer';
import { ContextMenu } from './components';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
    const [isScroll, setScroll] = useState(false);
    const { isFirstStartApp } = useSelector((state) => state.music);
    const [showContextMenu, setShowContextMenu] = useState(null);

    const mainRef = useRef();
    const handleCloseContextMenu = () => {
        setShowContextMenu(false);
    };

    useEffect(() => {
        const main = mainRef.current;
        const handleScroll = (e) => {
            setScroll(!!e.target.scrollTop);
        };
        main.addEventListener('scroll', handleScroll);

        const handleShowContextMenu = (e) => {
            let { pageX: left, pageY: top } = e;
            if (left > window.innerWidth - 260) {
                left -= 250;
            }
            if (top > window.innerHeight - 210) {
                top -= 200;
            }
            setShowContextMenu({ left, top });

            e.preventDefault();
        };

        document.body.addEventListener('contextmenu', handleShowContextMenu);

        return () => {
            main.removeEventListener('scroll', handleScroll);
            document.body.removeEventListener('contextmenu', handleShowContextMenu);
        };
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
            {showContextMenu && (
                <ContextMenu left={showContextMenu.left} top={showContextMenu.top} onCLose={handleCloseContextMenu} />
            )}
        </div>
    );
};

export default Layout;
