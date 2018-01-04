console.log('hi!');

let toggled = false;
const details = "This is details!";

// const toggleButton = () => {
//     toggled = !toggled;
//     render();
// };

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={() => {
                toggled = !toggled;
                render();
            }}
            >
                {toggled ? "Hide Details" : "Show Details"}
            </button>
            {toggled &&
            <div>
                <p>{details}</p>
            </div>
            }
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();