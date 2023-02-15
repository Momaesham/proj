import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";


// const slides = [
//     {
//         img: 'https://zooqi.by/social/cache/image_attachment_preview_large/attachment-image/411/4001_15201642683389.jpg?1644502736',
//         text: 'Caption Text 1'
//     },
//     {
//         img: 'https://matroskin27.ru/wa-data/public/blog/img/skotish.jpg',
//         text: 'Caption Text 2'
//     },
//     {
//         img: 'https://zoo-dom.com.ua/userfiles/portal/scottish_fold3.jpg',
//         text: 'Caption Text 3'
//     },
// ];

const slides = [
    
    {
        img: ['https://zooqi.by/social/cache/image_attachment_preview_large/attachment-image/411/4001_15201642683389.jpg?1644502736','https://matroskin27.ru/wa-data/public/blog/img/skotish.jpg','https://zoo-dom.com.ua/userfiles/portal/scottish_fold3.jpg'],
        text: {
            animal: 'Кот',
            name: 'Фёдор',
            breed: 'Британец',
            age: 2,
            color: 'Серый',
            loveGame: 'Сидеть в коробке, царапать мебель',
            loveEat: 'Вискас с курицей',
            vaccinations: 'Отсутствуют',
            character: 'Спокойная',
            castrated: 'Да',
        },
        id: 1
    },
    {
        img: ['https://s15.stc.all.kpcdn.net/family/wp-content/uploads/2022/02/korgi-na-trave-960x540-1.jpg','https://zooqi.by/social/cache/image_attachment_preview_large/attachment-image/270/3989_15234696059041.jpg?1644502135','https://storage-api.petstory.ru/resize/1000x1000x80/a6/a6/16/a6a616983ad14bae9226131651384492.jpeg'],
        text: {
            animal: 'Собака',
            name: 'Лесси',
            breed: 'Корги',
            age: '4 года',
            color: 'Рыжий',
            loveGame: 'Вилять попой',
            loveEat: 'Сухой корм',
            vaccinations: 'Присутствуют',
            character: 'Игривый',
            castrated: 'Да',
        },
        id: 2
    },
    {
        img: ['https://zooqi.by/social/cache/image_attachment_preview_large/attachment-image/411/4001_15201642683389.jpg?1644502736','https://matroskin27.ru/wa-data/public/blog/img/skotish.jpg','https://zoo-dom.com.ua/userfiles/portal/scottish_fold3.jpg'],
        text: {
            animal: 'Кот',
            name: 'Ларик',
            breed: 'Британец',
            age: 2,
            color: 'Серый',
            loveGame: 'Сидеть в коробке, царапать мебель',
            loveEat: 'Вискас с курицей',
            vaccinations: 'Отсутствуют',
            character: 'Спокойная',
            castrated: 'Да',
        },
        id: 3
    },
    {
        img: ['https://s15.stc.all.kpcdn.net/family/wp-content/uploads/2022/02/korgi-na-trave-960x540-1.jpg','https://zooqi.by/social/cache/image_attachment_preview_large/attachment-image/270/3989_15234696059041.jpg?1644502135','https://storage-api.petstory.ru/resize/1000x1000x80/a6/a6/16/a6a616983ad14bae9226131651384492.jpeg','https://s15.stc.all.kpcdn.net/family/wp-content/uploads/2022/02/korgi-na-trave-960x540-1.jpg'],
        text: {
            animal: 'Собака',
            name: 'Лесси',
            breed: 'Корги',
            age: '4 года',
            color: 'Рыжий',
            loveGame: 'Вилять хвостом',
            loveEat: 'Сухой корм',
            vaccinations: 'Присутствуют',
            character: 'Игривый',
            castrated: 'Да',
        },
        id: 4
    },

]
const slidesKorgi = [
    {
        img: 'https://s15.stc.all.kpcdn.net/family/wp-content/uploads/2022/02/korgi-na-trave-960x540-1.jpg',
        text: 'Caption Text 1'
    },
    {
        img: 'https://zooqi.by/social/cache/image_attachment_preview_large/attachment-image/270/3989_15234696059041.jpg?1644502135',
        text: 'Caption Text 2'
    },
    {
        img: 'https://storage-api.petstory.ru/resize/1000x1000x80/a6/a6/16/a6a616983ad14bae9226131651384492.jpeg',
        text: 'Caption Text 3'
    },
];

export default function Questionnaire(){
    return(
        <div>
            <Header/>
            <div
                className="sliders__animals"
            >
                <Slider
                    slides={slides}
                    loop={true}
                    navs={true}
                    pags={true}
                    auto={true}
                    stopMouseHover={true}
                    delay={3}
                />
            </div>
            <Footer/>
        </div>
    )
}