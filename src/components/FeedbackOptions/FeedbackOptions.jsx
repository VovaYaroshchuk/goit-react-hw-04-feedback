import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(option => (
            <button type="button" key ={option} className={styles.button} onClick={()=>onLeaveFeedback(option)} >{option}</button>
        ))}      
        </>)
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
