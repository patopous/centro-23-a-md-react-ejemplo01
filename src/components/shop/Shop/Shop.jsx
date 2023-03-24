import { useState, useEffect } from "react"

import Product from "../Products/Product/Product"
import Category from "../Categories/Category/Category"

import styles from "./Shop.module.css"

import PropTypes from 'prop-types';


const Shop = ({ categories, products }) => {

    const [ filterType, setFilterType ] = useState( "SINGLE" )


    const [ currentCategories, setCurrentCategories ] = useState([])
    const [ lastMultipleChoice, setLastMultipleChoice ] = useState([])

    const [ filteredProducts, setFilteredProducts ] = useState([])

    const [ currentProducts, setCurrentProducts ] = useState([])

    let renderProducts
    let renderCategories


    // Al inicializar
    useEffect(() => {
        setFilteredProducts( products )
    }, [])

    // reaccionar al cambiar las categorías seleccionadas
    useEffect(()=>{
        if( currentCategories.length > 0 ) {
            // elegir productos cuyas categorías están en la selección actual
            const productsInCurrentCategories = products.filter( product => {
                // buscamos si alguna de las categorías del
                // producto está en la lista de seleccionadas
                return !! product.categories.find(
                    productCategory => currentCategories.includes( productCategory )
                )
            })
            setFilteredProducts( productsInCurrentCategories )
        } else {
            // si no está seleccionada ninguna categoría:
            // mostrar todos los productos
            setFilteredProducts( products )
        }
    }, [ currentCategories ])


    const chooseCategory = ( id ) => {
        console.log("Chose", id )
        if( filterType == "SINGLE" ) {
            setCurrentCategories( [ id ] )
        } else {
            let copy = [ ...currentCategories ]
            if( copy.includes( id ) ) {
                // retirar categoría clicada del arreglo:
                // const index = copy.indexOf( id )
                // copy.splice( index, 1 )
                copy = copy.filter( x => x != id )
            } else {
                // agregar categoría clicada al arreglo:
                copy.push( id )
            }
            setCurrentCategories( copy )
            setLastMultipleChoice( copy )
        }
    }


    const chooseProduct = id => {
        console.log("Chose product:", id )

        let copy = [ ...currentProducts ]
        if( copy.includes( id ) ) {
            // retirar producto clicado del arreglo:
            copy = copy.filter( x => x != id )
        } else {
            // agregar producto clicado al arreglo:
            copy.push( id )
        }
        setCurrentProducts( copy )
        
    }


    if( Array.isArray( categories ) && categories.length > 0 ) {
        renderCategories = categories.map( (category, i) => (
            <Category
                {...category}
                chosen={ currentCategories.includes( category.id ) }
                choose={ ()=>chooseCategory( category.id ) }
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
    
    if( Array.isArray( filteredProducts ) && filteredProducts.length > 0 ) {
        renderProducts = filteredProducts.map( (product, i) => (
            <Product
                {...product}
                key={ `product-${i}` }
                choose={ ()=>chooseProduct( product.id ) }
                chosen={ currentProducts.includes( product.id ) }
            />
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

            setCurrentCategories( lastMultipleChoice )
            
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