import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <>
            <footer>
            <div className='footer-top'>
                <ul className='footer-nav'>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/questionnaire">Анкеты</Link></li>
                    <li><Link to="/about">О проекте</Link></li>
                    <li><Link to="/pets">О питомцах</Link></li>
                </ul>
                
            </div>
            <div className='spans'>
                
                <span>example@gmail.com</span>
                <span>© Сайт знакомств для животных, 2022</span>
            </div>
            </footer>
        </>
    )
}