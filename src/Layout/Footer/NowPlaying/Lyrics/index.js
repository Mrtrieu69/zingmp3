import classNames from 'classnames/bind';
import { useRef, createRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Lyrics.module.scss';

const cx = classNames.bind(styles);

const Lyric = ({ audioEl, isIdle }) => {
    const { currentSong, isPlaying } = useSelector((state) => state.music);
    const [currentTime, setCurrentTime] = useState(Math.floor(audioEl.currentTime || 0));
    const [refs, setRefs] = useState([]);
    const lyricRef = useRef();

    useEffect(() => {
        if (currentSong.lyric.length) {
            setRefs((refs) =>
                Array(currentSong.lyric.length)
                    .fill()
                    .map((_, id) => refs[id] || createRef()),
            );
        }
    }, [currentSong.lyric]);

    useEffect(() => {
        lyricRef.current.scrollTo({ top: 0 });
    }, [currentSong]);

    // scroll to current line when first open "now playing"
    useEffect(() => {
        const activeLyric = currentSong.lyric.findIndex(
            (lyric) => lyric.start <= currentTime && currentTime <= lyric.end,
        );
        if (activeLyric >= 0 && refs.length) {
            refs[activeLyric].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refs]);

    useEffect(() => {
        const activeLyric = currentSong.lyric.findIndex((lyric) => lyric.start === currentTime);
        if (activeLyric >= 0 && refs.length) {
            refs[activeLyric].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentTime, refs, currentSong]);

    useEffect(() => {
        const handleChange = () => {
            setCurrentTime(Math.floor(audioEl.currentTime));
        };

        audioEl.addEventListener('timeupdate', handleChange);

        return () => {
            audioEl.removeEventListener('timeupdate', handleChange);
        };
    }, [audioEl]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('song', { 'without-lyric': currentSong?.lyric.length <= 0 })}>
                    <div className={cx('card')}>
                        <figure className={cx('thumb-block')}>
                            <img src={currentSong.thumb} alt="" className={cx('thumb')} />
                            {isPlaying && (
                                <span
                                    className={cx('playing-icon')}
                                    style={{
                                        backgroundImage: "url('/images/gif/icon-playing.gif')",
                                    }}
                                ></span>
                            )}
                        </figure>
                    </div>
                </div>
                <div className={cx('lyric-block', { hide: currentSong?.lyric.length <= 0 })}>
                    <div ref={lyricRef} className={cx('lyric')}>
                        {currentSong.lyric.map((text, index) => (
                            <div
                                ref={refs[index]}
                                key={index}
                                className={cx('line', {
                                    active: text.start <= currentTime && currentTime < text.end,
                                    over: text.end <= currentTime,
                                })}
                            >
                                {text.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p className={cx('info', { 'is-idle': isIdle })}>
                {currentSong.name} - <span className={cx('artists')}>{currentSong.artists}</span>
            </p>
        </div>
    );
};

export default Lyric;
