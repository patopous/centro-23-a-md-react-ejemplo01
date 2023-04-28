import { useState } from "react";
import style from "./SampleComponent.module.css"

const SampleComponent = () => {

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
            moreLikeThis = <button className={ style.MoreLikeThis1 }
            onClick={ nextMoreLikeThis }>
                ____
            </button>
            break
        case 1:
            moreLikeThis = <button className={ style.MoreLikeThis2 }
            onClick={ nextMoreLikeThis }>
                More
            </button>
            break
        case 2:
            moreLikeThis = <button className={ style.MoreLikeThis3 }
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

export default SampleComponent

