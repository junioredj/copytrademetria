import { forwardRef } from "react";


const InputBase = ({label, type, id, value, placeholder, error, ...rest}, ref) => {
    return (
        <div className="input-box">
            <label htmlFor={id}>{label}</label>
            <input type={type}
                id={id}
                value={value}
                placeholder={placeholder}    
                ref={ref}
                {...rest}        
            />
            {!!error && (
                <p>{error.message}</p>
            )}
        </div>
    );
}

export const Input = forwardRef(InputBase)