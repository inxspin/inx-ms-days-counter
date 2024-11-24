import { Router } from 'express';

const daysRoutes = Router();

import daysController from '../controllers/days.controller';

daysRoutes.post('/days', daysController.days);

export default daysRoutes;
