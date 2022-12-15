import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Types = [
    { image: 'url(/images/home/typeSongs/song-vn-2x.jpg)', type: 'vn' },
    { image: 'url(/images/home/typeSongs/web_song_kpop.jpg)', type: 'kpop' },
    { image: 'url(/images/home/typeSongs/web_song_usuk.jpg)', type: 'usuk' },
];

const TypeSongs = () => {
    return (
        <div className={cx('types')}>
            {Types.map((type, id) => (
                <div key={id} className={cx('type')}>
                    <div className={cx('type-image')} style={{ backgroundImage: type.image }}></div>
                </div>
            ))}
        </div>
    );
};

export default TypeSongs;
