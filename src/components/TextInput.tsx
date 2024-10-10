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
	const disabledStyle = "border border-black";
	const enabledStyle = "text-black border border-green-400";

	const modeStyle = disabled ? disabledStyle : enabledStyle;

	const errorStyle = "bg-red-400";
	const successStyle = "bg-green-400";

	const validStyle = error ? errorStyle : successStyle;
	return (
		<input
			className={`font-mono font-semibold ${modeStyle} ${validStyle}`}
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
