import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Layout = (props) => {

    return (
        <div>
            <p>Header</p>
            {props.content}
            <p>Footer</p>
        </div>
    );
}

const template = (
    <div>
        <h1>Page Title d d d</h1>
        <p>This is my page</p>
    </div>
);

//ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));
// ReactDOM.render((
//     <Layout>
//         <div>
//             <h1>Page Title d d d</h1>
//             <p>This is my page</p>
//         </div>
//     </Layout>),
//    document.getElementById('app'));



ReactDOM.render(<IndecisionApp options={['devils den', 'second district']}/>, document.getElementById('app'));

