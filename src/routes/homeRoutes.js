import { Router } from 'express';

const Router = new Router();

router.get('/', (req, res) => {
    res.send('Olá mundo!');
});

export default router;
