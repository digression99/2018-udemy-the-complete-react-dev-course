//import React from 'react';

console.log('app.js is running.');

// create app obj title/subtitle
// use title/subtitle in the template.
// render template.

// only render the subtitle and p tag if subtitle exist. - logical and
// render a new p tag if options.length > 0 -> here are your options (with for) or no options.

//
// const app = {
//     title : "indecision app",
//     subtitle : "by kim ilsik, put your life in the hands of a computer.",
//     options : ['one', 'two', 'three']
// };
//
// function showOptions (opts) {
//     let temp = [];
//     opts.forEach((opt) => {
//         temp.push(<p>{opt}</p>);
//     })
//     return temp;
//     //return <div>{temp}</div>
// }
//
//
//
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         {/*<p>{app.subtitle && app.subtitle}</p>*/}
//         <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
//         {showOptions(app.options)}
//
//         {/*{app.options.length > 0 ? <p>{showOptions(app.options)}</p> : <p>no!</p>}*/}
//         {/*{app.options.length > 0 ? app.options.forEach((opt) => {*/}
//             {/*return <p>{opt}</p>;*/}
//         {/*}) : "no options"}*/}
//     </div>
// );
//
// const userName = "Kim Ilsik";
// const userAge = 27;
// const userLocation = 'seoul';
//
// const user = {
//     //name : userName,
//     age : userAge,
//     location : userLocation
// };
//
// function getLocation (location) {
//     if (location) return <p>location : {location}</p>
//     // return undefined if no location exists. nothing shows up.
//     return undefined;
//     //if (location) return location;
//     //return 'unknown';
// }
//
// const templateTwo = (
//     <div>
//         {/*<h1>{user.name + " in dynamic!"} </h1>*/}
//         <h1>{user.name ? user.name : "anonymous"}</h1>
//         {/*<p>age : {user.age}</p>*/}
//         {user.age && user.age >= 18 && <p>age : {user.age}</p>}
//         {/*<p>location : {getLocation(user.location)}</p>*/}
//         {getLocation(user.location)}
//     </div>
// );
// const lala = "baba";
//

let count = 0;
const someId = 'my-id';
const addOne = () => {
    ++count;
    renderCounterApp();
    console.log('add one');
};

const subtractOne = () => {
    --count;
    renderCounterApp();
    console.log('minus one.');
};

const resetButton = () => {
    count = 0;
    renderCounterApp();
    console.log('reset');
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {

    const template = (
        <div>
            <h1>count : {count}</h1>
            <button id={someId} onClick={addOne} className="button">+1</button>
            {/*<button id={someId} onClick={() => {*/}
            {/*console.log("add one");*/}
            {/*}} className="button">+1</button>*/}
            <button onClick={subtractOne}>-1</button>
            <button onClick={resetButton}>reset</button>
        </div>
    );

    // template, where you render.
    ReactDOM.render(template, appRoot);
};

renderCounterApp();