import styles from "./Cards.module.css"

import Card from "../Card/Card"

const Cards = ({ cards }) => {

    let renderCards
    
    if( Array.isArray( cards ) && cards.length > 0 ) {

        renderCards = cards.map( (card, i) => (
            <Card {...card} key={ `card-${i}` }/>
        ))
            
    } else {

        renderCards = (
            <div className="error">
                Cards list is empty
            </div>
        )

    }

    return (
        <div className={ `Cards ${styles.Cards}` }>
            { renderCards }
        </div>
    )

}

export default Cards