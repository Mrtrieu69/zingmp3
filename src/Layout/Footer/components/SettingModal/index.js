import classNames from 'classnames/bind';

import styles from './SettingModal.module.scss';
import { Modal } from '../../../../components';

const cx = classNames.bind(styles);

const SettingModal = ({ children, onClose, onAction, time, title }) => {
    return (
        <Modal size="small" onClose={onClose}>
            <div className={cx('body')}>
                {children}
                <button
                    onClick={onAction}
                    className={cx('save', { disable: time?.minute === '00' && time?.hour === '00' })}
                >
                    {title.action}
                </button>
                <button onClick={onClose} className={cx('exit')}>
                    {title.exit}
                </button>
            </div>
        </Modal>
    );
};

export default SettingModal;
