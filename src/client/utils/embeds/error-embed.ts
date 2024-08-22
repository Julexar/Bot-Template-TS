import { CustomError } from '../errors';
import { CustomEmbed } from './custom-embed';

export class ErrorEmbed extends CustomEmbed {
  constructor(err: CustomError, custom: boolean) {
    if (custom) super('An Error occurred...', err.cause, 0xFF0000);
    else super(`${err}`, err.cause, 0xFF0000);
  }
}