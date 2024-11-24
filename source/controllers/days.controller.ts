import {Request, Response, NextFunction} from 'express';
import DateService from '../services/date.service';

const days = async (req: Request, res: Response, next: NextFunction) => {
  const customResponse = await DateService.get_days_within_date_range(req.body);
  res.status(customResponse['code']).json(customResponse);
};

export default {days};
