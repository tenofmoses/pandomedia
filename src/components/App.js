import React, { useState } from 'react';
import Card from './Card'
import groups from '../groups'
import './App.scss';


const App = () => {
    const [price, setPrice] = useState([0])
    const [sum, setSum] = useState(0)

    const selectCard = (selected, elementPrice) => {
        let priceList = price
        
        if (!selected) {
            priceList.splice(priceList.indexOf(elementPrice), 1)
        } else {
            priceList.push(elementPrice)
        }

        if (priceList.length) {
            setSum(priceList.reduce((accum, price) => parseInt(accum) + parseInt(price)))
        }

        setPrice([...priceList])
    }

    return (
        <div className="app">
            <header>pandomedia</header>
            <main>
                <section className="hero" />
                <section className="content">
                    <section className="groups">
                        <h1>Прайс:</h1>
                        <p className="groups__text">Хотите разместить рекламу в двух и более сообществах? Выберите сообщества - мы посчитаем сколько будет стоить размещение с учетом скидки!</p>
                        <div className="groups__wrapper">
                            {groups.map(element => <Card key={element.link} element={element} selectCard={selectCard} />)}
                        </div>
                    </section>
                    <section className="sales">
                        <h2>Скидки при покупке в одном сообществе:</h2>
                        <div className="sales__wrapper">
                            <div className="sale">
                                <div className="sale__header">5%</div>
                                <div className="sale__content">3 поста и более</div>
                            </div>
                            <div className="sale">
                                <div className="sale__header">10%</div>
                                <div className="sale__content">5 постов и более</div>
                            </div>
                            <div className="sale">
                                <div className="sale__header">15%</div>
                                <div className="sale__content">10 постов и более</div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            {price && price.length > 0 && <div className="price">
                Общая сумма: 
                <span className={`price__old ${price.length > 1 ? 'price__old-active' : ''}`}>{sum}.00</span>
                {price.length > 1 && <span className='price__new'>{Math.round((sum / 100) * (100 - price.length * 2))}.00</span>}
            </div>}
        </div>
    );
}

export default App;
