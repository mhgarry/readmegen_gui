import { useState, useEffect } from 'react';

const PromptDisplay = () => {
    const [prompt, setPrompt] = useState('') // empty string to hold our set prompt

    const getPrompt = async () => {
        try {
            const response = await fetch('/api/prompts') //fetching prompt data from server api
            const data = await response.json(); // waiting for the json data from the server to store in the data variable
            setPrompt(data); // using the set prompt function from the server side to correctly index the prompt
        } catch (error) {
            console.error('Error getting prompt data:', error);
        }
    };

    const handleNextPromptClick = () => {
        getPrompt(); // uses the above getPrompt function to create a function that can be interacted with to manipulate the prompt data with the backend logic
    };

    useEffect(() => {
        getPrompt();
    }, []); // makes sure the get prompt function is ready to fire when called by being preloaded
    return(
        <div>
            <h2>Prompt:</h2>
            <p>{prompt}</p>
            <button onClick={handleNextPromptClick}>Next Prompt</button>
        </div>
    )
}

export default PromptDisplay;