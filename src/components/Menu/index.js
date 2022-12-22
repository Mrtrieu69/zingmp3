import React, { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '../Button';
import { MdNavigateNext } from 'react-icons/md';

const cx = classNames.bind(styles);

const Menu = forwardRef(({ children, menu, bgImage, icon, className }, ref) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = (e, selector) => {
        function removeClickListener() {
            window.removeEventListener('click', outsideClickListener);
        }

        function outsideClickListener(e) {
            if (!e.target.closest(`.${cx('menu-blog')}`) && !e.target.closest(`.${selector}`)) {
                setShowMenu(false);
                removeClickListener();
            }
        }

        if (e.target.closest(`.${selector}`)) {
            setShowMenu(true);
            window.addEventListener('click', outsideClickListener);
        }
    };

    return (
        <div ref={ref} className={cx('wrapper', { [className]: className })}>
            {children}
            {icon && (
                <button className={cx('btn-action')} onClick={(e) => handleShowMenu(e, cx('btn-action'))}>
                    <span className={cx('icon')}>{icon}</span>
                </button>
            )}
            {bgImage && (
                <button className={cx('btn-bgImage')} onClick={(e) => handleShowMenu(e, cx('btn-bgImage'))}></button>
            )}
            <div className={cx('menu-blog', { show: showMenu })}>
                <div className={cx('menu-content')}>
                    {menu?.MENU_MAIN?.map((item, id) => (
                        <div key={id} className={cx('menu-item')}>
                            <Button link size="small" className={cx('menu-link')} iconLeft={item.iconLeft}>
                                {item.title}
                            </Button>
                            {item.children && (
                                <span className={cx('more')}>
                                    <MdNavigateNext />
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                <div className={cx('menu-footer')}>
                    {menu?.MENU_FOOTER?.map((item, id) => (
                        <div key={id} className={cx('menu-item')}>
                            <Button link size="small" className={cx('menu-link')} iconLeft={item.iconLeft}>
                                {item.title}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default Menu;
