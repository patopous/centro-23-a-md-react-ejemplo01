import { useState } from "react"

import style from "./SampleComponent.module.css"

const SampleComponent = () => {

    const [ liked, setLiked ] = useState( false )

    const like = () => {
        setLiked( ! liked )
    }

    return (
        <div className={ style.SampleComponent }>
            <h1>
                SampleComponent
            </h1>

            <button
                className={ liked && style.liked }
                onClick={ like }
            >
                Like
            </button>

        </div>
    )
}


export default SampleComponent