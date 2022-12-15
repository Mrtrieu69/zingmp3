import React from 'react';

import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const PARTNERS = [
    { image: '/images/home/partners/beggers.png' },
    { image: '/images/home/partners/empire.png' },
    { image: '/images/home/partners/FUGA.png' },
    { image: '/images/home/partners/Kakao-M.png' },
    { image: '/images/home/partners/monstercat.png' },
    { image: '/images/home/partners/orcahrd.png' },
    { image: '/images/home/partners/SM-Entertainment.png' },
    { image: '/images/home/partners/sony.png' },
    { image: '/images/home/partners/universal-1.png' },
    { image: '/images/home/partners/yg.png' },
];

const Partner = () => {
    return (
        <div className={cx('container')}>
            <h3 className={cx('sub-title')}>MUSIC PARTNERS</h3>
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
