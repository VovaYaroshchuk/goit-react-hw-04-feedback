import styles from './SectionTitle.module.css';
import PropTypes from 'prop-types';


export const Section = ({ title, children }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
                {children}
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}