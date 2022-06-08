import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './SideBar.module.scss';
import { mainRoutes } from '../../routes';

const cx = classNames.bind(styles);

const MainLinks = () => {
    const handleChangeLink = () => {
        document.querySelector('#main').scrollTop = 0;
    };
    return (
        <div className={cx('links')}>
            {mainRoutes.map((item, id) => (
                <NavLink
                    onClick={handleChangeLink}
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
