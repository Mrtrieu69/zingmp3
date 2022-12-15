import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Mixtapes = [
    {
        label: 'Mixtape tình yêu ngủ quên',
        image1: '/images/home/mixtape/tinh-yeu-ngu-quen.jpg',
        image2: '/images/home/mixtape/thang-dien.jpg',
    },
    {
        label: 'Mixtape bông hoa đẹp nhất',
        image1: '/images/home/mixtape/bao-lau-ta-lai-quen-mot-nguoi.jpg',
        image2: '/images/home/mixtape/bong-hoa-dep-nhat.jpg',
    },
    {
        label: 'Mixtape tâm sự với người lạ',
        image1: '/images/home/mixtape/tell-ur-mom.jpg',
        image2: '/images/home/mixtape/tam-su-voi-nguoi-la.jpg',
    },
    {
        label: 'Mixtape chưa bao giờ em quên',
        image1: '/images/home/mixtape/chi-la-khong-cung-nhau.jpg',
        image2: '/images/home/mixtape/chua-bao-gio-em-quen.jpg',
    },
    {
        label: 'Mixtape phố cũ còn anh',
        image1: '/images/home/mixtape/pho-cu-con-anh.jpg',
        image2: '/images/home/mixtape/chi-con-ta-va-ta-giua-troi.jpg',
    },
];

const Mixtape = () => {
    return (
        <div className={cx('container')}>
            <h3 className={cx('title')}>Favorite Mixtape</h3>
            <div className={cx('list')}>
                {Mixtapes.map((item, id) => (
                    <div key={id} className={cx('item')}>
                        <div className={cx('zm-item')}>
                            <div className={cx('zm-card')}>
                                <div className={cx('image')}>
                                    <img src={item.image1} alt="" />
                                    <img src={item.image2} alt="" />
                                </div>
                            </div>
                            <div className={cx('zm-card-content')}>
                                <div className={cx('image-blur')}>
                                    <img src={item.image1} alt="" />
                                    <img src={item.image2} alt="" />
                                </div>
                                <div className={cx('zm-content')}>
                                    <div className={cx('zm-label')}>{item.label}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mixtape;
