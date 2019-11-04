import React, { useState, useEffect } from 'react';

const Card = props => { 
    const { element } = props
    let [selected, setSelected] = useState(false)

    const selectCardHandler = () => {
        setSelected(!selected)
    }

    useEffect(() => {
        const { element } = props
        props.selectCard(selected, element.price)
    }, [selected])

    return (
        <div className={`card ${selected ? 'card__selected' : ''}`} onClick={selectCardHandler}>
            <div className="card__image" style={{ backgroundImage: `url('${element.image}')` }} />
            <div className="card__price">{element.price} руб.</div>
            <div className="card__content">
                <a href={element.link} target="_blank" rel="noopener noreferrer" className="card__header">{element.name}</a>
                <div className="card__info">
                    <a href={element.stats} className="card__link" rel="noopener noreferrer" target="_blank">Статистика</a>
                    <div>~ {element.count} тысяч</div>
                </div>
            </div>
            
        </div>
    );
}

export default Card;
