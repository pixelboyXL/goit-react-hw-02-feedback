import PropTypes from 'prop-types';
import { FeedbackOptionsList, FeedBackButton } from 'components/Feedback/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackOptionsList>
            {options.map(key => (
                <li key={key}>
                    <FeedBackButton
                        type="button"
                        onClick={() => onLeaveFeedback(key)}
                    >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </FeedBackButton>
                </li>
            ))}
        </FeedbackOptionsList>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};