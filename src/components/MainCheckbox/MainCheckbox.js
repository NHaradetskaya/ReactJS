import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: inline-block;
    > input {
        display: none;
    }
    > label {
        padding-left: 20px;
        font-size: 20px;
        &::before {
            content: '';
            display: inline-block;
            width: 25px;
            height: 25px;
            background-color: rgba(133, 130, 130, 0.205);
            box-shadow: 1px 2px 3px rgb(70, 71, 70);
            border-radius: 3px;
            margin-right: 10px;
            transition: 0.2s;
        }
    }
    > input:checked + label {
        &:before {
            content: '✔';
            text-align: center;
            background-color: rgb(93, 197, 93);
        }
    }
`;

const MainChekbox = (props) => {
    return (
        <StyledDiv>
            <input
                type="checkbox"
                id="view"
                checked={props.viewCheck}
                onChange={props.switchView}
            />
            <label for="view">View only</label>
        </StyledDiv>
    );
};

export default MainChekbox;
