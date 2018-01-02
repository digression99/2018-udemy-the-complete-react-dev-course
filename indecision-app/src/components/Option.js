import React from 'react';

const Option = (props) => (
    <div>
        <div>{props.text}
            <button onClick={(e) => {
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