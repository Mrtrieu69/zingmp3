import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

const Menu = forwardRef(({ children, menu, bgImage, icon, className }, ref) => {
    const renderResult = (attrs) => (
        <div className={cx('menu-blog')} tabIndex="-1" {...attrs}>
            <div className={cx('menu-content')}>
                {menu?.MENU_MAIN?.map((item, id) => (
                    <div key={id} className={cx('menu-item')}>
                        <Button link size="small" className={cx('menu-link')} iconLeft={item.iconLeft}>
                            {item.title}
                        </Button>
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
    );

    return (
        <Tippy trigger="click" interactive offset={[12, 8]} hideOnClick placement="bottom-end" render={renderResult}>
            <div ref={ref} className={cx('wrapper', { [className]: className })}>
                {children}
                {icon && (
                    <button className={cx('btn-action')}>
                        <span className={cx('icon')}>{icon}</span>
                    </button>
                )}
                {bgImage && <button className={cx('btn-bgImage')}></button>}
            </div>
        </Tippy>
    );
});

export default Menu;
