import styles from "./Button.module.css"

import PropTypes from 'prop-types';

// const myAction = () => alert("Hello World")

const Button = ({ text, action }) => {
        
    return (
        <button
            className={ `Button ${styles.Button}` }
            onClick={ action }
        >
            { text }
        </button>
    )

}

Button.defaultProps = {
    text: "Some text.",
    action: () => {}
}


Button.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
}


export default Button