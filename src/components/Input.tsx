import React from 'react';
import '../styles/input.scss';
import { useInput } from "src/hooks/useInput";
import { InputProps } from 'src/types/input.type';

const Input = (_: InputProps): JSX.Element => {
  const { state, controller } = useInput()

  return (
      <div className="input-container">
        <input
          type="text"
          placeholder={state.inputPlaceholder}
          value={state.query}
          onChange={controller.handleChange}
          className='input'
        />
        <button onClick={controller.onClickRightButton} className="button">
          <i className="fas fa-search"></i>
        </button>
      </div>
  );
}

export default Input;
