import React from "react";
import PropTypes from "prop-types";
import Input from "../input/input";
import { InputContainer } from './form.styles';

function Form({ inputs }) {
  return (
    <>
      {inputs.map((obj) => {
        const { id, label, placeHolder, defaultValue } = obj;
        return (
          <InputContainer>
            <Input
              key={id}
              label={label}
              defaultValue={defaultValue}
              placeHolder={placeHolder}
            />
          </InputContainer>
        );
      })}
    </>
  );
}

Form.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      defaultValue: PropTypes.string,
      placeHolder: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Form;
