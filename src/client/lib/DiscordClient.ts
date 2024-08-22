import { Client, Collection, GatewayIntentBits, Guild } from 'discord.js';
import { config } from './config';
import { logger } from './logger';
import { loggers } from 'winston';
import { CustomError } from '../utils/errors';
import fs from 'fs';

export class DiscordClient extends Client {
  slashCommands = new Collection<string, any>;
  prefixCommands = new Collection<string, any>;
  config = config;
  log = logger.log;
  console = logger.console;

  constructor() {
    super({ intents: config.intents });

    this.slashCommands = new Collection();
    this.prefixCommands = new Collection();
    this.config = config;
    this.log = logger.log;
    this.console = logger.console;
  }

  async start() {
    try {
      ['events', 'slashCommands', 'prefixCommands'].forEach(async handler => {
        const Handler = await import(`./handlers/${handler}`);
        await Handler.run();
      });

      this.login(config.token);
    } catch (err) {
      this.logDevError(err);
    }
  }

  chkServerLog(server: Guild) {
    try {
      if (!fs.existsSync(`./dist/server/logs/${server.id}`)) fs.mkdirSync(`./dist/server/logs/${server.id}`);

      return loggers.get(server.id);
    } catch (err) {
      throw err;
    }
  }

  writeServerLog(server: Guild, content: string) {
    try {
      const guildLog = this.chkServerLog(server);
      guildLog.info(content);

      this.writeDevLog(`Successfully wrote to Logfile of Server "${server.name}"`);
    } catch (err) {
      this.logDevError(err);
    }
  }

  logServerError(server: Guild, err: CustomError) {
    try {
      const guildLog = this.chkServerLog(server);
      guildLog.error(`${err} - ${err.cause}`);

      this.writeDevLog(`Successfully wrote into to Logfile of Server "${server.name}"`);
    } catch (err) {
      this.logDevError(err);
    }
  }

  writeDevLog(content: string) {
    try {
      if (!fs.existsSync('./dist/client/logs/devlog.log')) this.log.info('========Beginning of new Log========');

      this.log.info(content);
    } catch (err) {
      this.logDevError(err);
    }
  }

  logDevError(err: any) {
    this.log.error(err);
  }
}