class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            //count : props.count // default state value.
            count : 0
        }
    }

    componentDidMount() {
        try {
            const num = parseInt(localStorage.getItem('count'), 10);
            if (!isNaN(num))
                this.setState(() => ({count : num || 0}));
        } catch (e) {
            if (e) throw e;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count)
            localStorage.setItem('count', `${this.state.count}`);
    }

    handleAddOne () {
        // this.setState({
        //     count : this.state.count + 1
        // });
        this.setState((ps) => {
            return {
                count : ps.count + 1
            }
        });
        //this.state.count++;
        //console.log(this.state.count);
        //console.log('handle add one!');
    }
    handleMinusOne () {
        this.setState(prevState => ({count : prevState.count - 1}));
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
//
// Counter.defaultProps = {
//     count : 0
// };

// create three methdos : handleAddOne, handleMinusOne, handleReset
// manupulate state.
// wire up onClick and bind in constructor.

ReactDOM.render(<Counter />, document.getElementById('app'));