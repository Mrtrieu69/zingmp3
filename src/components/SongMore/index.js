import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SongMore.module.scss';
import { BsDownload, BsCardText } from 'react-icons/bs';

const cx = classNames.bind(styles);

const SongMore = forwardRef(({ children, song }, ref) => {
    const renderResult = (attrs) => (
        <div {...attrs} tabIndex="-1" className={cx('wrapper')}>
            <div className={cx('info')}>
                <figure className={cx('left')}>
                    <img src={song.image} alt="" className={cx('image')} />
                </figure>
                <div className={cx('right')}>
                    <h3 className={cx('title', 'line-clamp')}>{song.name}</h3>
                    <p className={cx('artists')}>{song.artists}</p>
                </div>
            </div>
            <div className={cx('menu')}>
                <a href={song.url} download className={cx('item')}>
                    <span className={cx('icon')}>
                        <BsDownload />
                    </span>
                    <span className={cx('label')}>Download</span>
                </a>
                <div className={cx('item')}>
                    <span className={cx('icon')}>
                        <BsCardText />
                    </span>
                    <span className={cx('label')}>Lyrics</span>
                </div>
            </div>
        </div>
    );

    return (
        <Tippy
            ref={ref}
            interactiveDebounce={1000}
            trigger="click"
            interactive
            offset={[-10, -10]}
            placement="right-start"
            appendTo={document.body}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
});

export default SongMore;
