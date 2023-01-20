import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './NowPlaying.module.scss';
import { Button, Tippy } from '../../../components';
import { PLAYLISTS } from '../../../data/playlists';
import Lyrics from './Lyrics';
import NowPlaylist from './NowPlaylist';

// icons
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineOpenInFull, MdOutlineCloseFullscreen } from 'react-icons/md';

const cx = classNames.bind(styles);

const TABS = [
    { title: 'Playlist', tab: 'playlist', comp: Lyrics, readiness: true },
    { title: 'Karaoke', tab: 'karaoke', comp: Lyrics, readiness: false },
    { title: 'Lyrics', tab: 'lyrics', comp: Lyrics, readiness: true },
];

const renderNamePlaylist = (currentList) => {
    if (currentList === 'favorite-songs') {
        return 'Favorite songs';
    }
    const nameCurrentList = PLAYLISTS[currentList].name;
    return nameCurrentList;
};

const NowPlaying = ({ close, setShowNowPlaying, audioEl, isIdle }) => {
    const [showFullScreen, setShowFullScreen] = useState(false);
    const [currentTab, setCurrentTab] = useState('lyrics');

    const { currentSong, currentList } = useSelector((state) => state.music);

    const toggleShowScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    const handleCloseNowPlaying = () => {
        setShowNowPlaying(false);
    };

    const handleChangeTab = (tab) => {
        setCurrentTab(tab);
    };

    useEffect(() => {
        const handleChangeFullScreen = (e) => {
            setShowFullScreen(!showFullScreen);
        };

        document.addEventListener('fullscreenchange', handleChangeFullScreen);

        return () => document.removeEventListener('fullscreenchange', handleChangeFullScreen);
    }, [showFullScreen]);

    return (
        <div className={cx('wrapper', { close, 'is-idle': isIdle })}>
            <div
                className={cx('blur')}
                style={{
                    backgroundImage: `url(${currentSong.thumb})`,
                }}
            ></div>
            <div className={cx('overlay')}></div>
            <div className={cx('content')}>
                <header className={cx('header')}>
                    <div className={cx('left')}>
                        <div className={cx('logo')}></div>
                        <div className={cx('info')}>
                            <p className={cx('label')}>From playlist</p>
                            <p className={cx('source', 'line-clamp')}>{renderNamePlaylist(currentList)}</p>
                        </div>
                    </div>
                    <div className={cx('tabs')}>
                        {TABS.map((tab, id) => (
                            <div
                                onClick={() => handleChangeTab(tab.tab)}
                                key={id}
                                className={cx('tab', { disable: !tab.readiness, active: currentTab === tab.tab })}
                            >
                                {tab.title}
                            </div>
                        ))}
                    </div>
                    <div className={cx('controls')}>
                        <Tippy title={showFullScreen ? 'Exit' : 'Full screen'}>
                            <Button
                                onClick={toggleShowScreen}
                                rounded
                                size="medium"
                                className={cx('btn')}
                                icon={!showFullScreen ? <MdOutlineOpenInFull /> : <MdOutlineCloseFullscreen />}
                            />
                        </Tippy>
                        <Tippy title="Close">
                            <Button
                                onClick={handleCloseNowPlaying}
                                rounded
                                size="medium"
                                className={cx('btn')}
                                icon={<IoIosArrowDown />}
                            />
                        </Tippy>
                    </div>
                </header>
                <div className={cx('main')}>
                    {currentTab === 'lyrics' && <Lyrics isIdle={isIdle} audioEl={audioEl} />}
                    {currentTab === 'playlist' && <NowPlaylist isIdle={isIdle} />}
                </div>
            </div>
        </div>
    );
};

export default NowPlaying;
