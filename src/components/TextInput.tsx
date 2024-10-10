import React, { useEffect, useState } from "react";

interface TextInputProps {
	disabled: boolean;
	errorHandler: (value:string) => boolean;
	placeholder: string;
	changeHandler: (value:string) => void;
}

const TextInput = ({
	disabled = false,
	placeholder = "Enter Text",
	errorHandler = (value)=>{return value===''},
	...props
}: TextInputProps) => {
	const [valid,setValid] = useState(false)
	const OnChangeHandler=(value)=>{
		setValid(errorHandler(value));
		props.changeHandler(value);
	  };

	const errorStyle = "bg-red-400  animate-shake";
	const successStyle = "bg-green-400";
	const validStyle = valid ? errorStyle : successStyle;

	const enabledStyle = "text-black border border-green-400";
	const defaultStyle = `font-mono font-semibold ${enabledStyle} ${validStyle} focus:outline-none focus:border-black focus:shadow focus:shadow-green-600`

	const disabledStyle = "bg-black border border-green-400";

	const modeStyle = disabled ? disabledStyle : defaultStyle;

	return (
		<input
			className={modeStyle}
			type="text"
			placeholder={disabled ? "" : placeholder}
			onChange={(e)=>{				
				OnChangeHandler(e.target.value)
			}
			}
			disabled={disabled}
		/>
	);
};

export default TextInput;
