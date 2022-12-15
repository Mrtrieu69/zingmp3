import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';

import styles from './SideBar.module.scss';
import logo from '../../assets/images/logo/logo-dark.svg';
import logoMini from '../../assets/images/logo/logo-mini.svg';
import MainLinks from './MainLinks';
import SecondaryLinks from './SecondaryLinks';
import { Button } from '../../components';
import SidebarMobile from './SidebarMobile';

const cx = classNames.bind(styles);

const SideBar = () => {
    const [show, setShow] = useState(false);

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
                        <Link to="/" className={cx('link-brand')}>
                            <img className={cx('logo')} src={logo} alt="logo" />
                            <img className={cx('logo-mini')} src={logoMini} alt="logo-mini" />
                        </Link>
                    </div>
                    <MainLinks />
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
