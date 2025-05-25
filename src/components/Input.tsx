import { useState } from 'react';
import '../styles/components/Input.css';

import type { InputComponentPropsType } from "../types/input.types";
import { generateUniqueId } from '../utils/generalHelpers';
import IconComponent from './Icon';

function InputComponent(props: InputComponentPropsType) {
  const [inputFocus, setInputFocus] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const id = generateUniqueId();
  return (
    <div className={`input-component ${inputFocus ? "focus-in" : "focus-out"}`}>
      { props.label && 
        <label htmlFor={id} className="label__input-component">
         { props.icon && <IconComponent icon={props.icon} size='1.2rem' fill={inputFocus}/> }
         { props.label }
        </label>
      }
      <div className="container__input-component">
        <input
          id={id}
          className="input__input-component"
          type={visibility ? 'text' : props.type}
          placeholder={props.placeholder}
          autoComplete={props.autocomplete}
          name={props.name}
          readOnly={props.readonly}
          required={props.required}
          title={props.title}
          pattern={props.pattern}
          min={props.min}
          max={props.max}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          disabled={props.disabled} />
        {
        props.type === "password" &&
        <button 
          type="button" 
          onClick={() => setVisibility(!visibility)} 
          className="visibility__input-component" >
          <IconComponent 
            icon={!visibility ? "visibility" : "visibility_off"} />
        </button>
        }
      </div>
    </div>
  );
}
export default InputComponent;