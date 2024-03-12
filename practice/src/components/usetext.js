import React, { useContext } from 'react';
import { newcontext } from "./cardscomponent";

const Contextpractice = () => {
    // const { message, messageChange } = useContext(newcontext);
    const {message,messageChange} = useContext(newcontext)

    return (
        <>
    
        <button onClick={messageChange}>Change Message</button>
        <div>{message}</div>
        </>

    );
};

export default Contextpractice;
