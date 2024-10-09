interface  TextInputProps {
    disabled: boolean;
    placeholder:string;
    changeHandler?: () => void;
}




export const TextInput = ({
    disabled = false,
    placeholder = 'Enter',
    ...props
  }: TextInputProps) => {
    return (
        <div>
            <input type="text" placeholder={placeholder} onChange={()=>{props.changeHandler}} disabled={disabled}/>
        </div>
    );
  };

export default TextInput
  