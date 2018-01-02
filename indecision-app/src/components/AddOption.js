import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error : undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        console.log("Submitted!");
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.option.value = "";
        }
    };

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