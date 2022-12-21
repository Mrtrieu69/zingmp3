import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './SideBar.module.scss';
import { mainLinks } from '../../routes';

const cx = classNames.bind(styles);

const MainLinks = ({ setShow }) => {
    const handleRedirect = () => {
        setShow(false);
        document.querySelector('#main').scrollTop = 0;
    };
    return (
        <div className={cx('links')}>
            {mainLinks.map((item, id) => (
                <NavLink
                    onClick={handleRedirect}
                    key={id}
                    to={item.path}
                    className={({ isActive }) => cx('link', { active: isActive })}
                >
                    <span className={cx('icon')}>{item.iconLeft}</span>
                    <span className={cx('title')}>
                        {item.title}
                        {item.separate && <span className={cx('separate')}>{item.separate}</span>}
                    </span>
                </NavLink>
            ))}
            <div className={cx('divide')}></div>
        </div>
    );
};

export default MainLinks;
