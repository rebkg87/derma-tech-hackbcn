import PropTypes from "prop-types";
import Button from "../general/Button";

function HomeText({ title, subtitle, text, buttonText, buttonStyle, titleStyle, subtitleStyle, textStyle }) {
    return (
        <section className="pl-[6em] pr-[6em]">
            <h2 className={`${titleStyle} leading-10 text-pink md:leading-[1em] text-[3.5em] font-extrabold md:pt-[0.5em] w-fit line-clamp-6`}>{title}</h2>
            <h2 className={`${subtitleStyle} leading-10 text-pink-medium md:leading-[1em] text-[3.5em] font-extrabold w-fit line-clamp-6`}>{subtitle}</h2>
            <p className={`${textStyle} font-poppins font-medium text-[1em] text-ligth-gray pt-[1em] w-11/12 `}>{text}</p>
            <Button buttonText={buttonText} buttonStyle={buttonStyle} />
        </section>
    );
}



HomeText.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    buttonStyle: PropTypes.string,
    titleStyle: PropTypes.string,
    textStyle: PropTypes.string,
    subtitle: PropTypes.string,
    subtitleStyle: PropTypes.string,
};

export default HomeText