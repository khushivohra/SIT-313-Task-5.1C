import React from 'react';
import "./question.css";

function Question() {
    return (
        <>
            <div className="title">
                <label for="title">Title  </label>
                <input type="text" id="title" name="title" placeholder="Start your question which how, what, why, etc." required></input>
            </div>
            <br></br>

            <div className="problem">
                <label for="problem">Describe your problem  </label>
                <input className="p" type="text" id="problem" name="problem" required></input>

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
export default Question;

