import { useState } from "react"

import Product from "../Products/Product/Product"

import Category from "../Categories/Category/Category"


import styles from "./Shop.module.css"

import PropTypes from 'prop-types';

const Shop = ({ categories, products }) => {

    const [ filterType, setFilterType ] = useState( "SINGLE" )


    const [ currentCategories, setCurrentCategories ] = useState([])

    let renderProducts
    let renderCategories

    const chooseCategory = ( id ) => {
        console.log("Chose", id )
    }

    if( Array.isArray( categories ) && categories.length > 0 ) {
        renderCategories = categories.map( (category, i) => (
            <Category
                {...category}
                onClick={ ()=>chooseCategory( category.id ) }
                key={ `category-${i}` }
            />
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

    const changeFilter = () => {
        if( filterType == "SINGLE" ) {
            setFilterType("MULTIPLE")
        } else {
            setFilterType("SINGLE")
        }
    }

    return (
        <div className={ `Shop ${ styles.Shop }` }>                        
            <aside className={ styles.Categories }>
                {/* header */}
                <header>
                    {/* button */}
                    <button onClick={ changeFilter }>
                        {
                            filterType == "SINGLE"
                            ? "Elegir una"
                            : "Elegir varias"
                        }
                    </button>
                </header>


                { renderCategories }
            </aside>
            <main className={ styles.Products }>
                { renderProducts }
            </main>
        </div>
    )

}

Shop.propTypes = {
}

export default Shop