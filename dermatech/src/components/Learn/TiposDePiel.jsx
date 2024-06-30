import PropTypes from "prop-types";

const TiposDePiel = ({ titleSkinStyle, titleSkin, textSkinStyle, textSkin, recomSkinStyle, recomSkin, item1, item2, item3 }) => {
    return (
        <section className="container border-solid border-pink border-4 p-8 bg-white rounded-xl mt-[-50px] shadow-lg">
            <h2 className={`${titleSkinStyle} leading-10 text-pink leading-[1em] text-[1.3em] font-bold w-fit line-clamp-6`}>{titleSkin}</h2>
            <p className={`${textSkinStyle} font-poppins font-bold text-[0.9em] text-ligth-gray pt-[0.6em] w-11/12 mb-4`}>{textSkin}</p>
            <h3 className={`${recomSkinStyle} leading-4 text-pink md:leading-[0.8em] text-[1em] font-bold w-fit line-clamp-6 mb-4`}>{recomSkin}</h3>
            <ul className="flex flex-col justify-between ">
                <li className="text-ligth-gray text-[0.8em]">{item1}</li>
                <li className="text-ligth-gray text-[0.8em]">{item2}</li>
                <li className="text-ligth-gray text-[0.8em]">{item3}</li>
            </ul>
        </section>
    )
}

TiposDePiel.propTypes = {
    titleSkin: PropTypes.string,
    textSkin: PropTypes.string,
    recomSkin: PropTypes.string,
    titleSkinStyle: PropTypes.string,
    textSkinStyle: PropTypes.string,
    item1: PropTypes.string,
    item2: PropTypes.string,
    item3: PropTypes.string,
    recomSkinStyle: PropTypes.string,

};

export default TiposDePiel