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
        <div className="card">
            <div className="card__image" style={{ backgroundImage: `url('${element.image}')` }} />
            <div className="card__price">{element.price} руб.</div>
            <div className="card__content">
                <a href={element.link} target="_blank" rel="noopener noreferrer" className="card__header">{element.name}</a>
                <div className="card__stats">~ {element.people} тысяч подписчиков</div>
                <div className="card__stats">~ {element.week_stats} тысяч просмотров в неделю</div>
                <div className="card__stats">~ {element.day_stats} тысяч просмотров в день</div>
                <div className="card__check">
                    <input className="checkbox"
                        type="checkbox"
                        id={element.id}
                        name={element.id}
                        checked={selected}
                        onChange={selectCardHandler} />
                    <label htmlFor={element.id}>Выбрать для скидки</label>
                </div>
            </div>
        </div>
    );
}

export default Card;
