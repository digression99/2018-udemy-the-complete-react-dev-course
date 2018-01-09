import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused : null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };

    render() {
        console.log('my props!', this.props);
        return (
            <div>
                <input type="text"
                       defaultValue={this.props.text}
                       onChange={(e) => {
                           this.props.dispatch(setTextFilter(e.target.value));
                           console.log(e.target.value);
                       }}
                />
                <label htmlFor="sort">SORT :
                    <select name="sort" id=""
                            onChange={(e) => {
                                console.log(e.target.value);
                                const sortBy = e.target.value;
                                switch (sortBy) {
                                    case 'date':
                                        this.props.dispatch(sortByDate());
                                        break;
                                    case 'amount':
                                        this.props.dispatch(sortByAmount());
                                        break;
                                    default:
                                        console.log("error!");
                                        break;
                                }
                            }}
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </label>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange} // function
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}


// setup value and opChange for select.

const mapStateToProps = (state) => {
    return {
        // ...state.filters
        filters : state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);

// export default ExpenseListFilters;