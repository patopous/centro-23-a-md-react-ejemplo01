import styles from "./Counter.module.css"

import { useState, useEffect } from "react"

const Counter = () => {

    // let number = 50

    const [ number, setNumber ] = useState( 50 )
   
    useEffect(()=>{
        console.log("inicializar");
    }, [])

    useEffect( () => {
        console.log( "new number is:", number );
    }, [ number ])
    
    


    const decrement = () => {
        let newNumber = number - 1
        setNumber( newNumber ) 
    }

    const increment = () => {
        let newNumber = number + 1
        setNumber( newNumber ) 
    }

    return (
        <div className={ `Counter ${ styles.Counter }` }>
            <div className={ styles.number }>
            { number }
            </div>
            <footer>
                <button onClick={ decrement }>
                    -
                </button>    
                <button onClick={ increment }>
                    +
                </button>    
            </footer>            
        </div>
    )

}


export default Counter