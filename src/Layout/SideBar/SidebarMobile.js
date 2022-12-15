import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './SideBar.module.scss';
import { mainLinks } from '../../routes';

const cx = classNames.bind(styles);

const SidebarMobile = () => {
    const handleChangeLink = () => {
        document.querySelector('#main').scrollTop = 0;
    };

    return (
        <div className={cx('links-mobile')}>
            {mainLinks.map((item, id) => (
                <NavLink
                    onClick={handleChangeLink}
                    key={id}
                    to={item.path}
                    className={({ isActive }) => cx('link-mobile', { active: isActive })}
                >
                    <span className={cx('icon-mobile')}>{item.iconLeft}</span>
                    <span className={cx('title-mobile')}>
                        {item.title}
                        {item.separate && <span className={cx('separate')}>{item.separate}</span>}
                    </span>
                </NavLink>
            ))}
        </div>
    );
};

export default SidebarMobile;
