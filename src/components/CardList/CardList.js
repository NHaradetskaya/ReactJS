import React from 'react';
import Card from './Card';

const cardList = props =>
    props.list.map((item) => (
        <Card
            eachItem={item}
            key={item.id}
            viewCheck={props.viewCheck}
            onSelectCardHandler={() => props.onSelectCardHandler(item.id)}
        />
    ));

export default cardList;
