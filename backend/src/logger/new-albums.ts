import { createLogger, transports, format } from 'winston';

export const newAlbumsLogger = createLogger({
  transports: [
    new transports.File({
      filename: '.logs/new-albums.log',
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
