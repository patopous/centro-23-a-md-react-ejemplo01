import Cart from "../../Cart/Cart"

import styles from "../Shop.module.css"

export default ({
    quantity,
    cost,
    openCheckout,
    changeFilter,
    filterType,
    categories,
    products
}) => {


    
    return (
        <div className={ `Shop ${ styles.Shop }` }>                        
            <aside className={ styles.Categories }>
                {/* header */}
                <header>
                    
                    <Cart
                        quantity={ quantity }
                        cost={ cost }
                    />

                    <button onClick={ openCheckout }>
                        Pagar
                    </button>

                    {/* button */}
                    <button onClick={ changeFilter }>
                        {
                            filterType == "SINGLE"
                            ? "Elegir una"
                            : "Elegir varias"
                        }
                    </button>
                </header>


                { categories }
            </aside>
            <main className={ styles.Products }>
                { products }
            </main>
        </div>
    )
}