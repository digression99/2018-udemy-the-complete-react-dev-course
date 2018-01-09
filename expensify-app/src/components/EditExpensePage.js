import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('updated : ', expense);
                    // dispatch the action to edit the expense.
                    // redirect to the dashboard.
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button
                onClick={() => {
                    console.log('button clicked.');
                    props.dispatch(removeExpense({
                        id: props.expense.id
                    }));
                    props.history.push('/');
                }}
            >
                Remove
            </button>
        </div>
    );
};

// remove expense via dispatch and then redirect to dashboard.

const mapStateToProps = (state, props) => {
    return {
        expense : state.expenses.find(expense => expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditExpensePage);
