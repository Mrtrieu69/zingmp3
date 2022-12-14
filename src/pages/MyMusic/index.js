import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { BsPlayFill } from 'react-icons/bs';

import styles from './MyMusic.module.scss';
import { Button, AlbumItem } from '../../components';
import { Song, MV, Podcast, Album } from './components';
import { PLAYLISTS } from '../../data/playlists';

const cx = classNames.bind(styles);

const NAVBAR_LIST = [
    { title: 'Song', component: <Song /> },
    { title: 'MV', component: <MV /> },
    { title: 'Podcast', component: <Podcast /> },
    { title: 'Album', component: <Album /> },
];

const MyMusic = () => {
    const [currentItem, setCurrentItem] = useState('Song');

    const line = useRef();

    const handleRedirect = (e, title) => {
        const { offsetLeft, offsetWidth } = e.target;
        line.current.style.left = `${offsetLeft}px`;
        line.current.style.width = `${offsetWidth}px`;

        setCurrentItem(title);
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('header')}>
                <span>Library</span> <Button className={cx('btn-play')} rounded icon={<BsPlayFill />}></Button>
            </h1>
            <div className={cx('zm-section')}>
                <h3 className={cx('title')}>PLAYLIST</h3>
                <div className={cx('playlists')}>
                    {Object.entries(PLAYLISTS).map(([_, item], id) => (
                        <AlbumItem showSubtitle key={id} {...item} />
                    ))}
                </div>
            </div>
            <div className={cx('zm-footer')}>
                <div className={cx('navbar')}>
                    {NAVBAR_LIST.map((item, id) => (
                        <div
                            key={id}
                            onClick={(e) => handleRedirect(e, item.title)}
                            className={cx('navbarItem', { active: item.title === currentItem })}
                        >
                            {item.title}
                        </div>
                    ))}
                    <div ref={line} className={cx('line')}></div>
                </div>
                {NAVBAR_LIST.find((item) => item.title === currentItem).component}
            </div>
        </div>
    );
};

export default MyMusic;
