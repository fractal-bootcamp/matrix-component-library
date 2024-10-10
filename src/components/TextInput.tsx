import React from "react";

interface TextInputProps {
	disabled: boolean;
	error: boolean;
	placeholder: string;
	changeHandler?: () => void;
}

const TextInput = ({
	disabled = false,
	error = false,
	placeholder = "Enter Text",
	...props
}: TextInputProps) => {
	

	const errorStyle = "bg-red-400";
	const successStyle = "bg-green-400";
	const validStyle = error ? errorStyle : successStyle;

	const enabledStyle = "text-black border border-green-400";
	const defaultStyle = `font-mono font-semibold ${enabledStyle} ${validStyle} focus:outline-none focus:border-black focus:shadow focus:shadow-green-600`

	const disabledStyle = "bg-black border border-green-400";

	const modeStyle = disabled ? disabledStyle : defaultStyle;

	return (
		<input
			className={modeStyle}
			type="text"
			placeholder={disabled ? "" : placeholder}
			onChange={
				props.changeHandler
			}
			disabled={disabled}
		/>
	);
};

export default TextInput;
