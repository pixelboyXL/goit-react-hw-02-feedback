export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul>
            {options.map(key => (
                    <li key={key}>
                        <button
                            type="button"
                            onClick={() => onLeaveFeedback(key)}
                        >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                    </li>
                ))}
        </ul>
    )
};