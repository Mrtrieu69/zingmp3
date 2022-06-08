import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div style={{ height: 2000 }} className={cx('wrapper')}>
            <h1>Home page</h1>
        </div>
    );
};

export default Home;
