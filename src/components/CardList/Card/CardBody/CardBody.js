import React from 'react';
import './CardBody.css';

const cardBody = props => {
    const { info, isEdit, isView, onChangeInfoHandle } = props;
    let text = <p>{info}</p>;

    if (isEdit && !isView) {
        text = <textarea value={info} onChange={onChangeInfoHandle} />;
    }

    return (
        <>
            <div className="section__text">{text}</div>
        </>
    );
};

export default cardBody;
