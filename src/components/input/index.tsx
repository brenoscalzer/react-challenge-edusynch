import React, { useState, ChangeEvent } from 'react';
import { InputContainer, InputElement, InputLabel } from './styles';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
}

const Input = (props: InputProps) => {
  const [value, setValue] = useState<string>(props.value || '');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  }

  return (
    <InputContainer>
        <InputLabel>{props.label}</InputLabel>
        <InputElement
        type={props.type || 'text'}
        placeholder={props.placeholder || ''}
        value={value}
        onChange={handleChange}
        />
    </InputContainer>
  );
}

export default Input;