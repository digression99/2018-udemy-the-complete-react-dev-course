// create component - VisibilityToggle
// function - render, constructor, handleToggleVisibility
// state - visibility -> init : false. 버튼 누르면 toggle.

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false,
            details : "this is details!"
        }
    }

    handleToggleVisibility() {
        this.setState(prevState => ({ visibility : !prevState.visibility }));
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visibility &&
                <div>
                    <p>{this.state.details}</p>
                </div>
                }
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));