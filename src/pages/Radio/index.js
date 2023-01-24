import React from 'react';
import classNames from 'classnames/bind';
import { Helmet } from 'react-helmet-async';
import LiveStream from './LiveStream';

import styles from './Radio.module.scss';
import { LIST_PLAYLIST } from '../../data/radio';
import { ListPlaylist } from '../../components';
import TopPodcasts from './TopPodcasts';
import FeaturedPrograms from './FeaturedPrograms';

const cx = classNames.bind(styles);

const Radio = () => {
    return (
        <>
            <Helmet>
                <title>Radio | See the hottest song and album right now</title>
            </Helmet>
            <LiveStream />
            <TopPodcasts />
            <div className={cx('container')}>
                <h3 className={cx('title')}>Category Podcasts</h3>
                <div className={cx('categories')}>
                    {Array(5)
                        .fill()
                        .map((_, id) => (
                            <div key={id} className={cx('category-column')}>
                                <a href="#1" className={cx('category')}>
                                    <img src={`/images/categoryPodcasts/${id + 1}.webp`} alt="" />
                                </a>
                            </div>
                        ))}
                </div>
            </div>
            <FeaturedPrograms />
            {LIST_PLAYLIST.map((list) => (
                <div key={list.subTitle.id} className={cx('container')}>
                    <div className={cx('playlist-header')}>
                        <img src={list.subTitle.thumbnail} alt="" className={cx('zm-card-image')} />
                        <div className={cx('playlist-info')}>
                            <h3 className={cx('playlist-title')}>{list.title}</h3>
                            <h3 className={cx('playlist-subtitle')}>
                                <a href="#1" className={cx('playlist-link')}>
                                    {list.subTitle.name}
                                </a>
                            </h3>
                        </div>
                    </div>
                    <ListPlaylist list={list.items} />
                </div>
            ))}
        </>
    );
};

export default Radio;
