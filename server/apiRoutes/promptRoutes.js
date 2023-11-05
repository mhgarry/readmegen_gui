import express from 'express';
import { Router } from 'express';
import questions from '../prompts/questions.js';

const router = Router();

let currentIndex = 0; //create index to cycle through prompts on frontend 

const getNextPrompt = () => {
    const currentPrompt = questions[currentIndex]; // sets question to current index
    currentIndex = (currentIndex + 1) % questions.length; // adds to the index until the index reaches 10 leaving a remainder of zero ending the clause
    return currentPrompt; // returns the current prompt as the current value to pass
};

router.get('/prompts', (req, res) => { 
    const prompt = getNextPrompt(); //initializes function to get prompts moving
    res.send(prompt); // sends next prompt until none left
}); // is an api route to implement the logic of the getnextprompt function to perform a get request for every question until the question length leaves a remainder of zero

export default router;