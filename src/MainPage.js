import Footer from "./Footer";
import preview from "./img/preview.png";
import aboutProfile from "./img/aboutProfile.jpg";
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import FormFeedback from "./FormFeedback";
import Header from "./Header";
import { Link } from 'react-router-dom';

export default function MainPage(){
return(
    <>
        <Header/>
        <div className="container">
            <main>
                <section className="preview">
                    <img src={preview} alt="preview"/>
                    <div className="preview__text">
                        <h1>Сервис для поиска, и помощи домашним питомцам</h1>
                        <div className="preview__text__links">
                            <Link to="/questionnaire">Смотреть пары</Link>
                        </div>
                    </div>
                </section>
                <section className="aboutProfile">
                    <div className="aboutProfile__text">
                        <span>Регистрация займёт несколько минут</span>
                        <h2>Создавайте анкеты своим домашним животным</h2>
                        <p> Укажите пол и породу животного, его повадки, вкусы и многое другое. <br/>
                            Загрузите фото питомца и начинайте знакомства!
                        </p>
                        <Link to="/registration">Создать анкету</Link>
                    </div>
                    <img height="550px" src={aboutProfile} alt="q"/>
                </section>
                <section className="aboutService">
                    <div className="aboutService__block">
                        <h3>Наш сервис удобен</h3>
                        <p>У вас есть возможность помочь домашним животным и попросить помощь со своими питомцами.</p>
                    </div>
                    <div className="aboutService__info">
                        <div className="aboutService__info__items">
                            <div className="aboutService__info__item">
                                <img src={img1} alt="img1"/>
                                <h4>Найти<br/>питомца</h4>
                            </div>
                            <div className="aboutService__info__item">
                                <img src={img2} alt="img2"/>
                                <h4>Создать анкету<br/>для питомца</h4>
                            </div>  
                            <div className="aboutService__info__item">
                                <img src={img3} alt="img3"/>
                                <h4>Найти<br/>нужные сервисы</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partners">
                    <h2>Наши партнёры</h2>
                    <div className="partners__items">
                        <div className="partners__items__item add">
                            <img src={img3} alt="part1"/>
                        </div>
                        <div className="partners__items__item">
                            <img src={img3} alt="part2"/>
                        </div>
                        <div className="partners__items__item">
                            <img src={img3} alt="part3"/>
                        </div>
                        <div className="partners__items__item">
                            <img src={img3} alt="part4"/>
                        </div>
                    </div>
                    <h2>Хотите с нами связаться?</h2>
                    <FormFeedback/>
                </section>
            </main>
           
        </div>
        <Footer/>
    </>
)
}