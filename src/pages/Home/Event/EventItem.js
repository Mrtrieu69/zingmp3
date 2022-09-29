import React from 'react';
import classNames from 'classnames/bind';

import styles from './Event.module.scss';
import { Button } from '../../../components';

const cx = classNames.bind(styles);

const EventItem = ({ event }) => {
    return (
        <div className={cx('card')}>
            <a
                href="#!"
                className={cx('event-image')}
                style={{
                    backgroundImage: `url(${event.background})`,
                }}
            >
                <div className={cx('body')}>
                    <div className={cx('tag')}>{event.event}</div>
                    <h4 className={cx('description')}>{event.label}</h4>
                    <p className={cx('time')}>{event.time}</p>
                </div>
            </a>
            <div className={cx('event-follow')}>
                <div className={cx('left')}>
                    <p className={cx('text')}>Following</p>
                    <div className={cx('followers')}>
                        <p className={cx('more')}>+{event.count}</p>
                        {event.followers.map((follower, id) => (
                            <div key={id}>
                                <div className={cx('block')}>
                                    <div className={cx('follower')}>
                                        <img className={cx('avatar')} src={follower.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('right')}>
                    <Button className={cx('btn-follow')} rounded primary>
                        FOLLOW
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EventItem;
