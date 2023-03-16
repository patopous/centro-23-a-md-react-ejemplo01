import styles from "./Product.module.css"

import PropTypes from 'prop-types';

const Product = ({
    image,
    name
}) => {

    return (
        <div className={ `Product ${ styles.Product }` }>
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
}

export default Product