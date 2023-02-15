import { useState, useEffect } from "react";


export default function Slide(props){
    const [index, setIndex] = useState(0);
    return(
        <>
        <ul className='slider-container'
            style={{left: -index * 1000}}
            >
            {
                props.item.img.map((slide, ind) => (
                    <li key={ind}>
                        <img src={slide} alt={ind}/>
                    </li>
                ))
            }
        </ul>   
        
            <ul className="slider-navigation">
                {props.item.img.map((_, i) => (
                    <div key={i}>
                    <li
                    key={i}
                    onClick={() => setIndex(i)}
                    className={i === index ? 'active' : ''}/>
                    </div>
                ))}
            </ul>
            </>  
    )
}