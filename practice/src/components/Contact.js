import React from 'react';
// {useState} 

const Contact = props => {

    // const [count, setCount] = useState(0);

    return (
        <>
            <h3>{props.contact.name}</h3>
            <strong>{props.contact.age}</strong>
            {/* <p>You've hung out {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Hang-out Counter</button> */}
        </>
    )
}

export default Contact;