import './style.css';
import {useEffect, useState} from "react";
import Slide from './Slide';
 
export default function Slider(props) {
    const [index, setIndex] = useState(0)
    const [isPause, setPause] = useState(false)
    function changeIndex(value) {
        let nextIndex = index + value;
        if (props.loop) {
            if (nextIndex < 0) {
                nextIndex = props.slides.length - 1
            }
            if (nextIndex > props.slides.length - 1) {
                nextIndex = 0;
            }
            setIndex(nextIndex)
        } else {
            if (nextIndex < 0) {
                nextIndex = 0
            }
            if (nextIndex > props.slides.length - 1) {
                nextIndex = props.slides.length - 1;
            }
            setIndex(nextIndex)
        }
        return nextIndex;
    }
    
 
    // useEffect(() => {
    //     let timer;
    //     if(props.auto) {
    //         timer = setInterval(() => {
    //             if(!isPause) {
    //                 setIndex((i) => i + 1 > props.slides.length - 1 ? 0 : i + 1);
    //             }
    //         }, props.delay * 1000 ?? 3000)
    //     }
    //     return () => {
    //         clearInterval(timer)
    //     }
 
    // }, [isPause])
 
 
    return (
        <div className='upSlider'>
            <div key={index} className='slider'
            //  onMouseOver={()=>setPause(true)}
            //  onMouseOut={()=>setPause(false)}
            >
                <ul 
                    style={{left: -index * 1000}}
                    className='slider-container'
                >
                    {
                        props.slides.map(item => (
                            <li className='slide' key={item.id}>
                                <Slide item={item}/>
                            </li>
                        )
                    )}
                </ul> 
                {props.navs &&
                <div className="slider-controls">
                    <button onClick={() => changeIndex(-1)}></button>
                    <button onClick={() => changeIndex(1)}></button>
                </div>
                }
                {/* {props.pags &&
                <ul className="slider-navigation">
                    {props.slides.map((_, i) => <li
                        key={_.img}
                        onClick={() => setIndex(i)}
                        className={i === index ? 'active' : ''}/>)}
                </ul>
                } */}
            </div>

            <div className='upPetInfo'>
                <p><span>Животное:</span> {props.slides[index].text.animal}</p>
                <p><span>Имя: </span>{props.slides[index].text.name}</p>
                <p><span>Порода: </span>{props.slides[index].text.breed}</p>
                <p><span>Возраст: </span>{props.slides[index].text.age}</p>
                <p><span>Раскрас: </span>{props.slides[index].text.color}</p>
                <p><span>Любимые увлечения: </span>{props.slides[index].text.loveGame}</p>
                <p><span>Любимая еда: </span>{props.slides[index].text.loveEat}</p>
                <p><span>Прививки: </span>{props.slides[index].text.vaccinations}</p>
                <p><span>Характер: </span>{props.slides[index].text.character}</p>
                <p><span>Стерилизованный: </span>{props.slides[index].text.castrated}</p>
            </div>
        </div>
        

    )
}