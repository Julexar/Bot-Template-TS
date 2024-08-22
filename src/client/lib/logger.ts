import { createLogger, format, transports } from 'winston';
const { printf } = format;
const myFormat = printf(info => `[${info.level}] ${info.message}`);

export const logger = {
  console: createLogger({
    transports: [new transports.Console()],
  }),
  log: createLogger({
    format: format.combine(
      format.timestamp(),
      format.colorize({ all: true }),
      myFormat
    ),
    transports: [new transports.File({ filename: './dist/client/logs/dev.log' })]
  })
}