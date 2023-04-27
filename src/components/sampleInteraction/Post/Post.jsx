import { useState } from "react"

import style from "./Post.module.css"

const Post = () => {

    const [ liked, setLiked ] = useState( false )

    const like = () => {
        setLiked( ! liked )
    }

    return (
        <div className={ style.Post }>
            <h1>
                Post
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


export default Post