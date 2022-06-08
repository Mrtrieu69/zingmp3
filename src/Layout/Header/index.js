import React from 'react';
import classNames from 'classnames/bind';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import styles from './Header.module.scss';
import Search from './Search';
import Menu from '../../components/Menu';
import { MENU_ACCOUNT, MENU_SETTING } from '../../data/menu';
import ThemeModal from './ThemeModal';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('level')}>
                    <button className={cx('level-left')}>
                        <BsArrowLeft />
                    </button>
                    <button className={cx('level-right', 'disabled')}>
                        <BsArrowRight />
                    </button>
                    <Search />
                </div>
                <div className={cx('actions')}>
                    <ThemeModal />
                    <Menu menu={MENU_SETTING} icon={<AiOutlineSetting />} />
                    <Menu menu={MENU_ACCOUNT} bgImage></Menu>
                </div>
            </div>
        </>
    );
};

export default Header;
