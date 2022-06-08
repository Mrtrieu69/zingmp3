import React from 'react';
import classNames from 'classnames/bind';
import styles from './Album.module.scss';
import { EmptyContent } from '../../../../components';

const cx = classNames.bind(styles);

const Album = () => {
    return <EmptyContent type="album" message="No albums in personal library yet!" />;
};

export default Album;
