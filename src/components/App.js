import React from 'react';
import Card from './Card'
import groups from '../groups'
import './App.scss';


const App = () => {
    return (
        <div className="app">
            <header>pandomedia</header>
            <main>
                <section className="hero"><h1>Прайс</h1></section>  
                <section className="groups">
                    <h2>Сообщества:</h2>
                    <div className="groups__wrapper">{groups.map(element => <Card element={element} />)}</div>
                </section>
                <section className="sales">
                    <h2>Скидки:</h2>
                    <div className="sales__wrapper">
                        <div className="sale">
                            <div className="sale__header">10%</div>
                            <div className="sale__content">3 поста и более</div>
                        </div>
                        <div className="sale">
                            <div className="sale__header">15%</div>
                            <div className="sale__content">6 постов и более</div>
                        </div>
                    </div>
                </section>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
