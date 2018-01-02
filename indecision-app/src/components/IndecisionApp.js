import React, {Component} from 'react';

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options : [],
        selectedOption : undefined // for modal.
    };

    handleDeleteOptions = () =>  {
        this.setState(() => ({options : []}));
    };

    handleDeleteOption = (option) => {
        this.setState(prevState => {
            return {
                options : prevState.options.filter(opt => opt !== option)
            }
        });
        console.log('hdo : ', option);
    };

    handleAddOption = (option) => {
        if (!option) {
            // if there is an empty string.
            return "enter valid value to add item";
        } else if (this.state.options.indexOf(option) >= 0) {
            // match. already in the array.
            return "this option already exists.";
        }

        this.setState(prevState => ({options : prevState.options.concat(option)}));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log('selected option : ', option);

        this.setState(() => ({ selectedOption : option }));
    };

    handleModalPick = (option) => {
        this.setState((prevState) => ({
            // options : prevState.options.filter(opt => opt !== option),
            selectedOption : undefined
        }));
    };

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            // if (options) 를 넣으면 default value 를 사용하는 것.
            this.setState(() => ({options : options || []}));
        } catch (e) {
            // if json data is not valid.
            throw e;

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data!');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json); // save data.
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    render() {
        const subtitle = 'put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                />
                <AddOption handleAddOption={this.handleAddOption}
                />
                <Options options={this.state.options}
                         handleDeleteOptions={this.handleDeleteOptions}
                         handleDeleteOption={this.handleDeleteOption}
                />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleModalPick={this.handleModalPick}
                />
            </div>
        );
    }
}