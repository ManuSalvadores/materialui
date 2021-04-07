import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from "@material-ui/core";
import { InputLabel, Input } from './input.styles' 

function InputComponent({label,defaultValue,placeHolder} ) {
    return(
        <FormControl>
        <InputLabel htmlFor='htmlFor'>{label}</InputLabel>
        <Input id="my-input" placeholder={placeHolder}/>
        </FormControl>
    )
}
InputComponent.propTypes = {
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    placeHolder: PropTypes.placeHolder
}
InputComponent.defaultProps = {
    defaultValue:'',
    placeHolder: ''
}


export default InputComponent;