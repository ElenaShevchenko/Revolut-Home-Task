import React from 'react';
import PropTypes from 'prop-types';
import './ExchangeInput.scss';
import {formatToTwoDigitsNumber} from '../../helpers';

const ExchangeInput = ({name, value, onChange, disabled, isValueFrom}) => (
    <input
        className="exchange__input"
        type="text"
        name={name}
        placeholder="0"
        value={value === '' ? '' : (isValueFrom ? `-${formatToTwoDigitsNumber(value)}` : formatToTwoDigitsNumber(value))}
        onChange={onChange}
        disabled={disabled}
        isValueFrom={isValueFrom}
    />
);

ExchangeInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  isValueFrom: PropTypes.bool.isRequired
};

export default ExchangeInput;
