import React from 'react';
import classNames from 'classnames/bind';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import styles from './Event.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import EventItem from './EventItem';

const cx = classNames.bind(styles);

const EVENTS = [
    {
        event: 'phát hành bài hát',
        label: 'Say như một thói quen - Thái Hòa',
        time: '15:00 Thứ năm, 29 tháng 9',
        background: '/images/home/events/event-1/bg.webp',
        count: 459,
        followers: [
            { image: '/images/home/events/event-1/follower1.jpg' },
            { image: '/images/home/events/event-1/follower2.jpg' },
            { image: '/images/home/events/event-1/follower3.jpg' },
            { image: '/images/home/events/event-1/follower4.jpg' },
            { image: '/images/home/events/event-1/follower5.jpg' },
            { image: '/images/home/events/event-1/follower6.jpg' },
        ],
    },
    {
        event: 'phát hành bài hát',
        label: 'Hẹn với cô đơn - Lê Hiếu',
        time: '15:00 Thứ năm, 29 tháng 9',
        background: '/images/home/events/event-2/bg.webp',
        count: 82,
        followers: [
            { image: '/images/home/events/event-2/follower1.jpg' },
            { image: '/images/home/events/event-2/follower2.jpg' },
            { image: '/images/home/events/event-2/follower3.jpg' },
            { image: '/images/home/events/event-2/follower4.jpg' },
            { image: '/images/home/events/event-2/follower5.jpg' },
            { image: '/images/home/events/event-2/follower6.jpg' },
        ],
    },
    {
        event: 'Sinh nhật sao',
        label: 'Sinh nhật sao X Phan Duy Anh',
        time: 'Đang diễn ra',
        background: '/images/home/events/event-3/bg.webp',
        count: 765,
        followers: [
            { image: '/images/home/events/event-3/follower1.jpg' },
            { image: '/images/home/events/event-3/follower2.jpg' },
            { image: '/images/home/events/event-3/follower3.jpg' },
            { image: '/images/home/events/event-3/follower4.jpg' },
            { image: '/images/home/events/event-3/follower5.jpg' },
            { image: '/images/home/events/event-3/follower6.jpg' },
        ],
    },
    {
        event: 'phát hành bài hát',
        label: 'Con tim không đổi thay - Dee Trần',
        time: '15:30 Thứ sáu, 30 tháng 9',
        background: '/images/home/events/event-4/bg.webp',
        count: 234,
        followers: [
            { image: '/images/home/events/event-4/follower1.jpg' },
            { image: '/images/home/events/event-4/follower2.jpg' },
            { image: '/images/home/events/event-4/follower3.jpg' },
            { image: '/images/home/events/event-4/follower4.jpg' },
            { image: '/images/home/events/event-4/follower5.jpg' },
            { image: '/images/home/events/event-4/follower6.jpg' },
        ],
    },
    {
        event: 'phát hành bài hát',
        label: 'Chạm - Ưng Hoàng Phúc',
        time: '16:00 Thứ năm, 06 tháng 10',
        background: '/images/home/events/event-5/bg.webp',
        count: 41,
        followers: [
            { image: '/images/home/events/event-5/follower1.jpg' },
            { image: '/images/home/events/event-5/follower2.jpg' },
            { image: '/images/home/events/event-5/follower3.jpg' },
            { image: '/images/home/events/event-5/follower4.jpg' },
            { image: '/images/home/events/event-5/follower5.jpg' },
            { image: '/images/home/events/event-5/follower6.jpg' },
        ],
    },
    {
        event: 'CONCERT',
        label: 'CAM Concert: Ngày ấy và sau này',
        time: '16:00 Thứ bảy, 01 tháng 10',
        background: '/images/home/events/event-6/bg.webp',
        count: 124,
        followers: [
            { image: '/images/home/events/event-6/follower1.jpg' },
            { image: '/images/home/events/event-6/follower2.jpg' },
            { image: '/images/home/events/event-6/follower3.jpg' },
            { image: '/images/home/events/event-6/follower4.jpg' },
            { image: '/images/home/events/event-6/follower5.jpg' },
            { image: '/images/home/events/event-6/follower6.jpg' },
        ],
    },
];

const Event = () => {
    const [maxNext, setMaxNext] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const slider = useRef();

    useEffect(() => {
        setMaxNext(document.body.offsetWidth > 1224 ? 1 : 2);
        slider.current.style.transform = `translateX(${100 * -currentPage}%)`;
    }, [currentPage]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Events</h3>
                <div className={cx('controls')}>
                    <span
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className={cx('btn', { disable: currentPage === 0 })}
                    >
                        <IoIosArrowBack />
                    </span>
                    <span
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className={cx('btn', { disable: currentPage === maxNext })}
                    >
                        <IoIosArrowForward />
                    </span>
                </div>
            </div>
            <div className={cx('container')}>
                <div ref={slider} className={cx('content')}>
                    {EVENTS.map((event, id) => (
                        <EventItem key={id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Event;
