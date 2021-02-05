import React from 'react';
import './CardHeader.css';
import {
    AiFillEdit,
    AiFillDownCircle,
    AiFillCloseCircle,
} from 'react-icons/ai';


const cardHeader = props => {
    const {
        text,
        isEdit,
        isView,
        onSave,
        onCancel,
        onEdit,
        id,
        selected,
        onSwitchColor,
        onChangeTitleHandle,
    } = props;

    let caption = <h3 className="text__title">{text}</h3>;

    if (isEdit && !isView) {
        caption = <textarea className="textarea__caption" value={text} onChange={onChangeTitleHandle} />;
    }

    return (
        <div className="section__title">
            <div className="title__block">
                {caption}
                {isEdit && !isView ? (
                    <div className="btns">
                        <button onClick={onSave} className="btn__save">
                            <AiFillDownCircle /> Save
                        </button>
                        <button onClick={onCancel} className="btn__cancel">
                            <AiFillCloseCircle /> Cancel
                        </button>
                    </div>
                ) : (
                    <div>
                        <input
                            className="checkbox__swicthColor"
                            type="checkbox"
                            id={id}
                            checked={selected}
                            onChange={onSwitchColor}
                        />

                        {!isView && (
                            <button onClick={onEdit} className="btn__edit">
                                <AiFillEdit />
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default cardHeader;
