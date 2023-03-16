import Product from "../Products/Product/Product"

import Category from "../Categories/Category/Category"


import styles from "./Shop.module.css"

import PropTypes from 'prop-types';

const Shop = ({ categories, products }) => {

    let renderProducts
    let renderCategories

    if( Array.isArray( categories ) && categories.length > 0 ) {
        renderCategories = categories.map( (category, i) => (
            <Category {...category} key={ `category-${i}` }/>
        ))
    } else {
        renderCategories = (
            <div className="error">
                Categories list is empty
            </div>
        )
    }
    
    if( Array.isArray( products ) && products.length > 0 ) {
        renderProducts = products.map( (product, i) => (
            <Product {...product} key={ `product-${i}` }/>
        ))   
    } else {
        renderProducts = (
            <div className="error">
                Products list is empty
            </div>
        )
    }

    return (
        <div className={ `Shop ${ styles.Shop }` }>                        
            <div className="Categories">
                { renderCategories }
            </div>
            <div className="Products">
                { renderProducts }
            </div>
        </div>
    )

}

Shop.propTypes = {
}

export default Shop