import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    // store creation.
    const store = createStore(combineReducers({
        expenses : expensesReducer,
        filters : filtersReducer
    }));

    return store;
}

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
//     //console.log(store.getState());
// });
