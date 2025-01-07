import PropTypes from "prop-types";

const Button = ({ buttonText, buttonStyle, className }) => {
    return (
        <button 
            className={`${buttonStyle} ${className} rounded-[0.8em] font-semibold font-poppins text-center flex items-center justify-center`}
        >
            {buttonText}
        </button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
    buttonStyle: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
