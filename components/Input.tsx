import { ChangeEvent } from "react";

interface InputProps{
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    type?: string;
}

export default function Input({value, onChange, disabled, type}: InputProps){
    return(
        <input
          value={value}
          onChange={onChange}
          disabled={disabled}
          type={type}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
    )
}