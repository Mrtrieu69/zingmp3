import React from 'react';
import classNames from 'classnames/bind';

import { EmptyContent } from '../../../../components';
import styles from './MV.module.scss';

const cx = classNames.bind(styles);

const MV = () => {
    return (
        <div>
            <EmptyContent type="mv" message="No MVs in personal library yet!" />
        </div>
    );
};

export default MV;
