import React, { useState } from "react";

interface  RatingProps {
  icon:"star"|"heart",
  maxrating:number,
  readonly:boolean
}

const Star = (color)=>{
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill={color} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15 8.5 22 9.3 17 14 18.8 21 12 17.8 5.2 21 7 14 2 9.3 9 8.5 12 2"/>
        </svg>

}
  
const Heart = (color)=>{
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill={color} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
}

const Rating = ({
      icon = "star",
      maxrating=5,
      readonly=false
  }: RatingProps) => {
    const [rating,setRating] = useState(0);
    const Icon = (i,color)=>{

      console.log(i);
      return <div key={i} onClick={()=>{readonly?{}:setRating(i+1)}}>{icon === "star"?Star(color):Heart(color)}</div>
    }
 

    return (
      <div className="flex space-x-4">
        {   
         Array(rating).fill(0).map((_,i)=>Icon(i+1,"green"))
        }
        {   
         Array(maxrating-rating).fill(0).map((_,i)=>Icon(rating+i,"white"))
        }
      </div>
    );
  };

export default Rating
  