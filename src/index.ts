import { DiscordClient } from './client/lib/DiscordClient';

const client = new DiscordClient();

client.start();

client.console.info('Client started!')

export { client };