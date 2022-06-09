import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Slider from './Slider';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div style={{ height: 2000 }} className={cx('wrapper')}>
            <Slider />
        </div>
    );
};

export default Home;
