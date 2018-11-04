import React, {useState} from 'react';

const Contact = props => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h3>{props.contact.name}</h3>
            <strong>{props.contact.age}</strong>
            <p>The count is {count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
            
        </>
    )
}


export default Contact;