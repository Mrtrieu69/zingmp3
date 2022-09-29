import React from 'react';

import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const PARTNERS = [
    { image: '/images/partners/beggers.png' },
    { image: '/images/partners/empire.png' },
    { image: '/images/partners/FUGA.png' },
    { image: '/images/partners/Kakao-M.png' },
    { image: '/images/partners/monstercat.png' },
    { image: '/images/partners/orcahrd.png' },
    { image: '/images/partners/SM-Entertainment.png' },
    { image: '/images/partners/sony.png' },
    { image: '/images/partners/universal-1.png' },
    { image: '/images/partners/yg.png' },
];

const Partner = () => {
    return (
        <div className={cx('container')}>
            <h3 className={cx('sub-title')}>Đối tác âm nhạc</h3>
            <div className={cx('partners')}>
                {PARTNERS.map((partner, id) => (
                    <div key={id} className={cx('col')}>
                        <div className={cx('partner-content')}>
                            <figure className={cx('partner')}>
                                <img className={cx('partner-image')} src={partner.image} alt="" />
                            </figure>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partner;
