import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';

import styles from './SideBar.module.scss';
import MainLinks from './MainLinks';
import SecondaryLinks from './SecondaryLinks';
import { Button } from '../../components';
import SidebarMobile from './SidebarMobile';

const cx = classNames.bind(styles);

const SideBar = () => {
    const [show, setShow] = useState(false);

    const handleRedirect = () => {
        setShow(false);
        document.querySelector('#main').scrollTop = 0;
    };

    useEffect(() => {
        const handleShow = () => {
            if (window.innerWidth > 1024) {
                setShow(false);
            }
        };

        window.addEventListener('resize', handleShow);

        handleShow();

        return () => window.removeEventListener('resize', handleShow);
    }, []);

    return (
        <>
            <div className={cx('sidebar-pc')}>
                <div id="sidebar" className={cx('wrapper', { active: show })}>
                    <div className={cx('brand')}>
                        <Link to="/" onClick={handleRedirect} className={cx('link-brand')}>
                            <div className={cx('logo')}></div>
                        </Link>
                    </div>
                    <MainLinks setShow={setShow} />
                    <SecondaryLinks />
                    <Button
                        onClick={() => toast.warning('Feature is being updated!', { className: cx('toast') })}
                        iconLeft={<AiOutlinePlus />}
                        link
                        className={cx('new')}
                    >
                        New Playlist
                    </Button>
                    <div className={cx('btn')}>
                        <Button
                            onClick={() => setShow(!show)}
                            rounded
                            size="medium"
                            icon={show ? <BiLeftArrowAlt /> : <BiRightArrowAlt />}
                            className={cx('show')}
                        />
                    </div>
                </div>
                {show && <div onClick={() => setShow(false)} className={cx('layout')}></div>}
            </div>
            <div className={cx('sidebar-mobile')}>
                <SidebarMobile />
            </div>
        </>
    );
};

export default SideBar;
