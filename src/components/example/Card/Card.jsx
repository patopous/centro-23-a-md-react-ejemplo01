import styles from "./Card.module.css"

import PropTypes from 'prop-types';


const Card = ({
    image,
    text
}) => {

    return (
        <div className={ `Card ${ styles.Card }` }>
            {
                !! image && (
                    <img className={ styles.image } src={ image }/>
                )
            }
            {
                !! text && (
                    <div class={ styles.text }>
                        { text }
                    </div>
                )
            }
        </div>
    )

}


// Card.defaultProps = {
//     image: "https://unsplash.it/300",
//     text: "Hola mundo"
// }


Card.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
}

export default Card