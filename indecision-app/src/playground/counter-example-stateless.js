class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count : 0 // default state value.
        }
    }

    handleAddOne () {
        // this.setState({
        //     count : this.state.count + 1
        // });
        this.setState((ps) => {
            return {
                count : ++ps.count
            }
        });
        //this.state.count++;
        //console.log(this.state.count);
        //console.log('handle add one!');
    }
    handleMinusOne () {
        this.setState(prevState => ({count : --prevState.count}));
        console.log('handle minus one!');
    }
    handleReset () {
        this.setState(() => ({count : 0}));
        // this.setState((prevState) => ({count : ++prevState.count}));
        console.log('handle reset!');
    }

    render() {
        return (
            <div>
                <h1>count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// create three methdos : handleAddOne, handleMinusOne, handleReset
// manupulate state.
// wire up onClick and bind in constructor.

ReactDOM.render(<Counter />, document.getElementById('app'));