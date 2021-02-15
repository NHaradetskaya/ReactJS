import React from 'react';
import './CardHeader.css';
import {
    AiFillEdit,
    AiFillDownCircle,
    AiFillCloseCircle,
} from 'react-icons/ai';

const cardHeader = (props) => {
    const {
        text,
        isEdit,
        isView,
        onSave,
        onCancel,
        onEdit,
        id,
        checkboxFlag,
        selected,
        onSwitchColor,
        onChangeTitleHandle,
        onDoubleClick,
    } = props;

    let caption = (
        <h3 className="text__title" onDoubleClick={onDoubleClick}>
            {text}
        </h3>
    );

    if (isEdit && !isView) {
        caption = (
            <textarea
                className="textarea__caption"
                value={text}
                onChange={onChangeTitleHandle}
            />
        );
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
                        {checkboxFlag && (
                            <input
                                className="checkbox__swicthColor"
                                type="checkbox"
                                id={id}
                                checked={selected}
                                onChange={onSwitchColor}
                            />
                        )}

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
