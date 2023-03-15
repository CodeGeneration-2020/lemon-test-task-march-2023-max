import { createLogger, transports, format } from 'winston';
import { loggerFiles } from '../constants';

export const newAlbumsLogger = createLogger({
  transports: [
    new transports.File({
      filename: loggerFiles.newAlbums,
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
