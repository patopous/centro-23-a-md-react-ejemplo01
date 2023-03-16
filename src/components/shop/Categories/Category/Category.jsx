import styles from "./Category.module.css"

import PropTypes from 'prop-types';

const Category = ({
    name
}) => {

    return (
        <div className={ `Category ${ styles.Category }` }>            
            <div className={ styles.name }>
                { name }
            </div>
        </div>
    )

}

Category.propTypes = {
    name: PropTypes.string,
}

export default Category