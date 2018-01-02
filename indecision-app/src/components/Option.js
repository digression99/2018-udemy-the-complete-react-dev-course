import React from 'react';

const Option = (props) => {
    return (
        <div>
            <div>{props.text}
                <button onClick={(e) => {
                    props.handleDeleteOption(props.text);
                }}>
                    remove
                </button>
            </div>
            {/*<button onClick={props.handleDeleteOption}>remove</button>*/}
        </div>
    );
};

export default Option;