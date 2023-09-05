import React from 'react';
import "./article.css";

function Article() {
    return (
        <>
            <div className="title">
                <label for="title">Title  </label>
                <input type="text" id="title" name="title" placeholder="Enter a descriptive title" required></input>
            </div>
            <br></br>

            <div className="abstract">
                <label for="abstract">Abstract </label>
                <input type="text" id="abstract" name="abstract" placeholder="Enter a 1-paragraph abstract" required></input>

            </div>
            <br></br>
            <div className="article">
                <label for="article text">Article Text</label>
                <input type="text" id="article text" name="article text" placeholder="Enter a 1-paragraph abstract" required></input>
            </div>
            <br></br>

            <div className="tags">
                <label for="tags">Tags  </label>
                <input type="text" id="tags" name="tags" placeholder="Please add up to 3 tags to describe what your question is about. e.g. Java" required></input>
            </div>
            <br></br>
            <div className="Post">
                <button type="submit">Post</button>
            </div>
        </>

    )
}
export default Article;

