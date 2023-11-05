import { Router as router } from 'express';
import showPrompts from './promptRoutes';

const apiRouter = () => {
router.use('/api', (req, res) => {
    res.send(showPrompts)
})
}

export default apiRouter;