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
            <div
                className="add-option"
            >
                <form
                    onSubmit={this.handleAddOption} action=""
                >
                    {this.props.optionLength > 0 && this.state.error && <p className="add-option-error">{this.state.error}</p>}
                    <input
                        className="add-option__input"
                        type="text" name="option" placeholder="write anything"/>
                    <button className="button button--link"
                        // 텍스트 길이가 0이면 disable 하고 싶은데 어떻게 하지?
                    >Add Option!</button>
                </form>
            </div>
        );
    }
}