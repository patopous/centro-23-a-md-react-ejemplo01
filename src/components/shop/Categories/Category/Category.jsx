import styles from "./Category.module.css"

import PropTypes from 'prop-types';

const Category = ({
    name,
    choose,
    chosen
}) => {

    return (
        <div
            className={ `Category ${ styles.Category } ${ chosen && styles.chosen }` }
            onClick={ choose }
        >            
            <div className={ styles.name }>
                { name }
            </div>
        </div>
    )

}

Category.propTypes = {
    name: PropTypes.string,
    choose: PropTypes.func,
    chosen: PropTypes.bool
}

export default Category