import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import { EmptyContent, Playlist } from '../../../../components';
import styles from './Song.module.scss';

const cx = classNames.bind(styles);

const NAVS = [{ title: 'favorite' }, { title: 'uploaded' }];

const Song = () => {
    const [nav, setNav] = useState('favorite');
    const favoriteSongs = useSelector((state) => state.music['favorite-songs']);

    return (
        <div>
            <div className={cx('btns')}>
                {NAVS.map((item, id) => (
                    <button
                        key={id}
                        onClick={() => setNav(item.title)}
                        className={cx('btn', { active: nav === item.title })}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            {nav === 'favorite' &&
                (favoriteSongs.length <= 0 ? (
                    <EmptyContent type="song" message="No favorite songs in personal library yet!" />
                ) : (
                    <Playlist songs={favoriteSongs} />
                ))}
            {nav === 'uploaded' && <EmptyContent type="upload" message="No songs uploaded in personal library yet!" />}
        </div>
    );
};

export default Song;
