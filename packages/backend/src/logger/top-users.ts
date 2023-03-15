import { createLogger, transports, format } from 'winston';
import { loggerFiles } from '../constants';

export const topUsersLogger = createLogger({
  transports: [
    new transports.File({
      filename: loggerFiles.topUsers,
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
