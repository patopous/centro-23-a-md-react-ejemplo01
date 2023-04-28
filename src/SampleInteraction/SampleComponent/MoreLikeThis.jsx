import { useState } from "react";
import style from "./MoreLikeThis.module.css"

const MoreLikeThis = () => {

    const [ moreLikeThis, setMoreLikeThis ] = useState( 0 )

    const nextMoreLikeThis = () => {
        
        let next = moreLikeThis + 1
        
        if( next >= 3 ) {
            next = 0
        }

        setMoreLikeThis( next )
    }

    let renderMoreLikeThis

    switch( moreLikeThis ) {
        case 0:
            renderMoreLikeThis = <button className={ style.MoreLikeThis1 }
            onClick={ nextMoreLikeThis }>
                ____
            </button>
            break
        case 1:
            renderMoreLikeThis = <button className={ style.MoreLikeThis2 }
            onClick={ nextMoreLikeThis }>
                More
            </button>
            break
        case 2:
            renderMoreLikeThis = <button className={ style.MoreLikeThis3 }
            onClick={ nextMoreLikeThis }>
                Less
            </button>
            break
    }

    return (
        <div className={ style.Post }>
            <h1>
                Post
            </h1>

            <div>
                {renderMoreLikeThis}
            </div>

        </div>
    )

}

export default MoreLikeThis

