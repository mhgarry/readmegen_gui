import { Router as router } from 'express';
import showPrompts from './promptRoutes';

const apiRouter = router(); // router to communicate between the server and client side of my project. The glue of my api 

apiRouter.use('/api', showPrompts); //defines the showPrompts function as an api route to pass to frontend

export default apiRouter; // exported to be used in my main server and passed to my front end