import React from 'react';
import classNames from 'classnames/bind';
import { BsSearch } from 'react-icons/bs';
import { Button } from '../../../components';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const MENU_SEARCH = [
    { title: 'lemon tree' },
    { title: 'sugar' },
    { title: 'sweet but psycho' },
    { title: 'faded' },
    { title: 'bad guy' },
];

const Search = () => {
    return (
        <form action="" className={cx('wrapper')} onSubmit={(e) => e.preventDefault()}>
            <div className={cx('search')}>
                <Button
                    size="medium"
                    className={cx('search-icon')}
                    onMouseDown={(e) => e.preventDefault()}
                    rounded
                    icon={<BsSearch />}
                />
                <input type="text" className={cx('search-input')} placeholder="Name of the song, artist or MV..." />
            </div>
            <div className={cx('history')}>
                <h4 className={cx('title')}>Recommend for you</h4>
                {MENU_SEARCH.map((item, id) => (
                    <div key={id} className={cx('link')}>
                        <span className={cx('icon')}>
                            <BsSearch />
                        </span>
                        <span className={cx('value')}>{item.title}</span>
                    </div>
                ))}
            </div>
        </form>
    );
};

export default Search;
