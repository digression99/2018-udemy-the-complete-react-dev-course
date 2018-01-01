// import React from 'react';

console.log('app.js is running.');

let app = {
    title : "indecision app",
    subtitle : "by kim ilsik, put your life in the hands of a computer.",
    options : ['one', 'two', 'three']
};

const showOptions = (opts) => {
    let temp = [];
    opts.forEach((opt) => {
        temp.push(<p>{opt}</p>);
    });
    //return temp;
    return <div>{temp}</div>
};

const onFormSubmit = (e) => {
    // e : event.
    e.preventDefault();
    console.log("Submitted!");
    //console.log(e);

    const option = e.target.elements.option.value;
    if (option) {
        //console.log(option);
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
    //console.log(app.options);

};

const removeAllOptions = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
};


const appRoot = document.getElementById('app');

const render = () => {
    console.log('re rendering');
    console.log(app.options);

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>add option</button>
            </form>
            <button onClick={removeAllOptions}>remove all</button>
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0}  onClick={onMakeDecision}>What should I do?</button>


            {/*{showOptions(app.options)}*/}
            <ol>
                {app.options.map(opt => <li key={app.options.indexOf(opt)}>{opt}</li>)}
            </ol>
        </div>
    );

    // template, where you render.
    ReactDOM.render(template, appRoot);
};

render();