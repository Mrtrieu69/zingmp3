import classNames from 'classnames/bind';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './NowPlaying.module.scss';
import { Button } from '../../../components';

// icons
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineOpenInFull, MdOutlineCloseFullscreen } from 'react-icons/md';
import { useEffect } from 'react';
import Lyric from './Lyric';

const cx = classNames.bind(styles);

const NowPlaying = ({ close, setShowNowPlaying, audioEl }) => {
    const [showFullScreen, setShowFullScreen] = useState(false);

    const { currentSong } = useSelector((state) => state.music);

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

    useEffect(() => {
        const handleChangeFullScreen = (e) => {
            setShowFullScreen(!showFullScreen);
        };

        document.addEventListener('fullscreenchange', handleChangeFullScreen);

        return () => document.removeEventListener('fullscreenchange', handleChangeFullScreen);
    }, [showFullScreen]);

    return (
        <div className={cx('wrapper', { close })}>
            <div
                className={cx('blur')}
                style={{
                    backgroundImage: `url(${currentSong.thumb})`,
                }}
            ></div>
            <div className={cx('overlay')}></div>
            <div className={cx('content')}>
                <header className={cx('header')}>
                    <div className={cx('logo')}></div>
                    <div className={cx('tabs')}>
                        <div className={cx('tab')}>Playlist</div>
                        <div className={cx('tab', 'disable')}>Karaoke</div>
                        <div className={cx('tab', 'active')}>Lyric</div>
                    </div>
                    <div className={cx('controls')}>
                        <Button
                            onClick={toggleShowScreen}
                            rounded
                            size="medium"
                            className={cx('btn')}
                            icon={!showFullScreen ? <MdOutlineOpenInFull /> : <MdOutlineCloseFullscreen />}
                        />
                        <Button
                            onClick={handleCloseNowPlaying}
                            rounded
                            size="medium"
                            className={cx('btn')}
                            icon={<IoIosArrowDown />}
                        />
                    </div>
                </header>
                <div className={cx('main')}>
                    <Lyric audioEl={audioEl} />
                </div>
            </div>
        </div>
    );
};

export default NowPlaying;
