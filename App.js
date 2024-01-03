/** 
 *
 * HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
 * File watcher algorithm - made with C++
 * MINIFY
 * BUNDLING
 * Cleaning our code
 * DEV and production Build
 * Super fast building algorithm
 * does image optimization also
 * Caching while development
 * Compresses
 * Compatible with older version of browser
 * HTTPS in dev
 * port Number
 * Consistent hashing algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted code.
 *
 */

import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => <h1>Sample Title</h1>


const App = () => {
    return (
        <div className="app">
            <Title />
        </div>
    )
}


const heading = React.createElement("h1", { id: 'heading', class: 'heading', xyz: 'abc' }, 'Hello World From React');
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<App />);

