import 'dotenv/config';
import { GatewayIntentBits, PresenceData } from 'discord.js';

export const config = {
  token: process.env.TOKEN,
  intents: process.env.INTENTS as unknown as GatewayIntentBits[],
  prefix: 'b!',
  owners: process.env.OWNER_IDS.split(','),
  presence: {
    status: 'online',
    activity: [
      {
        name: 'Templates',
        type: 3,
      }
    ]
  } as PresenceData
}