class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options : []
            }
        });
    }

    handleAddOption(option) {
        if (!option) {
            // if there is an empty string.
            return "enter valid value to add item";
        } else if (this.state.options.indexOf(option) >= 0) {
            // match. already in the array.
            return "this option already exists.";
        }

        this.setState(prevState => {
            return {
                options : prevState.options.concat(option)
            }
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                />
                <AddOption handleAddOption={this.handleAddOption}
                />
                <Options options={this.state.options}
                         handleDeleteOptions={this.handleDeleteOptions}
                />

            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>

    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>remove all</button>
            <h3>Options component here.</h3>
            {
                // props.options.map(opt => {
                //     return <Option text={opt} key={opt} />;
                // })
                props.options.map(opt => (<Option text={opt} key={opt}/>))
            }
        </div>
    );
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error : undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        console.log("Submitted!");
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));
        e.target.elements.option.value = "";



        // if (option) {
        //     this.props.handleAddOption(option);
        //     e.target.elements.option.value = "";
        //
        //     //console.log(option);
        //     //app.options.push(option);
        //
        //     //this.render();
        // }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption} action="">
                    <input type="text" name="option" placeholder="write anything"/>
                    <button>submit</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <div>
            <div>{props.text}</div>
        </div>
    );
};

const User = (props) => {
    return (
        <div>
            <p>name : {props.name}</p>
            <p>age : {props.age}</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
//ReactDOM.render(<User name="kimilsik" age={26} />, document.getElementById('app'));