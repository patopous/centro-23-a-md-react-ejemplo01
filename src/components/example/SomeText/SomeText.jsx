import styles from "./SomeText.module.css"

import PropTypes from 'prop-types';


const SomeText = ({ text }) => {
    return (
        <div className={ `SomeText ${styles.SomeText}` }>
            { text }
        </div>
    )
}

SomeText.defaultProps = {
    text: "Some text."
}


SomeText.propTypes = {
    text: PropTypes.string
}


export default SomeText