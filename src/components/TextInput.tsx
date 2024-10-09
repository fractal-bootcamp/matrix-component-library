interface  TextInputProps {
    disabled: boolean;
    error:boolean;
    placeholder:string;
    changeHandler?: () => void;
}


export const TextInput = ({
    disabled = false,
    error = false,
    placeholder = 'Enter Text',
    ...props
  }: TextInputProps) => {

    const disabledStyle = "border border-black";
    const enabledStyle  = "text-green-400 border border-black"

    const modeStyle = disabled?disabledStyle:enabledStyle;

    const errorStyle = "border border-black bg-red-400";
    const successStyle  = "border border-black bg-green-400"

    const validStyle = error?errorStyle:successStyle;
    return (
            <input className={`font-mono font-semibold ${modeStyle} ${validStyle}`} type="text" placeholder={disabled?'':placeholder} onChange={()=>{props.changeHandler}} disabled={disabled}/>
    );
  };

export default TextInput
  