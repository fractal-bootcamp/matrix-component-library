import React from "react";
import { useEffect, useState } from "react";

interface  AlertProps {
    mode:'Warning'|'Info'|'Error'|'Success',
    message:string,
    timeout:number
}


const Alert = ({
  timeout=2000,
    ...props
  }: AlertProps) => {
    const [hide,setHide] = useState(false);
    const styleTypes = {
      'Info':"text-black border-2 border-green-400 ",
      'Success':"text-green-400  border-2 border-green-400",
      'Error':"text-red-400 border-2 border-green-400 ",
      'Warning':"text-yellow-400 border-2 border-green-400",
    };

    useEffect(()=>{
      const timeoutId = setTimeout(()=>{
        setHide(true);
      },timeout);
      return () => clearTimeout(timeoutId);
    },
  );
    

    return (
      <div>
              {!hide && <div className={`w-64 h-16 font-mono font-semibold  ${styleTypes[props.mode]}`} >{props.message}</div>}
      </div>
    );
  };

export default Alert
  