import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`;
    logger.info(logMessage);
    next();
  } 
}
