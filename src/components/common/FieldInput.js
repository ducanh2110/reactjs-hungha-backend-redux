import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FieldInput = ({autoFocus, type, name, label, placeholder}) => {
    return(
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <div className="field">
                    {console.log(autoFocus)}
                    <Input prefix={<Icon type={type} style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={placeholder} autoFocus={autoFocus} />
                </div>
            </div>
    );
};



FieldInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};



export default FieldInput;
