import React, { useContext } from 'react';
import Card from './Card';
import CardsContext from '../../context/card-context';


const CardList = () => {
    const cardContext = useContext(CardsContext);

    return cardContext.list.map((item) => (
        <Card
            eachItem={item}
            key={item.id}
            viewCheck={cardContext.viewCheck}
            onSelectCardHandler={() => cardContext.selectCardHandler(item.id)}
        />
    ));
};

export default CardList;
