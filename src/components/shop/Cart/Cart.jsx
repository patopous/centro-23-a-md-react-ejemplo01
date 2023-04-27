import styles from "./Cart.module.css"

const Cart = ({ quantity, cost }) => {

    return (
        <div className={`Cart ${ styles.Cart }`}>
            <div className={ styles.quantity }>
                { quantity } productos
            </div>
            <div className={ styles.cost }>
                ${ cost  }
            </div>
        </div>
    )

}

export default Cart