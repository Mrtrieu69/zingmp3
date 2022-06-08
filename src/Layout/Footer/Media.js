import React from 'react';
import classNames from 'classnames/bind';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdMoreHoriz } from 'react-icons/md';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Media = () => {
    const title = 'Bông Hoa Chẳng Thuộc Ve Ta';
    return (
        <div className={cx('media')}>
            <div className={cx('media-left')}>
                <img
                    className={cx('image')}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/a/1/8/7a18245ee7b959293bebfd30661b6566.jpg"
                    alt="song"
                />
            </div>
            <div className={cx('media-content')}>
                <div className={cx('name-song', { active: title.length > 16 })}>
                    <div className={cx('content')}>
                        <span className={cx('text')}>{title}</span>
                        {title.length > 16 && <span className={cx('text')}>{title}</span>}
                    </div>
                </div>
                <h3 className={cx('author')}>AMEE</h3>
            </div>
            <div className={cx('media-right')}>
                {/* handle like */}
                <button className={cx('btn')}>
                    <span className={cx('icon', { active: true })}>{true ? <AiFillHeart /> : <AiOutlineHeart />}</span>
                </button>
                <button className={cx('btn', 'large')}>
                    <span className={cx('icon')}>
                        <MdMoreHoriz />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Media;
