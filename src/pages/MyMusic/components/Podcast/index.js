import React from 'react';
import classNames from 'classnames/bind';
import styles from './Podcast.module.scss';
import { EmptyContent } from '../../../../components';

const cx = classNames.bind(styles);

const Podcast = () => {
    return <EmptyContent type="podcast" message="No podcasts in personal library yet!" />;
};

export default Podcast;
