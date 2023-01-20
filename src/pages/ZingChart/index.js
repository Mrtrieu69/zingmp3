import React from 'react';
import classNames from 'classnames/bind';
import { Helmet } from 'react-helmet-async';
import { BsPlayFill } from 'react-icons/bs';

import styles from './ZingChart.module.scss';
import { Button, ChartSong } from '../../components';
import { SONGS, SONGS_K_POP, SONGS_VIETNAM, SONGS_US_UK } from '../../data/songs';

const cx = classNames.bind(styles);

const LIST_SONGS = [
    { title: 'Việt nam', songs: SONGS_VIETNAM },
    { title: 'US-UK', songs: SONGS_US_UK },
    { title: 'K-Pop', songs: SONGS_K_POP },
];

const ZingChart = () => {
    return (
        <>
            <Helmet>
                <title>#zingchart | See the hottest song and album right now</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <div className={cx('chart-title')}>
                    <h3 className={cx('title')}>#zingchart</h3>
                    <Button className={cx('btn-play')} size="medium" rounded icon={<BsPlayFill />} />
                </div>
                <ChartSong SONGS={SONGS} />
                <div className={cx('more')}>
                    <button>Show top 100</button>
                </div>
                <div className={cx('container')}>
                    <div id="week-chart" className={cx('background')}></div>
                    <div className={cx('blur')}></div>
                    <div className={cx('content')}>
                        <h3 className={cx('ranking')}>Weekly chart</h3>
                        <div className={cx('row')}>
                            {LIST_SONGS.map((list, id) => (
                                <div key={id} className={cx('columns')}>
                                    <div className={cx('chart-box')}>
                                        <div className={cx('chart-title', 'separate')}>
                                            <h3 className={cx('sub-title')}>{list.title}</h3>
                                            <Button
                                                className={cx('btn-play')}
                                                size="small"
                                                rounded
                                                icon={<BsPlayFill />}
                                            />
                                        </div>
                                        <ChartSong week SONGS={list.songs} />
                                        <div className={cx('more')}>
                                            <button>Show More</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ZingChart;
