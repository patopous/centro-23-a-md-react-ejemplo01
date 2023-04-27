import { useState } from "react"

import style from "./Screens.module.css"

const Screens = () => {

    const [ screen, setScreen ] = useState( 0 )

    const nextScreen = () => {
        
        let next = screen + 1
        
        if( next >= 3 ) {
            next = 0
        }

        setScreen( next )

    }

    let renderScreen

    switch( screen ) {
        case 0:
            renderScreen = <div className={ style.screen1 }>
                <h1>Screen 1</h1>
            </div>
            break
        case 1:
            renderScreen = <div className={ style.screen2 }>
                <h2>Screen 2</h2>
            </div>
            break
        case 2:
            renderScreen = <div className={ style.screen3 }>
                <h3>Screen 3</h3>
            </div>
            break
    }

    return (
        <div className={ style.Screens }>
            
            { renderScreen }
            
            <footer className={style.Footer}>

                <button onClick={nextScreen}>
                    Next
                </button>
            </footer>
        </div>
    )

    

}

export default Screens