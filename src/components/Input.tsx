import React from 'react';
import '../styles/input.scss';
import { useInput } from "src/hooks/useInput";
import { InputProps } from 'src/types/input.type';

const Input = (props: InputProps): JSX.Element => {
  const { state, controller } = useInput(props)

  return (
    <div className='input'>
      <div className='input__label'>
        {state.label && <span className='input-label'>{state.label}</span>}
      </div>
      <div className="input__container">
        <input
          type="text"
          placeholder={state.inputPlaceholder}
          value={state.query}
          onChange={controller.handleChange}
          className='input__container__input'
          />
        <button onClick={controller.onClickRightButton} className="input__container__button">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Input;
