import classNames from 'classnames/bind';

import styles from './ConfirmModal.module.scss';
import { Modal, Button } from '../../../../components';

const cx = classNames.bind(styles);

const Confirm = ({ onClose, onConfirm }) => {
    return (
        <Modal size="medium" onClose={onClose}>
            <div className={cx('body')}>
                <h3 className={cx('title')}>Close timer</h3>
                <p className={cx('desc')}>Are you sure you want to close the timer?</p>
                <div className={cx('actions')}>
                    <Button onClick={onClose} rounded primary className={cx('btn', 'no')}>
                        No
                    </Button>
                    <Button onClick={onConfirm} rounded primary className={cx('btn')}>
                        Yes
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default Confirm;
