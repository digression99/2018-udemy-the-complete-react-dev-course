import React from 'react';

const Option = (props) => (
    <div>
        <div className="option">
            <p className="option__text">{props.count}. {props.text}</p>
            <button className="button button--link option__button"
                onClick={(e) => {
                props.handleDeleteOption(props.text);
            }}>
                remove
            </button>
        </div>
    </div>
);


// const Option = (props) => {
//     return (
        {/*<div>*/}
            {/*<div>{props.text}*/}
                {/*<button onClick={(e) => {*/}
                    {/*props.handleDeleteOption(props.text);*/}
                {/*}}>*/}
                    {/*remove*/}
                {/*</button>*/}
            {/*</div>*/}
        {/*</div>*/}
//     );
// };

export default Option;