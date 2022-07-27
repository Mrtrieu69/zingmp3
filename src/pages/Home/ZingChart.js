import React from 'react';
import classNames from 'classnames/bind';
import { BsFillPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { Button, ChartSong } from '../../components';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const ZingChart = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/images/chart/bg-chart.jpg'), linear-gradient(to bottom, #740091, #2d1a4c)",
            }}
            className={cx('zing-chart')}
        >
            <div className={cx('bg-alpha')}></div>
            <h3 className={cx('title-chart')}>
                <Link to="/zingchart">#zingchart</Link>
                <Button rounded icon={<BsFillPlayFill />} className={cx('icon-play-chart')} />
            </h3>
            <ChartSong />
            <div className={cx('layer')}>
                <Link to="/zingchart" className={cx('more')}>
                    Xem Thêm
                </Link>
            </div>
        </div>
    );
};

export default ZingChart;
