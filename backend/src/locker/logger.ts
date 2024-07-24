import * as winston from 'winston';
import 'winston-daily-rotate-file';
import * as fs from 'fs';
import * as path from 'path';

// Définir le répertoire de log
const logDir = path.join(__dirname, '..', 'daily-logs');

// Créer le répertoire de log s'il n'existe pas déjà
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const { createLogger, format, transports } = winston;

// // Configurer le transporteur DailyRotateFile
// const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
//   level: 'info',
//   filename: path.join(logDir, '%DATE%-daily-log.log'),
//   datePattern: 'YYYY-MM-DD',
//   zippedArchive: true,
//   maxSize: '20m',
//   maxFiles: '14d',
// });

// Créer le logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
    // dailyRotateFileTransport, // Assurez-vous que ce transport est bien ajouté
    new transports.File({ filename: path.join(logDir, 'quick-start-error.log'), level: 'error' })
  ],
});

export { logger };
