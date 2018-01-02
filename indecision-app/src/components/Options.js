import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>remove all</button>
        {/*<h3>Options component here.</h3>*/}
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            // props.options.map(opt => {
            //     return <Option text={opt} key={opt} />;
            // })
            props.options.map(opt => (<Option
                text={opt}
                key={opt}
                handleDeleteOption={props.handleDeleteOption}
            />))
        }
    </div>
);

// const Options = (props) => {
//     return (
//         <div>
//             <button onClick={props.handleDeleteOptions}>remove all</button>
//             {/*<h3>Options component here.</h3>*/}
//             {props.options.length === 0 && <p>Please add an option to get started!</p>}
//             {
//                 // props.options.map(opt => {
//                 //     return <Option text={opt} key={opt} />;
//                 // })
//                 props.options.map(opt => (<Option
//                     text={opt}
//                     key={opt}
//                     handleDeleteOption={props.handleDeleteOption}
//                 />))
//             }
//         </div>
//     );
// };

export default Options;