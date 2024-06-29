import PropTypes from "prop-types";

const Button = ({ buttonText, buttonStyle }) => {
    return (
        <button className={`${buttonStyle} rounded-[0.8em] mt-5 w-56 h-[4.5em] text-[0.83em] font-semibold font-poppins py-2 px-4`} >{buttonText} </button>
    )
}
Button.propTypes = {
    buttonText: PropTypes.string,
    buttonStyle: PropTypes.string,
};

export default Button;