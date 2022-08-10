import PropTypes from 'prop-types';
import styles from './Notification.module.css';
export const Notification = ({ message }) => {
    return (
        <div className={styles.notification}>
            {message}
        </div>
    );
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
