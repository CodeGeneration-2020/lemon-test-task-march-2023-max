import { createLogger, transports, format } from 'winston';

export const topUsersLogger = createLogger({
  transports: [
    new transports.File({
      filename: '.logs/top-users.log',
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
