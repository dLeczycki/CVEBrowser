import React from 'react';
import ReactDatePicker from 'react-datepicker';
import './date-picker.css';

const DatePicker = ({
  selectedDate,
  onChange,
  isClearable = false,
  showPopperArrow = false,
  ...props
}) => (
  <ReactDatePicker
    selected={selectedDate}
    onChange={onChange}
    isClearable={isClearable}
    showPopperArrow={showPopperArrow}
    {...props}
  />
);

export default DatePicker;
