import React, {Component} from 'react';
import moment from 'moment';
import {DatePicker} from 'antd';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';

class DayPickerFromTo extends Component {
    constructor(props) {
        super(props);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.state = {
            from: new Date(),
            to: new Date(),
        };
    }
    showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
            this.to.getDayPicker().showMonth(from);
        }
    }
    handleFromChange(from) {
        // Change the from date and focus the "to" input field
        this.setState({ from });
    }
    handleToChange(to) {
        this.setState({ to }, this.showFromMonth);
    }
    handleChangeValue(moment, string) {
        this.props.handleDateValue(string[0], string[1]);
        console.log(moment)
        console.log(string)
    }
    render() {
        return(
            <RangePicker style={{width: this.props.width}}
                defaultValue={[moment('2015/06/06', dateFormat), moment('2015/06/06', dateFormat)]}
                onChange={this.handleChangeValue}
            />
        );
    }
}

export default DayPickerFromTo;
