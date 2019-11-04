import React from 'react';

const Card = props => {
    const { element } = props
    
    return (
        <div className="card">
            <div className="card__image" style={{ backgroundImage: `url('${element.image}')` }} />
            <div className="card__price">{element.price} руб.</div>
            <div className="card__content">
                <a href={element.link} target="_blank" className="card__header">{element.name}</a>
                <div className="card__info">
                    <a href={element.stats} className="card__link" target="_blank">Статистика</a>
                    <div>~ {element.count} тысяч</div>
                </div>
            </div>
            
        </div>
    );
}

export default Card;
