import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SongMore.module.scss';
import Modal from '../Modal';
import { BsDownload, BsCardText } from 'react-icons/bs';

const cx = classNames.bind(styles);

const SongMore = forwardRef(({ children, song }, ref) => {
    const [showLyrics, setShowLyrics] = useState(false);

    const handleClose = () => {
        setShowLyrics(false);
    };

    const renderResult = (attrs) => (
        <div {...attrs} tabIndex="-1" onClick={(e) => e.stopPropagation()} className={cx('wrapper')}>
            <div className={cx('info')}>
                <figure className={cx('left')}>
                    <img src={song.image} alt="" className={cx('image')} />
                </figure>
                <div className={cx('right')}>
                    <h3 className={cx('title', 'line-clamp')}>{song.name}</h3>
                    <p className={cx('artists', 'line-clamp')}>{song.artists}</p>
                </div>
            </div>
            <div className={cx('menu')}>
                <a href={song.url} download className={cx('item')}>
                    <span className={cx('icon')}>
                        <BsDownload />
                    </span>
                    <span className={cx('label')}>Download</span>
                </a>
                <div onClick={() => setShowLyrics(true)} className={cx('item', { disable: song.lyric.length === 0 })}>
                    <span className={cx('icon')}>
                        <BsCardText />
                    </span>
                    <span className={cx('label')}>Lyrics</span>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Tippy
                trigger="click"
                interactive
                offset={[0, 0]}
                placement="right-start"
                appendTo={document.body}
                render={renderResult}
            >
                <div ref={ref}>{children}</div>
            </Tippy>
            {showLyrics && (
                <Modal onClose={handleClose} size="medium">
                    <div className={cx('body')}>
                        <h3 className={cx('body-title')}>Lyrics "{song.name}"</h3>
                        <div className={cx('content')}>
                            {song.lyric.map((lyric, id) => (
                                <p key={id} className={cx('line')}>
                                    {lyric.text}
                                </p>
                            ))}
                        </div>
                        <button onClick={handleClose} className={cx('close')}>
                            Close
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
});

export default SongMore;
