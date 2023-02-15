import './style.css';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <div className='header__container'>
                <img
                        src={logo}
                        alt=""
                    />
                <nav>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/questionnaire">Анкеты</Link></li>
                        <li><Link to="/about">О проекте</Link></li>
                        <li><Link to="/pets">О питомцах</Link></li>
                    </ul>
                </nav>
                <Link to="/registration">Вход / Регистрация</Link>
            </div>
        </header>
    )
}