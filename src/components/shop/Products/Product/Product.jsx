import styles from "./Product.module.css"

import PropTypes from 'prop-types';

const Product = ({
    image,
    name,
    choose,
    chosen
}) => {

    return (
        <div
            className={ `Product ${ styles.Product } ${ chosen && styles.chosen }` }
            onClick={ choose }
        >
            <img className={ styles.image } src={ image }/>
            <div class={ styles.name }>
                { name }
            </div>
        </div>
    )

}

Product.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    chosen: PropTypes.bool
}

export default Product