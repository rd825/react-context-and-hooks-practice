import React from 'react'
import {Consumer} from '../Context';
import Contact from './Contact';

const Rolodex = () => {
    return (
        <Consumer>
            {context => <div>{context.contacts.map(contact => <Contact contact={contact}/>)}</div>}
        </Consumer>
    )
}

export default Rolodex;