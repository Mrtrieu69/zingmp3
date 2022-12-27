import React from 'react';
import classNames from 'classnames/bind';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import styles from './Header.module.scss';
import Search from './Search';
import Menu from '../../components/Menu';
import { MENU_ACCOUNT, MENU_SETTING } from '../../data/menu';
import ThemeModal from './ThemeModal';
import { Tippy } from '../../components';

const cx = classNames.bind(styles);

const Header = () => {
    const history = window.history;

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('level')}>
                    <button
                        onClick={() => history.back()}
                        className={cx('level-left', { disabled: history.state?.idx <= 0 })}
                    >
                        <BsArrowLeft />
                    </button>
                    <button
                        onClick={() => history.forward()}
                        className={cx('level-right', { disabled: history.state?.idx >= history.length - 2 })}
                    >
                        <BsArrowRight />
                    </button>
                    <Search />
                </div>
                <div className={cx('actions')}>
                    <ThemeModal />
                    <Tippy title="Settings">
                        <Menu menu={MENU_SETTING} className={cx('action-setting')} icon={<AiOutlineSetting />} />
                    </Tippy>
                    <Menu menu={MENU_ACCOUNT} bgImage />
                </div>
            </div>
        </>
    );
};

export default Header;
