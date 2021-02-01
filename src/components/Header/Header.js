import React,{useContext} from 'react';
import './Header.css';
import CardsContext from'../../context/card-context'

const Header = props => {
    const cardContext = useContext(CardsContext);
    return (
        <div className="title__header">
            <b className = "header">{props.name}</b>
            <button type="button" id="counter" className="btn btn-primary">
                Amount of cards <span className="badge bg-secondary">{cardContext.list.length}</span>
            </button>
        </div>
    );
};

export default Header;
