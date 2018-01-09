import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => {
    return (
        <div>
            <h1>Add expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                    console.log('added!');
                    // console.log(props.history);
                    props.history.push('/'); // redirect.
                }}
            />
        </div>
    );
};

export default connect()(AddExpensePage);